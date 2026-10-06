"use client"
import type React from "react"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Code, GraduationCap, Star, Brain,
  BarChart3, Zap, Heart, Eye, PenTool,
  Rocket, UserCheck, Sparkles, Compass, Palette,
  Network, Database, Terminal, Layers, Gamepad2,
  TrendingUp, GitCompare, Sigma, Table, Cpu, Server,
  FlaskConical, Waypoints, Plug,
} from "lucide-react"
import {
  SiTailwindcss, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiSupabase,
  SiPython, SiFastapi,
  SiRust, SiPytorch, SiThreedotjs,
  SiPostgresql, SiRedis,
} from "react-icons/si"

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface TypeSkillProps {
  title: string
  skills: Array<{ name: string; icon?: React.ReactNode }>
}

const aiEngineeringIconMap: Record<string, React.ReactNode> = {
  langgraph: <Waypoints className="h-5 w-5 text-emerald-400" />,
  langchain: <Code className="h-5 w-5 text-purple-400" />,
  vercelaisdk: <Zap className="h-5 w-5 text-foreground" />,
  openrouter: <Network className="h-5 w-5 text-indigo-400" />,
  ragpipelines: <Database className="h-5 w-5 text-cyan-400" />,
  agentevals: <FlaskConical className="h-5 w-5 text-amber-400" />,
  toolusemcp: <Plug className="h-5 w-5 text-orange-400" />,
  promptengineering: <Terminal className="h-5 w-5 text-green-400" />,
}

const mlEngineeringIconMap: Record<string, React.ReactNode> = {
  pytorch: <SiPytorch className="h-5 w-5 text-orange-500" />,
  loraqlora: <Layers className="h-5 w-5 text-violet-400" />,
  reinforcementlearning: <Gamepad2 className="h-5 w-5 text-rose-400" />,
  ppomappo: <TrendingUp className="h-5 w-5 text-emerald-400" />,
  contrastivelearning: <GitCompare className="h-5 w-5 text-sky-400" />,
  unsloth: <Zap className="h-5 w-5 text-yellow-400" />,
  scikitlearn: <BarChart3 className="h-5 w-5 text-blue-400" />,
  numpy: <Sigma className="h-5 w-5 text-cyan-400" />,
  pandas: <Table className="h-5 w-5 text-purple-400" />,
}

const languagesIconMap: Record<string, React.ReactNode> = {
  python: <SiPython className="h-5 w-5 text-yellow-400" />,
  typescript: <SiTypescript className="h-5 w-5 text-blue-500" />,
  rust: <SiRust className="h-5 w-5 text-orange-700" />,
  javascript: <SiJavascript className="h-5 w-5 text-yellow-400" />,
  sql: <Database className="h-5 w-5 text-blue-500" />,
}

const productEngineeringIconMap: Record<string, React.ReactNode> = {
  nextjs: <SiNextdotjs className="h-5 w-5 text-foreground" />,
  react: <SiReact className="h-5 w-5 text-cyan-400" />,
  fastapi: <SiFastapi className="h-5 w-5 text-slate-300" />,
  supabase: <SiSupabase className="h-5 w-5 text-green-500" />,
  postgresql: <SiPostgresql className="h-5 w-5 text-blue-400" />,
  redis: <SiRedis className="h-5 w-5 text-red-500" />,
  tailwindcss: <SiTailwindcss className="h-5 w-5 text-cyan-400" />,
  shadcnui: <Code className="h-5 w-5 text-slate-400" />,
  threejs: <SiThreedotjs className="h-5 w-5 text-foreground" />,
}

const founderToolkitIconMap: Record<string, React.ReactNode> = {
  prototyping: <PenTool className="h-5 w-5 text-blue-400" />,
  uxdesign: <Eye className="h-5 w-5 text-purple-400" />,
  copywriting: <Palette className="h-5 w-5 text-green-400" />,
  technicalgrowthmarketing: <Rocket className="h-5 w-5 text-primary" />,
  viralloopsgamification: <Zap className="h-5 w-5 text-yellow-400" />,
}

const softSkillsIconMap: Record<string, React.ReactNode> = {
  leadership: <UserCheck className="h-5 w-5 text-blue-400" />,
  creativity: <Sparkles className="h-5 w-5 text-purple-400" />,
  activelearning: <Brain className="h-5 w-5 text-green-400" />,
  analyticthinking: <BarChart3 className="h-5 w-5 text-primary" />,
  designthinking: <Compass className="h-5 w-5 text-pink-400" />,
}

const learningSkillsIconMap: Record<string, React.ReactNode> = {
  rlfoundationsmdppolicygradients: <Brain className="h-5 w-5 text-rose-400" />,
  agentposttrainingrlhfdporlvr: <GraduationCap className="h-5 w-5 text-violet-400" />,
  mlops: <Server className="h-5 w-5 text-cyan-400" />,
}

const categoryIcons: Record<string, React.ReactNode> = {
  "AI Engineering": <Brain className="h-6 w-6 text-accent" />,
  "ML Engineering": <Cpu className="h-6 w-6 text-accent" />,
  Languages: <Code className="h-6 w-6 text-accent" />,
  "Product Engineering": <Layers className="h-6 w-6 text-accent" />,
  "Founder Toolkit": <Rocket className="h-6 w-6 text-accent" />,
  Soft: <Heart className="h-6 w-6 text-accent" />,
  "Currently Learning": <GraduationCap className="h-6 w-6 text-accent" />,
}

export default function TypeSkill({ title, skills }: TypeSkillProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from(".skill-pill", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
        },
        opacity: 0,
        scale: 0.75,
        y: 20,
        stagger: 0.04,
        duration: 0.45,
        ease: "back.out(1.5)",
      })
    },
    { scope: containerRef }
  )

  const getIconForSkill = (skillName: string, category: string) => {
    const key = skillName.toLowerCase().replace(/[^a-z0-9]/g, "")
    switch (category) {
      case "AI Engineering": return aiEngineeringIconMap[key] ?? <Star className="h-5 w-5" />
      case "ML Engineering": return mlEngineeringIconMap[key] ?? <Star className="h-5 w-5" />
      case "Languages": return languagesIconMap[key] ?? <Star className="h-5 w-5" />
      case "Product Engineering": return productEngineeringIconMap[key] ?? <Star className="h-5 w-5" />
      case "Founder Toolkit": return founderToolkitIconMap[key] ?? <Star className="h-5 w-5" />
      case "Soft": return softSkillsIconMap[key]
      case "Currently Learning": return learningSkillsIconMap[key] ?? <Star className="h-5 w-5" />
      default: return <Star className="h-5 w-5" />
    }
  }

  return (
    <div
      ref={containerRef}
      className="bg-card/30 rounded-xl p-6 border border-border/50 hover:border-accent/20 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        {categoryIcons[title] ?? <Code className="h-6 w-6 text-accent" />}
        <h3 className="text-2xl md:text-3xl font-semibold text-primary">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-pill flex items-center gap-2 px-3 py-2 rounded-lg
                       bg-background/60 border border-border/60
                       hover:border-accent/40 hover:bg-card/60
                       transition-all duration-200 cursor-default group"
          >
            {getIconForSkill(skill.name, title)}
            <span className="text-foreground text-sm font-mono group-hover:text-accent transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
