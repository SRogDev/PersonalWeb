"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AIChat from "./ai-chat"

export default function FloatingChatButton() {
  const [showTooltip, setShowTooltip] = useState(true)
  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 5000)
    }, 15000)

    // Hide after initial 5 seconds
    setTimeout(() => setShowTooltip(false), 5000)

    return () => clearInterval(interval)
  }, [])

  const typewriterText = "Want to ask something about Roger?"

  return (
    <>
      {/* Contenedor separado para el botón y tooltip */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {showTooltip && !isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="absolute bottom-full right-0 mb-4 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-base whitespace-nowrap shadow-xl max-w-xs"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="overflow-hidden inline-block"
              >
                {typewriterText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              {/* Triángulo indicador */}
              <div className="absolute bottom-[-6px] right-6 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-primary"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-primary/20"
          >
            <motion.div animate={{ rotate: isChatOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <Bot className="h-8 w-8 sm:h-10 sm:w-10" />
            </motion.div>
          </Button>
        </motion.div>
      </div>

      {/* Componente de chat fuera del contenedor fixed */}
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}