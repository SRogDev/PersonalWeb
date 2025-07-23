"use client"
import { motion } from "framer-motion"
import TypeSkill from "./type-skill"
import SectionTitle from "./section-title"

export default function Skills() {
  const technicalSkills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "Tailwind" },
    { name: "Shadcn" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Node.js" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Framer Motion" },
    { name: "Supabase" },
    { name: "SQL" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "LangChain" },
    { name: "Python" },
  ]

  const softSkills = [
    { name: "Leadership" },
    { name: "Creativity" },
    { name: "Active Learning" },
    { name: "Analytic Thinking" },
    { name: "Design Thinking" },
  ]

  const productSkills = [
    { name: "Prototyping" },
    { name: "Copywriting" },
    { name: "User Experience Design" },
  ]

  const marketingSkills = [
    { name: "Technical Growth Marketing" },
    { name: "Viral Loops - Gamification" },
    { name: "Campaign Strategies" },
  ]

  const learningSkills = [{ name: "Express.js" }, { name: "MongoDB" }, { name: "Figma" }]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="px-4 sm:px-6 py-16"
    >
      <SectionTitle className="mb-16">Skills</SectionTitle>

      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <TypeSkill title="Technical" skills={technicalSkills} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <TypeSkill title="Soft" skills={softSkills} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <TypeSkill title="Product & UX/UI" skills={productSkills} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <TypeSkill title="Marketing" skills={marketingSkills} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <TypeSkill title="Learning" skills={learningSkills} isLast />
        </motion.div>
      </div>
    </motion.section>
  )
}
