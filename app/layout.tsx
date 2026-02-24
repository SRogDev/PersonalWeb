import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import FloatingChatButton from "@/components/floating-chat-button"

export const metadata: Metadata = {
  title: "Roger Oria — Full Dev Cycle | Fullstack Developer & Startup Founder",
  description:
    "Roger Oria is a Full Dev Cycle developer: from UI design to backend to AI deployment. Fullstack developer, startup founder, and product engineer. Open to freelance work and startup opportunities worldwide.",
  keywords: [
    "Roger Oria",
    "Roger Dev",
    "Fullstack Developer",
    "Full Dev Cycle",
    "Freelance Developer",
    "Product Engineer",
    "Next.js Developer",
    "React Developer",
    "Startup Founder",
    "AI Developer",
    "Software Engineer",
    "Web Developer Portfolio",
    "Full Stack Developer",
    "Tech Entrepreneur",
  ],
  authors: [{ name: "Roger Oria", url: "https://rogeroria.dev" }],
  creator: "Roger Oria",
  metadataBase: new URL("https://rogeroria.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rogeroria.dev",
    siteName: "Roger Oria — Full Dev Cycle",
    title: "Roger Oria — Fullstack Developer & Startup Founder",
    description:
      "Full Dev Cycle developer. From UI to backend to AI. Building startups, shipping products.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roger Oria — Full Dev Cycle Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roger Oria — Full Dev Cycle",
    description: "Fullstack developer, startup founder, product engineer.",
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
