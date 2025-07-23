"use client"
import { motion } from "framer-motion"
import { GraduationCap, Globe, Mic, Eye, Ear, Edit } from "lucide-react"
import EducationCard from "./education-card"
import SignalBars from "./signal-bars"
import SectionTitle from "./section-title"

export default function Education() {
  const certificates = [
    {
      course: "Introduction to Next.js",
      provider: "Coursera Team",
    },
    {
      course: "LangChain for LLM Application Development",
      provider: "DeepLearning.AI",
    },
    {
      course: "Product Management",
      provider: "Universidad de los Andes",
    },
  ]

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

      {/* Certificados */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
        className="mb-12"
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6">Certificates</h3>
        <div className="space-y-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <EducationCard course={cert.course} provider={cert.provider} />
            </motion.div>
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
        <div className="ml-4 sm:ml-8 space-y-6">
          {/* Español */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="flex items-center justify-between bg-card/30 rounded-lg p-4 border border-border/50"
          >
            <div className="flex items-center gap-4">
              <span className="font-semibold text-foreground text-xl md:text-2xl">Spanish:</span>
              <span className="text-foreground text-2xl md:text-3xl font-bold">Native</span>
            </div>
            <SignalBars level={4} />
          </motion.div>

          {/* Inglés */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
            className="bg-card/30 rounded-lg p-4 border border-border/50"
          >
            <h4 className="font-semibold text-foreground text-xl md:text-2xl mb-4">English:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-2">
                <Edit className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                <SignalBars level={4} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <Eye className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                <SignalBars level={4} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <Ear className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                <SignalBars level={2} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mic className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                <SignalBars level={1} />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
