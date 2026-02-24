import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export interface PostMeta {
    slug: string
    title: string
    date: string
    readTime: string
    tags: string[]
    content?: string
}

export function getAllPosts(): PostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return []

    return fs
        .readdirSync(BLOG_DIR)
        .filter((f) => f.endsWith(".mdx"))
        .map((filename) => {
            const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8")
            const { data } = matter(raw)
            return {
                slug: filename.replace(/\.mdx$/, ""),
                title: data.title ?? "",
                date: data.date ?? "",
                readTime: data.readTime ?? "",
                tags: data.tags ?? [],
            }
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): PostMeta | null {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
    if (!fs.existsSync(filePath)) return null

    const raw = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(raw)

    return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        readTime: data.readTime ?? "",
        tags: data.tags ?? [],
        content: content.trim() || undefined,
    }
}
