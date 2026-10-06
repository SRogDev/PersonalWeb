# Roger Oria — Personal Website

Personal site of Roger Oria — AI Founder, AI Engineer & ML Engineer. Dark theme, platinum (`#E5E4E2`) primary, electric cyan (`#00E5FF`) accent.

## Stack

Next.js 15 · React 19 · Tailwind CSS · shadcn/ui · Framer Motion / GSAP.
AI chat ("Ask me about Roger"): Vercel AI SDK + Google Gemini, RAG over `content/rag/*.md` with vectors in `data/rag-vectors.jsonl`.

## Quickstart

```bash
cp .env.example .env.local   # add GOOGLE_API_KEY / GOOGLE_GENERATIVE_AI_API_KEY
npm install --legacy-peer-deps
npm run dev
```

## Scripts

- `npm run dev` / `npm run build` / `npm run start`
- `npm run embed` — re-embed `content/rag/*.md` into `data/rag-vectors.jsonl` (needs `GOOGLE_API_KEY`)

## Structure

- `app/` — App Router pages + `/api/bot` (RAG chat route)
- `components/` — page sections (hero, skills, experience, open-work, …) + shadcn/ui
- `content/rag/` — markdown sources feeding the chat bot
- `data/rag-vectors.jsonl` — committed embeddings; regenerate via `npm run embed` after editing `content/rag/`
- `public/covers/` — SVG covers for featured projects

## Env

See `.env.example`. Never commit `.env.local` (gitignored).

## Status

Active. 2026-10 overhaul: AI Founder positioning, AI/ML-first skill set, featured projects (Polygrow, Rustenwer, Rogis, Domino RL, Agentropy, DeepBooks), chat bot rewired to RAG over `data/rag-vectors.jsonl`, Google API key moved to env.
