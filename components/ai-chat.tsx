"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChat({ isOpen, onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Ref para el contenedor de mensajes para poder hacer scroll automático
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Función que hace scroll al final de la lista de mensajes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Cada vez que cambian messages o isLoading, hacemos scroll al final
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error en la API");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.answer ?? "Lo siento, no he podido responder.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      const assistantMessage: Message = {
        role: "assistant",
        content:
          error?.message || "Ocurrió un error inesperado. Intenta nuevamente.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-24 right-4 z-50 w-[350px] sm:w-[420px]"
        >
          <Card className="bg-card border-primary/20 shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-primary">Ask me about Roger</CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4 p-2">
              <div
                className="h-52 max-h-52 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent scrollbar-thumb-rounded"
                style={{ wordBreak: "break-word" }} // evita scroll horizontal por palabras largas
              >
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-2 rounded text-sm break-words ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground ml-4 max-w-[80%]"
                        : "bg-muted text-muted-foreground mr-4 max-w-[80%]"
                    }`}
                  >
                    {message.content}
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-muted text-muted-foreground p-2 rounded text-sm mr-4 max-w-[80%]"
                  >
                    Typing...
                  </motion.div>
                )}
                {/* Este div invisible es para scrollear aquí */}
                <div ref={messagesEndRef} />
              </div>
              <div className="flex gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask something about Roger..."
                  className="flex-1 min-h-[40px] max-h-[80px]"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />
                <Button onClick={handleSend} disabled={isLoading} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
