"use client"
import { motion } from "framer-motion"
import { ArrowRight, Clock, Calendar, FileText } from "lucide-react"
import SectionTitle from "./section-title"
import Link from "next/link"

const posts = [
  {
    slug: "social-media-jamstack",
    title: "Social Media with Jamstack Architecture",
    excerpt: "How decoupled frontends, edge CDNs and API-first backends are the secret weapon for building social platforms that scale without breaking. A technical deep dive into why JAMstack wins.",
    date: "2025-11-20",
    readTime: "8 min",
    tags: ["Architecture", "JAMstack", "Performance"],
  },
  {
    slug: "100mil-mau-cuba",
    title: "How to reach 100mil MAU from Cuba with an app",
    excerpt: "Building under bandwidth constraints, payment gateway restrictions, and geopolitical limits taught me more about product-market fit than any accelerator program. Here's the real story.",
    date: "2025-12-10",
    readTime: "12 min",
    tags: ["Product", "Growth", "Startups"],
  },
  {
    slug: "future-freelance-searching",
    title: "The Future of Freelance Searching in Internet",
    excerpt: "Platforms like Upwork are dying slowly and don't know it. AI agents, on-chain reputation, and social graphs will replace the job board model. Here's the vision.",
    date: "2026-01-05",
    readTime: "7 min",
    tags: ["Future", "AI", "Freelance"],
  },
  {
    slug: "catching-neurochemicals",
    title: "Catching the Neurochemicals",
    excerpt: "Every viral product triggers dopamine, serotonin, or oxytocin. Understanding the brain chemistry behind retention, engagement, and love loops is the unfair advantage nobody talks about.",
    date: "2026-01-22",
    readTime: "10 min",
    tags: ["Product", "Psychology", "UX"],
  },
  {
    slug: "self-hosted-mlops",
    title: "The Insane of Self-hosted MLOps",
    excerpt: "Running your own model inference stack on a $40/month VPS sounds crazy until you do the math. A raw account of self-hosting Ollama, fine-tuning pipelines, and surviving GPU poverty.",
    date: "2026-02-14",
    readTime: "15 min",
    tags: ["MLOps", "Self-hosted", "AI"],
  },
]

export default function Blog() {
  return (
    <section className="px-4 sm:px-6 py-16">
      <SectionTitle className="mb-4">Blog</SectionTitle>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-center mb-14 font-mono text-sm"
      >
        Ideas I had to write down.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${post.slug}`} className="block h-full group">
              <article
                className="h-full flex flex-col bg-card/30 border border-border/50 rounded-xl p-6
                           hover:border-accent/40 hover:bg-card/50 hover:shadow-lg hover:shadow-accent/5
                           transition-all duration-300"
              >
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {post.readTime} read
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-200 mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2" />
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          <FileText className="h-4 w-4" />
          View all articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  )
}
