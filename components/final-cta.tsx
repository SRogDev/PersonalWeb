"use client"

import { Button } from "@/components/ui/button"
import { FaTelegram } from "react-icons/fa"
import { Mail, Download } from "lucide-react"
import { motion } from "framer-motion"

export default function FinalCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-6 py-16 text-center"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-accent/10 to-primary/5 rounded-2xl p-8 border border-accent/20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hiring for an AI Engineer?</h2>
        <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
          Start with the featured projects above, then grab my CV — or write to me directly.
          I reply fastest by email and Telegram.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-lg shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 min-h-[44px]"
            >
              <a href="mailto:rogeroriaglez@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email me
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              className="font-semibold px-8 py-3 text-lg min-h-[44px]"
            >
              <a href="https://t.me/@Rogeroria" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="mr-2 h-5 w-5" />
                Telegram
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              className="font-semibold px-8 py-3 text-lg min-h-[44px]"
            >
              <a href="/RogerCV.pdf" download="RogerCV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
