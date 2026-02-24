import { streamText } from "ai"
import { google } from "@ai-sdk/google"
import { readFileSync } from "fs"
import path from "path"

// ── Types ────────────────────────────────────────────────────────────────────
interface VectorRecord {
  id: string
  source: string
  text: string
  embedding: number[]
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, normA = 0, normB = 0
  for (let i = 0; i < a.length; i++) {
    dot   += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
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
  const data = await res.json()
  return data.embedding.values as number[]
}

// ── Load vectors once (module-level cache — serverless cold start is fast) ───
let _records: VectorRecord[] | null = null

function getRecords(): VectorRecord[] {
  if (_records) return _records
  const filePath = path.resolve(process.cwd(), "data/rag-vectors.jsonl")
  const lines = readFileSync(filePath, "utf-8").trim().split("\n")
  _records = lines.map((l) => JSON.parse(l) as VectorRecord)
  return _records
}

// ── System prompt ─────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `Eres un asistente experto que responde preguntas sobre Roger Oria basándote SÓLO en la información del contexto proporcionado.

Si la pregunta tiene relación con el contexto pero no hay suficiente información, invita al usuario a contactar a Roger directamente por Telegram (@Rogeroria).
Si la pregunta no tiene relación con el contexto, responde "This question is out of my knowledge" en el idioma de la pregunta.
Responde siempre en el mismo idioma de la pregunta. Puedes razonar y aportar tu propia lógica a partir de la info dada.

CONTEXTO RELEVANTE:
{context}`

// ── Route ─────────────────────────────────────────────────────────────────────
export async function POST(request: Request) {
  const { messages } = await request.json()

  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY ?? ""

  // Last user message is the query to embed
  const lastUserMessage = [...messages].reverse().find((m: { role: string }) => m.role === "user")
  const query = lastUserMessage?.content ?? ""

  // Embed the query and retrieve top-3 most relevant chunks
  const queryVec = await embedQuery(query, GOOGLE_API_KEY)
  const records  = getRecords()

  const ranked = records
    .map((r) => ({ ...r, score: cosineSimilarity(queryVec, r.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)

  const context = ranked.map((r) => `[${r.source}]\n${r.text}`).join("\n\n---\n\n")

  const system = SYSTEM_PROMPT.replace("{context}", context)

  const result = streamText({
    model: google("gemini-1.5-flash"),
    system,
    messages,
  })

  return result.toDataStreamResponse()
}
