import HeroSection from "@/components/hero-section"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import OpenWork from "@/components/open-work"
import FinalCTA from "@/components/final-cta"


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Experience />
      <Education />
      <Skills />
      <OpenWork />
      <FinalCTA />
     
   
    </main>
  )
}
