"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"

export default function Experience() {
  const projects = [
    {
      title: "Full Stack Blog",
      image: "/placeholder.svg?height=280&width=400",
      link: "https://tech-wealth.vercel.app",
    },
    {
      title: "Landing Page SocialClubs",
      image: "/placeholder.svg?height=280&width=400",
      link: "landing-page01-ochre.vercel.app",
    },
    {
      title: "AI Dating Chat App",
      image: "/placeholder.svg?height=280&width=400",
      link: "https://sadi-chats.vercel.app",
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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="mb-16"
      >
        <div className="relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="absolute left-0 top-1/2 h-0.5 bg-primary"
          ></motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="absolute right-0 top-1/2 h-0.5 bg-primary"
          ></motion.div>
          <p className="text-muted-foreground text-center px-8 sm:px-12 leading-relaxed text-lg sm:text-xl">
            As CEO of my startup, I lead the development of innovative products that combine cutting-edge technology
            with exceptional user experiences. My focus is on creating scalable solutions that solve real problems.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <ProjectCard title={project.title} image={project.image} link={project.link} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
