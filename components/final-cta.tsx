"use client"

import { Button } from "@/components/ui/button"
import { FaTelegram } from "react-icons/fa"
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
        className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to work together?</h2>
        <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
          If you have a project in mind or want to collaborate on something amazing, don't hesitate to contact me. I'm
          always open to new opportunities and challenges.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg"
          >
            <a href="https://t.me/@Rogeroria" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="mr-2 h-5 w-5" />
              Contact via Telegram
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
