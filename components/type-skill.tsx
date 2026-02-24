"use client"
import type React from "react"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Code, Lightbulb, GraduationCap, Star, Brain,
  Target, Megaphone, BarChart3, Zap, Heart, Eye, PenTool,
  Rocket, UserCheck, Sparkles, Compass, Palette,
} from "lucide-react"
import {
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript,
  SiNodedotjs, SiReact, SiNextdotjs, SiFramer, SiSupabase,
  SiMysql, SiGit, SiGithub, SiPython, SiFastapi, SiMongodb, SiN8N,
  SiRust, SiPytorch, SiThreedotjs, SiGreensock,
} from "react-icons/si"

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface TypeSkillProps {
  title: string
  skills: Array<{ name: string; icon?: React.ReactNode }>
}

const technicalIconMap: Record<string, React.ReactNode> = {
  html:          <SiHtml5        className="h-5 w-5 text-orange-500"   />,
  css:           <SiCss3         className="h-5 w-5 text-blue-500"     />,
  tailwind:      <SiTailwindcss  className="h-5 w-5 text-cyan-400"     />,
  shadcn:        <Code           className="h-5 w-5 text-slate-400"    />,
  javascript:    <SiJavascript   className="h-5 w-5 text-yellow-400"   />,
  typescript:    <SiTypescript   className="h-5 w-5 text-blue-500"     />,
  nodejs:        <SiNodedotjs    className="h-5 w-5 text-green-500"    />,
  react:         <SiReact        className="h-5 w-5 text-cyan-400"     />,
  nextjs:        <SiNextdotjs    className="h-5 w-5 text-foreground"   />,
  framermotion:  <SiFramer       className="h-5 w-5 text-pink-400"     />,
  gsap:          <SiGreensock    className="h-5 w-5 text-green-400"    />,
  supabase:      <SiSupabase     className="h-5 w-5 text-green-500"    />,
  sql:           <SiMysql        className="h-5 w-5 text-blue-500"     />,
  git:           <SiGit          className="h-5 w-5 text-orange-500"   />,
  github:        <SiGithub       className="h-5 w-5 text-foreground"   />,
  langchain:     <Code           className="h-5 w-5 text-purple-400"   />,
  python:        <SiPython       className="h-5 w-5 text-yellow-400"   />,
  rust:          <SiRust         className="h-5 w-5 text-orange-700"   />,
  pytorch:       <SiPytorch      className="h-5 w-5 text-orange-500"   />,
  threejs:       <SiThreedotjs   className="h-5 w-5 text-foreground"   />,
}

const softSkillsIconMap: Record<string, React.ReactNode> = {
  leadership:      <UserCheck   className="h-5 w-5 text-blue-400"    />,
  creativity:      <Sparkles    className="h-5 w-5 text-purple-400"  />,
  activelearning:  <Brain       className="h-5 w-5 text-green-400"   />,
  analyticthinking:<BarChart3   className="h-5 w-5 text-primary"     />,
  designthinking:  <Compass     className="h-5 w-5 text-pink-400"    />,
}

const productSkillsIconMap: Record<string, React.ReactNode> = {
  prototyping:          <PenTool  className="h-5 w-5 text-blue-400"   />,
  copywriting:          <Palette  className="h-5 w-5 text-green-400"  />,
  userexperiencedesign: <Eye      className="h-5 w-5 text-purple-400" />,
}

const marketingSkillsIconMap: Record<string, React.ReactNode> = {
  technicalgrowthmarketing: <Rocket className="h-5 w-5 text-primary"     />,
  viralloopsgamification:   <Zap    className="h-5 w-5 text-yellow-400"  />,
  campaignstrategies:       <Target className="h-5 w-5 text-red-400"     />,
}

const learningSkillsIconMap: Record<string, React.ReactNode> = {
  fastapi: <SiFastapi className="h-5 w-5 text-slate-300"  />,
  mongodb: <SiMongodb className="h-5 w-5 text-green-500"  />,
  n8n:     <SiN8N     className="h-5 w-5 text-purple-400" />,
}

const categoryIcons: Record<string, React.ReactNode> = {
  Technical:         <Code          className="h-6 w-6 text-accent"  />,
  Soft:              <Heart         className="h-6 w-6 text-accent"  />,
  "Product & UX/UI": <Lightbulb     className="h-6 w-6 text-accent"  />,
  Marketing:         <Megaphone     className="h-6 w-6 text-accent"  />,
  Learning:          <GraduationCap className="h-6 w-6 text-accent"  />,
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
      case "Technical":       return technicalIconMap[key]
      case "Soft":            return softSkillsIconMap[key]
      case "Product & UX/UI": return productSkillsIconMap[key]
      case "Marketing":       return marketingSkillsIconMap[key]
      case "Learning":        return learningSkillsIconMap[key]
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
