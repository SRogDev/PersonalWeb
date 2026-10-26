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
      description: "AI-native business OS for solopreneurs — one environment where agents run the business: ops, marketing, research, analytics. My flagship; in active development.",
      tags: ["Product Builder", "Flagship", "Agents"],
    },
    {
      title: "Reverse Lab",
      image: "/covers/reverse-lab.svg",
      link: "https://github.com/SRogDev/reverse-lab",
      description: "Autonomous reverse engineering and experimental engineering lab for developers: investigate a system, ground every claim in evidence, and reproduce it.",
      tags: ["Investigation", "Agents", "Evidence"],
    },
    {
      title: "Rustenwer",
      image: "/covers/rustenwer.svg",
      link: "https://github.com/SRogDev/rustenwer",
      description: "Intelligence fabrication & discovery platform: the smallest, cheapest sufficiently-capable intelligence for any problem. LoRA training infra + LangGraph agents, end to end.",
      tags: ["PyTorch", "LoRA", "LangGraph"],
    },
    {
      title: "Rogis",
      image: "/covers/rogis.svg",
      link: "https://github.com/SRogDev/rogis",
      description: "Redis, reimagined for AI agents: a deterministic Redis superset with a native semantic engine — first-class vectors, HNSW, SEMSET/SEMGET.",
      tags: ["Rust", "Redis", "Vectors"],
    },
    {
      title: "Domino RL",
      image: "/covers/domino-rl.svg",
      link: "https://github.com/SRogDev/domino-rl",
      description: "Teaching AI to play Cuban double-9 domino with pure reinforcement learning: zero human heuristics, sparse rewards, MAPPO self-play.",
      tags: ["RL", "MAPPO", "PyTorch"],
    },
    {
      title: "Agentropy",
      image: "/covers/agentropy.svg",
      link: "https://github.com/SRogDev/Agentropy",
      description: "Observability for AI agents — see it, improve it. Open-core: OTel-standard capture, LangGraph insight engine, real-data dashboards.",
      tags: ["Agents", "Observability", "LLM"],
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
            Six projects, chosen for range: product, agents, systems, and ML training.
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
