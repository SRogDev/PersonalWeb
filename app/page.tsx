import HeroSection from "@/components/hero-section"
import Experience from "@/components/experience"
import Industries from "@/components/industries"
import Education from "@/components/education"
import OpenWork from "@/components/open-work"
import Blog from "@/components/blog"
import FinalCTA from "@/components/final-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Experience />
      <Industries />
      <Education />
      <OpenWork />
      <Blog />
      <FinalCTA />
    </main>
  )
}
