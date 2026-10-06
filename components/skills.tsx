"use client"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TypeSkill from "./type-skill"
import SectionTitle from "./section-title"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null)

  const aiEngineeringSkills = [
    { name: "LangGraph" }, { name: "LangChain" }, { name: "Vercel AI SDK" },
    { name: "OpenRouter" }, { name: "RAG Pipelines" }, { name: "Agent Evals" },
    { name: "Tool Use / MCP" }, { name: "Prompt Engineering" },
  ]
  const mlEngineeringSkills = [
    { name: "PyTorch" }, { name: "LoRA / QLoRA" }, { name: "Reinforcement Learning" },
    { name: "PPO / MAPPO" }, { name: "Contrastive Learning" }, { name: "Unsloth" },
    { name: "scikit-learn" }, { name: "NumPy" }, { name: "pandas" },
  ]
  const languageSkills = [
    { name: "Python" }, { name: "TypeScript" }, { name: "Rust" },
    { name: "JavaScript" }, { name: "SQL" },
  ]
  const productEngineeringSkills = [
    { name: "Next.js" }, { name: "React" }, { name: "FastAPI" },
    { name: "Supabase" }, { name: "PostgreSQL" }, { name: "Redis" },
    { name: "Tailwind CSS" }, { name: "Shadcn/ui" }, { name: "Three.js" },
  ]
  const founderToolkitSkills = [
    { name: "Prototyping" }, { name: "UX Design" }, { name: "Copywriting" },
    { name: "Technical Growth Marketing" }, { name: "Viral Loops & Gamification" },
  ]
  const softSkills = [
    { name: "Leadership" }, { name: "Creativity" }, { name: "Active Learning" },
    { name: "Analytic Thinking" }, { name: "Design Thinking" },
  ]
  const learningSkills = [
    { name: "RL Foundations (MDPs → Policy Gradients)" },
    { name: "Agent Post-Training (RLHF / DPO / RLVR)" },
    { name: "MLOps" },
  ]

  useGSAP(
    () => {
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
        },
        opacity: 0,
        y: 70,
        stagger: 0.2,
        duration: 0.9,
        ease: "power3.out",
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="px-4 sm:px-6 py-16">
      <SectionTitle className="mb-16">Skills</SectionTitle>
      <div className="space-y-16">
        {[
          { title: "AI Engineering", skills: aiEngineeringSkills },
          { title: "ML Engineering", skills: mlEngineeringSkills },
          { title: "Languages", skills: languageSkills },
          { title: "Product Engineering", skills: productEngineeringSkills },
          { title: "Founder Toolkit", skills: founderToolkitSkills },
          { title: "Soft", skills: softSkills },
          { title: "Currently Learning", skills: learningSkills },
        ].map(({ title, skills }, i) => (
          <div key={i} className="skill-category">
            <TypeSkill title={title} skills={skills} />
          </div>
        ))}
      </div>
    </section>
  )
}
