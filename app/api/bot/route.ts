import { streamText } from "ai"
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

export async function POST(request: Request) {
  const { messages } = await request.json()

  const filePath = path.resolve(process.cwd(), "contenido-web.json")
  const raw = readFileSync(filePath, "utf-8")
  const { content } = JSON.parse(raw) as { content: string }

  const systemWithContext = SYSTEM_PROMPT.replace("{context}", content)

  const result = streamText({
    model: google("gemini-1.5-flash"),
    system: systemWithContext,
    messages,
  })

  return result.toTextStreamResponse()
}
