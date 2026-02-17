import fs from "fs";
import path from "path";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";

export default async function Home() {
  const latestPosts = getAllPosts().slice(0, 5);
  const aboutMd = fs.readFileSync(
    path.join(process.cwd(), "content/about.md"),
    "utf8"
  );
  const aboutHtml = await markdownToHtml(aboutMd);

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-2xl w-full space-y-16 py-16">
        {/* Hero */}
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl whitespace-nowrap">
            Peem Pumrapee Poomka
          </h1>
          <p className="mt-6 text-lg text-mat-text-secondary">
            Software Engineer, Data & Machine Learning Engineering
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="mailto:pumrapee2599@gmail.com"
              aria-label="Email"
              className="text-mat-text-muted hover:text-mat-text"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://github.com/peempumrapee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-mat-text-muted hover:text-mat-text"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/peempumrapee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-mat-text-muted hover:text-mat-text"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </a>
            <a
              href="https://x.com/peempumrapee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-mat-text-muted hover:text-mat-text"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </div>
        </section>

        {/* Photo Placeholder */}
        <div className="flex flex-col items-center">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-mat-surface">
            <svg
              className="h-16 w-16 text-mat-text-faint"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12Zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8Z" />
            </svg>
          </div>
          <p className="mt-3 text-sm text-mat-text-faint">Add your photo</p>
        </div>

        {/* About Me */}
        <section>
          <h2 className="text-2xl font-bold">About Me</h2>
          <div
            className="prose mt-4 max-w-none"
            dangerouslySetInnerHTML={{ __html: aboutHtml }}
          />
        </section>

        {/* Latest Posts */}
        <section>
          <h2 className="text-2xl font-bold">Latest Posts</h2>
          {latestPosts.length === 0 ? (
            <p className="mt-6 text-mat-text-secondary">No posts yet.</p>
          ) : (
            <>
              <ul className="mt-6 space-y-6">
                {latestPosts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <h3 className="text-lg font-semibold group-hover:text-mat-link">
                        {post.title}
                      </h3>
                      <time className="mt-1 block text-sm text-mat-text-muted">
                        {post.date}
                      </time>
                      {post.excerpt && (
                        <p className="mt-1 text-mat-text-secondary">{post.excerpt}</p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/blog"
                className="mt-6 inline-block text-sm font-semibold text-mat-link hover:underline"
              >
                View all posts &rarr;
              </Link>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
