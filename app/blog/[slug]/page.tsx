import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Roger Oria`,
    description: post.title,
  }
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen px-4 sm:px-6 py-16 max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors mb-10"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All articles
      </Link>

      <article>
        <header className="mb-10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag: string) => (
              <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {post.readTime} read
            </span>
          </div>
        </header>

        {post.content ? (
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-code:text-accent prose-code:bg-card/60 prose-pre:bg-card/60 prose-pre:border prose-pre:border-border/50">
            <MDXRemote source={post.content} />
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-border/50 rounded-xl">
            <p className="text-muted-foreground font-mono text-sm">Article coming soon.</p>
          </div>
        )}
      </article>
    </main>
  )
}
