import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: `${post.title} | Pumrapee Poomka`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const content = await markdownToHtml(post.content);

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <article className="max-w-2xl w-full">
        <Link
          href="/blog"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          &larr; Blog
        </Link>
        <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
        <time className="mt-2 block text-sm text-gray-500">{post.date}</time>
        <div
          className="prose mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </main>
  );
}
