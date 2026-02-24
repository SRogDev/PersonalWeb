"use client"

import { motion } from "framer-motion"
import type React from "react"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="h-0.5 bg-gradient-to-r from-accent/30 via-accent to-accent/30 mx-auto rounded-full"
      />
    </div>
  )
}
