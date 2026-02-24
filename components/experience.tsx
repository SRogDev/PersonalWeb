"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"
import SectionTitle from "./section-title"

export default function Experience() {
  const projects = [
    {
      title: "Tones.platform.com",
      image: "/tones.jpg",
      link: "https://tones.platform.com",
      description: "Music social platform where artists and fans converge. Built for scale with real-time streaming and social graph features.",
      tags: ["Social", "Music", "Real-time"],
    },
    {
      title: "Empatando.com",
      image: "/empatando.jpg",
      link: "https://empatando.com",
      description: "Connecting people through shared interests and goals. Smart matching algorithms powered by AI to surface meaningful connections.",
      tags: ["AI Matching", "Community", "Networking"],
    },
    {
      title: "SocialClubs.com",
      image: "/socialclubs.jpg",
      link: "https://socialclubs.com",
      description: "The modern infrastructure for online communities. From micro-clubs to massive networks, built with the full dev cycle approach.",
      tags: ["Communities", "SaaS", "Full Stack"],
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="px-4 sm:px-6 py-16"
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
            As founder of my startup, I lead the development of products that combine cutting-edge technology
            with exceptional user experiences — built end to end with the full dev cycle approach.
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
              description={project.description}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
