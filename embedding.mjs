// scripts/generateEmbeddingLangchainGemini.js
import { readFileSync, writeFileSync } from "fs";
import dotenv from "dotenv";
dotenv.config();

// Importa la clase correcta para la API de Google AI Studio (Gemini)
// Nota: A partir de ciertas versiones de LangChain, el paquete es @langchain/google-genai
// o @langchain/google-vertexai si el modelo Gemini es accedido via Vertex AI
// Pero para la API Key directa de AI Studio, usaremos @langchain/google-genai.
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

async function main() {
  const data = JSON.parse(readFileSync("contenido-web.json", "utf-8"));
  const text = data.content;

  // Inicializa el modelo de embeddings de Google Generative AI
  // Asegúrate de que tu variable de entorno se llama GOOGLE_API_KEY
  // y que contiene la API Key de Google AI Studio.
  const embeddings = new GoogleGenerativeAIEmbeddings({
    // Usa el modelo gemini-embedding-001 que funciona con la API Key de AI Studio.
    // Aunque el paquete es "GoogleGenerativeAIEmbeddings", el modelo se especifica aquí.
    model: "gemini-embedding-001",
    apiKey: process.env.GOOGLE_API_KEY, // Usa tu nombre de variable de entorno existente
  });

  const vector = await embeddings.embedQuery(text);

  writeFileSync(
    "public/embedding-web-gemini-langchain.json", // Cambia el nombre del archivo de salida para evitar conflictos
    JSON.stringify({ text, embedding: vector }, null, 2)
  );

  console.log("Embedding generado y guardado usando LangChain.js y Google Gemini!");
}

main().catch(console.error);

