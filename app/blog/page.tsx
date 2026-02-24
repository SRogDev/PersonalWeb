import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog — Roger Oria",
  description: "Technical writing on software, product, AI, and startup growth by Roger Oria.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen px-4 sm:px-6 py-16 max-w-3xl mx-auto">
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Blog</h1>
        <p className="text-muted-foreground font-mono text-sm">Ideas I had to write down.</p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <article className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-xl border border-border/50 bg-card/30 hover:border-accent/40 hover:bg-card/50 transition-all duration-200">
              <div className="flex-1">
                <h2 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-200 mb-1">
                  {post.title}
                </h2>
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {post.readTime} read
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
