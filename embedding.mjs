import { readFileSync, writeFileSync, readdirSync } from "fs"
import { join } from "path"
import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY
if (!GOOGLE_API_KEY) {
  console.error("❌  GOOGLE_API_KEY not set (see .env.example)")
  process.exit(1)
}

const RAG_DIR = join(process.cwd(), "content/rag")
const OUTPUT = join(process.cwd(), "data/rag-vectors.jsonl")

/** Call Gemini embedding REST API */
async function embedText(text) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${GOOGLE_API_KEY}`,
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
  if (!data.embedding?.values) {
    throw new Error(`Embedding failed: ${JSON.stringify(data)}`)
  }
  return data.embedding.values
}

/** Split markdown into paragraph-level chunks (min 60 chars) */
function chunkMarkdown(text) {
  return text
    .split(/\n{2,}/)
    .map((c) => c.replace(/\n/g, " ").trim())
    .filter((c) => c.length >= 60)
}

async function main() {
  const files = readdirSync(RAG_DIR).filter((f) => f.endsWith(".md"))
  console.log(`📄  Found ${files.length} RAG source files: ${files.join(", ")}`)

  const records = []

  for (const file of files) {
    const source = file.replace(".md", "")
    const raw = readFileSync(join(RAG_DIR, file), "utf-8")
    const chunks = chunkMarkdown(raw)

    console.log(`   ✦ ${file} → ${chunks.length} chunks`)

    for (let i = 0; i < chunks.length; i++) {
      const text = chunks[i]
      console.log(`     embedding chunk ${i + 1}/${chunks.length}…`)
      const embedding = await embedText(text)
      records.push({ id: `${source}-${i}`, source, text, embedding })
      // Small delay to avoid rate limiting
      await new Promise((r) => setTimeout(r, 200))
    }
  }

  const jsonl = records.map((r) => JSON.stringify(r)).join("\n")
  writeFileSync(OUTPUT, jsonl, "utf-8")

  console.log(`\n✅  ${records.length} vectors written to data/rag-vectors.jsonl`)
}

main().catch((err) => {
  console.error("❌", err)
  process.exit(1)
})
