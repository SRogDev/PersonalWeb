import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import FloatingChatButton from "@/components/floating-chat-button"

export const metadata: Metadata = {
  title: "Roger Oria — Product Builder · AI Engineer / ML enthusiast",
  description:
    "Roger Oria is a Product Builder and AI Engineer building Polygrow, the AI-native business OS for solopreneurs. Agent systems with LangGraph, ML training with PyTorch, RL and LoRA fine-tuning. Idea → model → product → production.",
  keywords: [
    "Roger Oria",
    "Roger Dev",
    "Product Builder",
    "AI Engineer",
    "ML Engineer",
    "ML enthusiast",
    "Aspiring Tech Founder",
    "LangGraph",
    "PyTorch",
    "Reinforcement Learning",
    "LoRA Fine-tuning",
    "Polygrow",
    "Next.js Developer",
    "Startup Founder",
    "AI Agents",
    "Software Engineer",
    "Tech Entrepreneur",
  ],
  authors: [{ name: "Roger Oria", url: "https://roger-developer.vercel.app" }],
  creator: "Roger Oria",
  metadataBase: new URL("https://roger-developer.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roger-developer.vercel.app",
    siteName: "Roger Oria — Product Builder",
    title: "Roger Oria — Product Builder · AI Engineer / ML enthusiast",
    description:
      "Product Builder and AI Engineer building Polygrow. LangGraph agents, PyTorch training, RL. Idea → model → product → production.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roger Oria — Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roger Oria — Product Builder",
    description: "Product Builder, AI Engineer / ML enthusiast. Building Polygrow.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className={GeistSans.className}>
        <FloatingChatButton />
        <div className="min-h-screen bg-background relative overflow-hidden">
          {/* Futuristic ambient background */}
          <div className="fixed inset-0 bg-gradient-to-br from-black via-[#040810] to-black" />
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px] animate-glow-pulse" />
            <div
              className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[100px] animate-glow-pulse"
              style={{ animationDelay: "1.5s" }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl bg-background/95 backdrop-blur-sm border-x border-border/40">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
