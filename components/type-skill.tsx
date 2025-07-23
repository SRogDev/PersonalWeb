import type React from "react"
import {
  Code,
  Lightbulb,
  GraduationCap,
  Star,
  Brain,
  Palette,
  Target,
  Megaphone,
  BarChart3,
  Zap,
  Heart,
  Eye,
  PenTool,
  Rocket,
  UserCheck,
  Sparkles,
  Compass,
} from "lucide-react"
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiFramer,
  SiSupabase,
  SiMysql,
  SiGit,
  SiGithub,
  SiPython,
  SiExpress,
  SiMongodb,
  SiFigma,
} from "react-icons/si"

interface TypeSkillProps {
  title: string
  skills: Array<{
    name: string
    icon?: React.ReactNode
  }>
  isLast?: boolean
}

const technicalIconMap: Record<string, React.ReactNode> = {
  html: <SiHtml5 className="h-6 w-6 text-orange-500" />,
  css: <SiCss3 className="h-6 w-6 text-blue-500" />,
  tailwind: <SiTailwindcss className="h-6 w-6 text-cyan-500" />,
  shadcn: <Code className="h-6 w-6 text-slate-500" />,
  javascript: <SiJavascript className="h-6 w-6 text-yellow-500" />,
  typescript: <SiTypescript className="h-6 w-6 text-blue-600" />,
  nodejs: <SiNodedotjs className="h-6 w-6 text-green-600" />,
  react: <SiReact className="h-6 w-6 text-cyan-400" />,
  nextjs: <SiNextdotjs className="h-6 w-6" />,
  framermotion: <SiFramer className="h-6 w-6 text-pink-500" />,
  supabase: <SiSupabase className="h-6 w-6 text-green-500" />,
  sql: <SiMysql className="h-6 w-6 text-blue-600" />,
  git: <SiGit className="h-6 w-6 text-orange-600" />,
  github: <SiGithub className="h-6 w-6" />,
  langchain: <Code className="h-6 w-6 text-purple-500" />,
  python: <SiPython className="h-6 w-6 text-yellow-400" />,
}

const softSkillsIconMap: Record<string, React.ReactNode> = {
  leadership: <UserCheck className="h-6 w-6 text-blue-500" />,
  creativity: <Sparkles className="h-6 w-6 text-purple-500" />,
  activelearning: <Brain className="h-6 w-6 text-green-500" />,
  analyticthinking: <BarChart3 className="h-6 w-6 text-orange-500" />,
  designthinking: <Compass className="h-6 w-6 text-pink-500" />,
}

const productSkillsIconMap: Record<string, React.ReactNode> = {
  prototyping: <PenTool className="h-6 w-6 text-blue-500" />,
  copywriting: <Palette className="h-6 w-6 text-green-500" />,
  userexperiencedesign: <Eye className="h-6 w-6 text-purple-500" />,
}

const marketingSkillsIconMap: Record<string, React.ReactNode> = {
  technicalgrowthmarketing: <Rocket className="h-6 w-6 text-orange-500" />,
  viralloopsgamification: <Zap className="h-6 w-6 text-yellow-500" />,
  campaignstrategies: <Target className="h-6 w-6 text-red-500" />,
}

const learningSkillsIconMap: Record<string, React.ReactNode> = {
  expressjs: <SiExpress className="h-6 w-6 text-gray-600" />,
  mongodb: <SiMongodb className="h-6 w-6 text-green-500" />,
  figma: <SiFigma className="h-6 w-6 text-purple-500" />,
}

// Agregar un mapa de iconos para categorías
const categoryIcons: Record<string, React.ReactNode> = {
  Technical: <Code className="h-7 w-7" />,
  Soft: <Heart className="h-7 w-7" />,
 "Product & UX/UI": <Lightbulb className="h-7 w-7" />,
  Marketing: <Megaphone className="h-7 w-7" />,
  Learning: <GraduationCap className="h-7 w-7" />,
}

export default function TypeSkill({ title, skills, isLast = false }: TypeSkillProps) {
  const getIconForSkill = (skillName: string, category: string) => {
    const normalizedName = skillName.toLowerCase().replace(/[^a-z]/g, "")

    switch (category) {
      case "Technical":
        return technicalIconMap[normalizedName] 
      case "Soft":
        return softSkillsIconMap[normalizedName] 
      case "Product & UX/UI":
        return productSkillsIconMap[normalizedName] 
      case "Marketing":
        return marketingSkillsIconMap[normalizedName] 
      case "Learning":
        return learningSkillsIconMap[normalizedName] 
      default:
     return <Star></Star>
    }
  }

  return (
    <div className="bg-card/30 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        {categoryIcons[title] || <Code className="h-7 w-7" />}
        <h3 className="text-2xl md:text-3xl font-semibold text-primary">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3">
            {getIconForSkill(skill.name, title)}
            <span className="text-foreground text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
