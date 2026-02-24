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

  const technicalSkills = [
    { name: "HTML" }, { name: "CSS" }, { name: "Tailwind" }, { name: "Shadcn" },
    { name: "JavaScript" }, { name: "TypeScript" }, { name: "Node.js" }, { name: "React" },
    { name: "Next.js" }, { name: "Framer Motion" }, { name: "GSAP" }, { name: "Supabase" },
    { name: "SQL" }, { name: "Git" }, { name: "GitHub" }, { name: "LangChain" },
    { name: "Python" }, { name: "Rust" }, { name: "PyTorch" }, { name: "Three.js" },
  ]
  const softSkills = [
    { name: "Leadership" }, { name: "Creativity" }, { name: "Active Learning" },
    { name: "Analytic Thinking" }, { name: "Design Thinking" },
  ]
  const productSkills = [
    { name: "Prototyping" }, { name: "Copywriting" }, { name: "User Experience Design" },
  ]
  const marketingSkills = [
    { name: "Technical Growth Marketing" }, { name: "Viral Loops - Gamification" },
    { name: "Campaign Strategies" },
  ]
  const learningSkills = [{ name: "Fast API" }, { name: "MongoDB" }, { name: "n8n" }]

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
          { title: "Technical",       skills: technicalSkills  },
          { title: "Soft",            skills: softSkills       },
          { title: "Product & UX/UI", skills: productSkills    },
          { title: "Marketing",       skills: marketingSkills  },
          { title: "Learning",        skills: learningSkills   },
        ].map(({ title, skills }, i) => (
          <div key={i} className="skill-category">
            <TypeSkill title={title} skills={skills} />
          </div>
        ))}
      </div>
    </section>
  )
}
