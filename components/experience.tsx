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
      evidence: "129 routes · 28 Supabase migrations · Stripe Connect · Daily video",
      caseStudy: {
        problem: "Creators need a private membership club — not another feed — with events, payments and AI help for members.",
        decisions: "Next.js 16 + Supabase, Stripe Connect for payouts, Daily for on-demand video rooms, AI staff with budgets.",
        evidence: "129 routes, 28 migrations, 48 test files. Payments never verified with real money; live deploy not up yet.",
        next: "Real provider keys, a READY live deploy, and a real-money Stripe test.",
      },
    },
    {
      title: "DeepBooks",
      image: "/covers/deepbooks.svg",
      link: "https://github.com/SRogDev/DeepBooks",
      description: "Immersive reading platform with real pgvector RAG: ask the book you are reading, grounded in its own text.",
      tags: ["Next.js", "RAG", "pgvector"],
      evidence: "Real pgvector RAG in code · 15 test files · migrations 001–003",
      caseStudy: {
        problem: "Reading without grounding — you forget, you can't ask the book what it actually said.",
        decisions: "pgvector for chunk retrieval, RAG answers grounded in the book's own text, reading-position persistence.",
        evidence: "Vector extension + match_chunks in migrations, 15 test files. Never exercised with live keys yet.",
        next: "Supabase project, ingest a real book, run a live RAG answer end to end.",
      },
    },
    {
      title: "Poetry AI",
      image: "/covers/poetry-ai.svg",
      link: "https://github.com/SRogDev/poetry-ai",
      description: "Spanish emotional dedications: an Emotion Engine loop — intent, generation, critic, format — on the Vercel AI SDK, with budgets, evals and refunds.",
      tags: ["AI SDK", "Agents", "Evals"],
      evidence: "Emotion Engine · 16 test files · CI · rose budgets, evals, refunds",
      caseStudy: {
        problem: "Generic AI text feels cold — a dedication should carry real emotion and survive a critic.",
        decisions: "Emotion Engine loop (intent → generation → critic → format), rose budgets with refunds, evals on every step.",
        evidence: "16 test files, CI green. AI paths mock-verified only so far — no live generation with real credits yet.",
        next: "A live generated dedication with the full loop, on real OpenRouter credits.",
      },
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
              evidence={project.evidence}
              caseStudy={project.caseStudy}
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
