import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-2xl w-full">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          &larr; Home
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Blog</h1>
        {posts.length === 0 ? (
          <p className="mt-6 text-gray-600 dark:text-gray-400">No posts yet.</p>
        ) : (
          <ul className="mt-6 space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <h2 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {post.title}
                  </h2>
                  <time className="mt-1 block text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </time>
                  {post.excerpt && (
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
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
