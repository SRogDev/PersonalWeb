"use client"

import { motion } from "framer-motion"
import { Atom, Coins, Globe, Sparkles } from "lucide-react"
import SectionTitle from "./section-title"

const industries = [
    {
        name: "Social Platforms",
        icon: Globe,
        accent: "from-blue-500/20 to-cyan-400/10",
        ring: "shadow-blue-500/20",
    },
    {
        name: "Creative Platforms",
        icon: Sparkles,
        accent: "from-purple-500/20 to-pink-400/10",
        ring: "shadow-purple-500/20",
    },
    {
        name: "Fintech",
        icon: Coins,
        accent: "from-emerald-500/20 to-green-400/10",
        ring: "shadow-emerald-500/20",
    },
    {
        name: "BioTech",
        icon: Atom,
        accent: "from-rose-500/20 to-orange-400/10",
        ring: "shadow-rose-500/20",
    },
]

export default function Industries() {
    return (
        <section className="px-4 sm:px-6 py-16">
            <SectionTitle className="mb-12">Interested Industries :</SectionTitle>

            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {industries.map((industry, index) => {
                    const Icon = industry.icon

                    return (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            viewport={{ once: false }}
                            className="group"
                        >
                            <motion.div
                                whileHover={{
                                    y: -6,
                                    rotateX: -7,
                                    rotateY: index % 2 === 0 ? 7 : -7,
                                    scale: 1.03,
                                }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                style={{ transformStyle: "preserve-3d" }}
                                className={`
                  h-32 sm:h-36 md:h-40 rounded-2xl border border-border/60
                  bg-gradient-to-br ${industry.accent}
                  shadow-lg ${industry.ring}
                  backdrop-blur-sm relative overflow-hidden
                `}
                            >
                                <div className="absolute inset-0 bg-card/35" />
                                <div className="absolute inset-x-4 top-4 h-7 rounded-full bg-background/40 blur-md" />

                                <div className="relative h-full flex items-center justify-center">
                                    <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl border border-accent/30 bg-background/70 flex items-center justify-center shadow-md">
                                        <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                                    </div>
                                </div>
                            </motion.div>

                            <p className="mt-3 text-center text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors">
                                {industry.name}
                            </p>
                        </motion.div>
                    )
                })}
            </div>

            <p className="max-w-5xl mx-auto mt-6 text-center text-xs sm:text-sm text-muted-foreground">
                I’m ready and excited to build AI that reshapes these industries.
            </p>
        </section>
    )
}