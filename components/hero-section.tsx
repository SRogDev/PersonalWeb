"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowDown } from "lucide-react"
import { FaTelegram, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/RogerCV.pdf";
    link.download = "RogerCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="px-4 sm:px-6 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Elementos decorativos futuristas */}
      <motion.div
        aria-hidden="true"
        className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full opacity-60"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full opacity-40"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-center mb-8"
      >
        <p className="text-accent font-mono text-sm sm:text-base tracking-wide mb-4">
          Aspiring Tech Founder · Open to AI Engineer roles
        </p>
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight"
        >
          Roger Oria
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: false }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-2"
        >
          Product Builder
        </motion.p>
        <p className="text-lg sm:text-xl text-muted-foreground">
          AI Engineer / ML enthusiast
        </p>
        <p className="text-accent italic text-base sm:text-lg mt-3">
          GitHub is my lab: working code, not claims.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false }}
          className="flex-1"
        >
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-6">
            I build AI products end to end — from the model to production. I&apos;m building{" "}
            <span className="text-primary font-semibold">Polygrow</span>, an AI-native business OS for
            solopreneurs, and I build in public: agent systems with LangGraph, ML training with PyTorch
            and RL, systems in Rust, fine-tuning with Unsloth, and full-stack products with Next.js. Idea → model → product → production.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
            What a recruiter should see first: working code, live demos where they exist, and projects
            I can explain to interview depth — not a list of tools.
          </p>
          <div className="flex gap-3 justify-center lg:justify-start">
            {[
              { icon: FaGithub, href: "https://github.com/SRogDev", label: "Roger on GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/roger-oria-aa6179301", label: "Roger on LinkedIn" },
              { icon: FaTelegram, href: "https://t.me/@Rogeroria", label: "Roger on Telegram" },
              { icon: FaInstagram, href: "https://instagram.com/rogeroriag", label: "Roger on Instagram" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-accent transition-colors flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                viewport={{ once: false }}
              >
                <social.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: false }}
          className="flex-shrink-0"
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src="/Roger.webp?height=200&width=200"
              alt="Roger Oria"
              width={200}
              height={200}
              className="rounded-full border-2 border-accent shadow-lg shadow-accent/20"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: false }}
        className="text-center flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleDownloadCV}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:shadow-xl transition-all duration-300 min-h-[44px]"
          >
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Download CV
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            variant="outline"
            className="font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg min-h-[44px]"
          >
            <a href="#projects">
              <ArrowDown className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View featured projects
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
