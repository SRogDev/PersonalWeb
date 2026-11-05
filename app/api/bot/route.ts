import { streamText, convertToModelMessages, type UIMessage } from "ai"
import { google } from "@ai-sdk/google"
import { readFileSync } from "fs"
import path from "path"

const SYSTEM_PROMPT = `Eres un asistente experto que responde preguntas basándote SÓLO en la información del siguiente contexto sobre Roger Oria.

Si la pregunta tiene relación con el contexto pero llegas a un punto sin información, incentiva al usuario a contactar a Roger directamente.
Si la pregunta no tiene relación con el contexto, responde "This question is out of my knowledge" en el idioma de la pregunta.
Usa tu criterio para aportar razonamiento propio a partir de la información dada.
Responde siempre en el mismo idioma de la pregunta.

CONTEXTO:
{context}`

// Cheap-model chain for a small RAG bot: start with the cheapest
// CURRENT model (gemini-3.5-flash-lite: $0.30/$2.50 per 1M tokens) and
// fall back to pricier Flash models only when the previous one fails
// (e.g. overload). NOTE: gemini-2.5-flash-lite was tried first but the
// API now answers "no longer available to new users" — retired for
// new accounts. The frontend retries with attempt+1 on error, so a
// saturated model no longer leaves the chat hanging forever.
const MODEL_CHAIN = [
  "gemini-3.5-flash-lite",
  "gemini-3.6-flash",
  "gemini-3.8-flash",
] as const

interface RagVector {
  id: string
  source: string
  text: string
  embedding: number[]
}

let vectorsCache: RagVector[] | null = null

function loadVectors(): RagVector[] {
  if (!vectorsCache) {
    const filePath = path.join(process.cwd(), "data", "rag-vectors.jsonl")
    const raw = readFileSync(filePath, "utf-8")
    vectorsCache = raw
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line) as RagVector)
  }
  return vectorsCache
}

function uiMessageText(message: UIMessage): string {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => (part as { text: string }).text)
    .join(" ")
}

async function embedQuery(text: string, apiKey: string): Promise<number[]> {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "models/gemini-embedding-001",
        content: { parts: [{ text }] },
      }),
    }
  )
  const data = (await res.json()) as { embedding?: { values?: number[] } }
  if (!data.embedding?.values) {
    throw new Error("Query embedding failed")
  }
  return data.embedding.values
}

function cosine(a: number[], b: number[]): number {
  let dot = 0
  let normA = 0
  let normB = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB) || 1)
}

export async function POST(request: Request) {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY
  if (!apiKey) {
    return Response.json(
      { error: "Chat is not configured (missing GOOGLE_API_KEY)." },
      { status: 503 }
    )
  }

  const { messages, attempt = 0 } = (await request.json()) as {
    messages: UIMessage[]
    attempt?: number
  }
  const modelId =
    MODEL_CHAIN[Math.min(Math.max(attempt, 0), MODEL_CHAIN.length - 1)]
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")

  let context = ""
  try {
    const vectors = loadVectors()
    const queryEmbedding = await embedQuery(
      uiMessageText(lastUserMessage ?? ({ parts: [] } as unknown as UIMessage)).slice(0, 2000),
      apiKey
    )
    const top = vectors
      .map((v) => ({ text: v.text, score: cosine(queryEmbedding, v.embedding) }))
      .sort((x, y) => y.score - x.score)
      .slice(0, 5)
    context = top.map((t) => t.text).join("\n\n---\n\n")
  } catch {
    context = ""
  }

  const result = streamText({
    // Thinking LOW: this is short RAG Q&A, not deep reasoning —
    // faster answers and far less load on the model.
    model: google(modelId, { thinkingConfig: { thinkingLevel: "low" } }),
    // Default retries (2) turned a 15s overload into a ~55s hang.
    // One retry is enough; the frontend falls back to the next model.
    maxRetries: 1,
    system: SYSTEM_PROMPT.replace("{context}", context || "No context available."),
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
