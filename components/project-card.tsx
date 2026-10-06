"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  image: string
  link?: string
  description?: string
  tags?: string[]
}

export default function ProjectCard({ title, image, link, description, tags }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card
        className={`h-full ${link ? "cursor-pointer" : ""} transition-all duration-300 bg-card border-border/60
                   hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 overflow-hidden group`}
        onClick={link ? () => window.open(link, "_blank") : undefined}
      >
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={280}
              className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full p-1.5">
                <ExternalLink className="h-3.5 w-3.5 text-accent" />
              </div>
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1 gap-3">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200 font-mono">
              {title}
            </h3>

            {description && (
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {description}
              </p>
            )}

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded-full
                               bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
