import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-2xl w-full">
        <Link href="/" className="text-sm text-mat-text-muted hover:text-mat-text-secondary">
          &larr; Home
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Blog</h1>
        {posts.length === 0 ? (
          <p className="mt-6 text-mat-text-secondary">No posts yet.</p>
        ) : (
          <ul className="mt-6 space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <h2 className="text-xl font-semibold group-hover:text-mat-link">
                    {post.title}
                  </h2>
                  <time className="mt-1 block text-sm text-mat-text-muted">
                    {post.date}
                  </time>
                  {post.excerpt && (
                    <p className="mt-2 text-mat-text-secondary">{post.excerpt}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
