import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import FloatingChatButton from "@/components/floating-chat-button"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Roger Oria - Software Developer",
  description: "Portfolio of Roger Oria, Software Developer and Startup CEO",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
           <FloatingChatButton />
        <div className="min-h-screen bg-black relative overflow-hidden">
          {/* Efectos de fondo futuristas */}
          <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50" />
          <div className="fixed inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl bg-background/95 backdrop-blur-sm border-x border-border/50">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
