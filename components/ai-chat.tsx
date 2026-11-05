"use client"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport, type UIMessage } from "ai"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface AIChatProps {
  isOpen: boolean
  onClose: () => void
}

interface ChatState {
  messages: UIMessage[]
  sendMessage: (message: { text: string }) => void
  status: "submitted" | "streaming" | "ready" | "error"
  error: Error | undefined
  regenerate: () => void
  clearError: () => void
}

const SUGGESTED_QUESTIONS = [
  "Does Roger know Next.js?",
  "What is Polygrow?",
  "What has Roger built with LangGraph?",
]

function messageText(message: UIMessage): string {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => (part as { text: string }).text)
    .join("")
}

export default function AIChat({ isOpen, onClose }: AIChatProps) {
  const [input, setInput] = useState("")
  // Which model in the server's cheap-model chain this attempt uses.
  // 0 = gemini-2.5-flash-lite, then pricier Flash fallbacks on error.
  const attemptRef = useRef(0)
  const { messages, sendMessage, status, error, regenerate, clearError } =
    useChat({
      transport: new DefaultChatTransport({
        api: "/api/bot",
        body: () => ({ attempt: attemptRef.current }),
      }),
    }) as unknown as ChatState

  const isLoading = status === "submitted" || status === "streaming"
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!input.trim() || isLoading) return
    attemptRef.current = 0 // fresh question starts at the cheapest model
    sendMessage({ text: input })
    setInput("")
  }

  const handleRetry = () => {
    // Next attempt uses the next model in the chain (max 2, then wraps).
    attemptRef.current = (attemptRef.current + 1) % 3
    clearError()
    regenerate()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-24 right-4 z-50 w-[350px] sm:w-[420px]"
        >
          <Card className="bg-card border-accent/20 shadow-2xl shadow-accent/5">
            <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-border/40">
              <CardTitle className="text-accent font-mono text-sm">
                Ask me about Roger
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose} className="h-7 w-7 p-0">
                <X className="h-3.5 w-3.5" />
              </Button>
            </CardHeader>

            <CardContent className="space-y-3 p-3">
              <div
                className="h-52 max-h-52 overflow-y-auto space-y-2 pr-1"
                style={{ wordBreak: "break-word" }}
              >
                {messages.length === 0 && (
                  <div className="pt-6 space-y-2">
                    <p className="text-xs text-muted-foreground font-mono text-center">
                      Ask anything about Roger&apos;s work, skills, or projects.
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {SUGGESTED_QUESTIONS.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => {
                            attemptRef.current = 0
                            sendMessage({ text: q })
                          }}
                          className="text-[11px] font-mono px-2 py-1 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-2.5 rounded-lg text-sm break-words max-w-[85%] ${
                      message.role === "user"
                        ? "bg-accent/15 text-foreground border border-accent/20 ml-auto"
                        : "bg-muted/60 text-muted-foreground mr-auto"
                    }`}
                  >
                    {messageText(message)}
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-muted/60 text-muted-foreground p-2.5 rounded-lg text-sm mr-auto max-w-[85%]"
                  >
                    <span className="inline-flex gap-1">
                      <span className="animate-bounce" style={{ animationDelay: "0ms" }}>·</span>
                      <span className="animate-bounce" style={{ animationDelay: "150ms" }}>·</span>
                      <span className="animate-bounce" style={{ animationDelay: "300ms" }}>·</span>
                    </span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-muted/60 text-muted-foreground p-2.5 rounded-lg text-sm mr-auto max-w-[85%]"
                  >
                    <p>
                      The AI is busy right now — I&apos;ll try a backup model.
                    </p>
                    <button
                      type="button"
                      onClick={handleRetry}
                      className="mt-1.5 text-xs font-mono px-2 py-1 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
                    >
                      Retry
                    </button>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex gap-2"
              >
                <Textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask something about Roger..."
                  className="flex-1 min-h-[40px] max-h-[80px] text-sm resize-none border-border/60 focus:border-accent/50"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit(e)
                    }
                  }}
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground self-end"
                >
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
