"use client"
import { Star, Rocket, Users, Target } from "lucide-react"
import { motion } from "framer-motion"
import SectionTitle from "./section-title"

export default function OpenWork() {
  const workOptions = [
    { title: "Frontend Developer", highlighted: false },
    { title: "Fullstack Developer (Supabase)", highlighted: false },
    { title: "Technology Consultant", highlighted: false },
    { title: "Build Landing Page End to End", highlighted: true },
    { title: "Work in a Startup", highlighted: true },
  ]

  const professionalGoals = [
    "Continuously learn and grow professionally in the tech industry",
    "Build valuable connections and network within the technology sector",
    "Actively participate in creating innovative products with positive social impact",
    "Build my own successful startup",
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
              className="flex items-center gap-4 p-4 sm:p-6 rounded-xl bg-card/30 border border-border/50 hover:border-primary/50 hover:bg-card/50 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {option.highlighted && (
                <motion.div className="text-primary" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  {option.title.includes("Landing") ? (
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
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 sm:p-8 border border-primary/20 shadow-lg"
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
              Networking • Innovation • Growth • Entrepreneurship
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
