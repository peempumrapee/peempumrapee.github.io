import matter from 'gray-matter'

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

const postFiles = import.meta.glob('/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parsePost(slug: string, raw: string): Post {
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    content,
  }
}

export function getAllPosts(): Post[] {
  return Object.entries(postFiles)
    .map(([filepath, raw]) => {
      const slug = filepath.replace(/^.*\//, '').replace(/\.md$/, '')
      return parsePost(slug, raw)
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  const entry = Object.entries(postFiles).find(([filepath]) =>
    filepath.endsWith(`/${slug}.md`)
  )
  if (!entry) return undefined
  return parsePost(slug, entry[1])
}
