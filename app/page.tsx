import HeroSection from "@/components/hero-section"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Blog from "@/components/blog"
import Industries from "@/components/industries"
import OpenWork from "@/components/open-work"
import FinalCTA from "@/components/final-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Experience />
      <Education />
      <Skills />
      <Blog />
      <Industries />
      <OpenWork />
      <FinalCTA />
    </main>
  )
}
