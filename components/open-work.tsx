"use client"
import { Star, Rocket, Users, Target } from "lucide-react"
import { motion } from "framer-motion"
import SectionTitle from "./section-title"

export default function OpenWork() {
  const workOptions = [
    { title: "AI Founder / Co-founder", highlighted: true },
    { title: "AI Engineer — Agent Systems", highlighted: true },
    { title: "ML Engineer — Training & Fine-tuning", highlighted: false },
    { title: "AI Product Engineer (0 → 1)", highlighted: false },
    { title: "Build AI MVPs End to End", highlighted: false },
    { title: "Advisor for AI Startups", highlighted: false },
  ]

  const professionalGoals = [
    "Become the #1 in AI — a recognized name, built in public",
    "Turn Polygrow into a company I can live from",
    "Ship ~30 AI builds a year — and open-source the best parts",
    "Help founders ship real AI products, not demos",
  ]

  return (
    <section className="px-4 sm:px-6 py-16">
      <SectionTitle className="mb-12">Open to work in</SectionTitle>

      <div className="max-w-3xl mx-auto">
        <motion.div className="space-y-4 mb-12">
          {workOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.02,
                x: 10,
                transition: { duration: 0.2 },
              }}
              className="flex items-center gap-4 p-4 sm:p-6 rounded-xl bg-card/30 border border-border/50 hover:border-accent/50 hover:bg-card/50 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {option.highlighted && (
                <motion.div className="text-primary" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  {option.title.includes("Product") ? (
                    <Star className="h-6 w-6 sm:h-7 sm:w-7" />
                  ) : (
                    <Rocket className="h-6 w-6 sm:h-7 sm:w-7" />
                  )}
                </motion.div>
              )}
              <span
                className={`text-lg sm:text-xl md:text-2xl ${option.highlighted ? "text-primary font-semibold" : "text-foreground"}`}
              >
                {option.title}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="bg-gradient-to-r from-accent/10 to-primary/5 rounded-xl p-6 sm:p-8 border border-accent/20 shadow-lg"
        >
          <div className="flex items-start gap-3 mb-6">
            <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">Professional Goals</h3>
          </div>
          <ul className="space-y-4">
            {professionalGoals.map((goal, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <motion.div
                  className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-muted-foreground leading-relaxed text-base sm:text-lg">{goal}</span>
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center gap-2 mt-6">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm sm:text-base text-primary font-medium">
              AI Agents • Training • Open Source • Entrepreneurship
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
