import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      return getPostBySlug(slug);
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    content,
  };
}
