// app/api/ask/route.ts
import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

import {
  GoogleGenerativeAIEmbeddings,
  ChatGoogleGenerativeAI,
} from "@langchain/google-genai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { ChatPromptTemplate } from "@langchain/core/prompts";

interface RequestBody {
  question?: string;
}

const SYSTEM_PROMPT = `
Eres un asistente experto que responde preguntas basándose SÓLO en la información directamente relevante
 proporcionada en este contexto. 
Si la pregunta solicita un tipo específico de información (ej. "habilidades blandas"),
 extrae SÓLO esa información del contexto
 y omite cualquier otra que no sea explícitamente del tipo solicitado.

Contexto:
{context}

Responde siempre en el mismo idioma de la pregunta.
Si la pregunta no tiene relación con el contexto O no puedes extraer la información pedida específicamente del contexto
, responde: "Eso escapa de mi entendimiento".
`;

export async function POST(request: Request) {
  try {
    const { question }: RequestBody = await request.json();

    if (!question || question.trim() === "") {
      return NextResponse.json(
        { error: "La pregunta es obligatoria." },
        { status: 400 }
      );
    }

    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY ?? "";
    if (!GOOGLE_API_KEY) {
      return NextResponse.json(
        { error: "GOOGLE_API_KEY no está configurada." },
        { status: 500 }
      );
    }

    // Cargar embedding guardado localmente
    const filePath = path.resolve(process.cwd(), "public/vector-web.json");
    const raw = readFileSync(filePath, "utf-8");
    const { text, embedding }: { text: string; embedding: number[] } = JSON.parse(raw);

    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: GOOGLE_API_KEY,
      model: "gemini-embedding-001",
    });

    const vectorstore = await MemoryVectorStore.fromTexts(
      [text],
      [embedding],
      embeddings
    );

    // Buscar contexto relevante (1 resultado)
    const results = await vectorstore.similaritySearch(question, 1);
    const context = results.length > 0 ? results[0].pageContent : "";

    // Construir prompt tipo chat con system + user
    const prompt = ChatPromptTemplate.fromMessages([
      ["system", SYSTEM_PROMPT.trim()],
      ["user", "{question}"],
    ]);

    // Instanciar modelo Gemini chat
    const chat = new ChatGoogleGenerativeAI({
      model: "gemini-1.5-flash",
      temperature: 0.2,
      apiKey: GOOGLE_API_KEY,
    });

    // Encadenar prompt + modelo
    const chain = prompt.pipe(chat);

    // Invocar con variables para prompt PASANDO context y question SEPARADOS
    // Ahora sí pasamos context explícitamente para reemplazar {context} en system
    const response = await chain.invoke({
      context,
      question,
    });

    // response es AIMessageChunk o similar, la respuesta está en response.content
    const answer = context && response.content
      ? response.content
      : "Eso escapa de mi entendimiento";

    return NextResponse.json({ answer });
  } catch (error: any) {
    console.error("Error en /api/ask:", error);
    return NextResponse.json(
      { error: error.message ?? "Error inesperado" },
      { status: 500 }
    );
  }
}

