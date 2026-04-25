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

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(':')
    if (colon > 0) {
      data[line.slice(0, colon).trim()] = line.slice(colon + 1).trim()
    }
  }
  return { data, content: match[2] }
}

function parsePost(slug: string, raw: string): Post {
  const { data, content } = parseFrontmatter(raw)
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
