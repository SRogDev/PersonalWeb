"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  image: string
  link: string
}

export default function ProjectCard({ title, image, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        className="cursor-pointer transition-all duration-300 bg-card border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
        onClick={() => window.open(link, "_blank")}
      >
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={280}
              className="w-full h-56 sm:h-64 md:h-72 object-contain transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-200">
              {title}
            </h3>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
