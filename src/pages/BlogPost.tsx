import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getPostBySlug } from '@/lib/posts'
import { markdownToHtml } from '@/lib/markdown'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Pumrapee Poomka`
      return () => { document.title = 'Peem Pumrapee Poomka' }
    }
  }, [post])

  if (!post) return <Navigate to="/404" replace />

  const content = markdownToHtml(post.content)

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <article className="max-w-2xl w-full">
        <Link
          to="/blog"
          className="text-sm text-mat-text-muted hover:text-mat-text-secondary"
        >
          &larr; Blog
        </Link>
        <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
        <time className="mt-2 block text-sm text-mat-text-muted">{post.date}</time>
        <div
          className="prose mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </main>
  )
}
