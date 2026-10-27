"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"
import SectionTitle from "./section-title"

export default function Experience() {
  const projects = [
    {
      title: "Polygrow",
      image: "/covers/polygrow.svg",
      badge: "Private",
      description: "My flagship, in active development. Details on request.",
      tags: ["Product Builder", "Flagship", "Agents"],
    },
    {
      title: "SocialClubs",
      image: "/covers/socialclubs.svg",
      link: "https://github.com/SRogDev/SocialClubs-MVP",
      description: "Private-community platform for clubs: membership, events, RAG-grounded FAQ and AI digests. My largest Next.js product.",
      tags: ["Next.js", "RAG", "Product"],
    },
    {
      title: "DeepBooks",
      image: "/covers/deepbooks.svg",
      link: "https://github.com/SRogDev/DeepBooks",
      description: "Immersive reading platform with real pgvector RAG: ask the book you are reading, grounded in its own text.",
      tags: ["Next.js", "RAG", "pgvector"],
    },
    {
      title: "Poetry AI",
      image: "/covers/poetry-ai.svg",
      link: "https://github.com/SRogDev/poetry-ai",
      description: "Spanish emotional dedications: an Emotion Engine loop — intent, generation, critic, format — on the Vercel AI SDK, with budgets, evals and refunds.",
      tags: ["AI SDK", "Agents", "Evals"],
    },
  ]

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="px-4 sm:px-6 py-16 scroll-mt-16"
    >
      <SectionTitle className="mb-12">Featured Projects</SectionTitle>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="mb-12"
      >
        <div className="relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="absolute left-0 top-1/2 h-px bg-accent/60"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="absolute right-0 top-1/2 h-px bg-accent/60"
          />
          <p className="text-muted-foreground text-center px-8 sm:px-12 leading-relaxed text-lg sm:text-xl">
            Four projects, chosen for range: my flagship, my largest product, real RAG, and an agentic loop.
            Each one I can walk through to interview depth — problem, decisions, and what I&apos;d do next.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: false }}
          >
            <ProjectCard
              title={project.title}
              image={project.image}
              link={project.link}
              badge={project.badge}
              description={project.description}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </div>

      <p className="text-center mt-10">
        <a
          href="https://github.com/SRogDev?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center min-h-[44px] font-mono text-sm text-muted-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          See all projects on GitHub →
        </a>
      </p>
    </motion.section>
  )
}
