"use client"
import { motion } from "framer-motion"
import { GraduationCap, Globe } from "lucide-react"
import SectionTitle from "./section-title"

export default function Education() {

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="px-4 sm:px-6 py-16"
    >
      <SectionTitle className="mb-12">Education</SectionTitle>

      {/* Universidad destacada */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="mb-12"
      >
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-6 border-2 border-primary/30 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">Computer Engineering 2024-2027</h3>
          </div>
          <p className="text-muted-foreground text-lg ml-9">Universidad Máximo Gómez Báez</p>
        </div>
      </motion.div>

      {/* Self-taught */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
        className="mb-12"
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6">Self-taught</h3>
        <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-4">
          Self-taught engineer. Hundreds of hours studying and building, learning by shipping real products:
          I study a problem, build the smallest working version, and deepen the theory where the product breaks.
          My projects are the coursework.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed">
          <span className="text-accent italic">GitHub is my lab: working code, not claims.</span>{" "}
          <a
            href="https://github.com/SRogDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-accent transition-colors inline-flex items-center min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            See it on GitHub →
          </a>
        </p>
      </motion.div>

      {/* Learning in public — how I learn, in projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        viewport={{ once: false }}
        className="mb-12"
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6">How I learn, in projects</h3>
        <div className="space-y-4">
          {[
            { name: "Petai", link: "https://github.com/SRogDev/Petai", text: "AI digital companion — deterministic systems own needs and time, AI owns decisions and dialogue." },
            { name: "Rustenwer", link: "https://github.com/SRogDev/rustenwer", text: "LangGraph agents, training strategy and evaluation — judge an intelligence before spending compute on it." },
            { name: "Agentropy", link: "https://github.com/SRogDev/Agentropy", text: "Observability for AI agents — capture traces, then evaluate the evaluations themselves." },
            { name: "Shield AI", link: "https://github.com/SRogDev/shield-ai", text: "Security analysis for AI micro-SaaS — findings with evidence, and a fix verified on the next scan." },
            { name: "Reverse Lab", link: "https://github.com/SRogDev/reverse-lab", text: "Autonomous investigation lab — every claim grounded in evidence or a real experiment." },
          ].map((p) => (
            <p key={p.name} className="bg-card/30 rounded-lg p-4 border border-border/50 text-lg sm:text-xl text-foreground leading-relaxed">
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-4 hover:text-accent transition-colors inline-flex items-center min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">{p.name}</a>
              {" — "}{p.text}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Idiomas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Globe className="h-8 w-8 md:h-10 md:w-10 text-primary" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">Languages</h3>
        </div>
        <div className="ml-4 sm:ml-8 space-y-4">
          <p className="bg-card/30 rounded-lg p-4 border border-border/50 text-lg sm:text-xl text-foreground">
            <span className="font-semibold">Spanish:</span> Native
          </p>
          <p className="bg-card/30 rounded-lg p-4 border border-border/50 text-lg sm:text-xl text-foreground">
            <span className="font-semibold">English:</span> B2
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}
