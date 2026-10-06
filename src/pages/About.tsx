import { markdownToHtml } from '@/lib/markdown'

const aboutFiles = import.meta.glob('/content/about.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const aboutHtml = markdownToHtml(aboutFiles['/content/about.md'] ?? '')

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-2xl w-full py-8">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4 text-mat-text-secondary">
          Hi, I&apos;m Pumrapee Poomka.
        </p>
        <div
          className="prose mt-6 max-w-none"
          dangerouslySetInnerHTML={{ __html: aboutHtml }}
        />
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="https://github.com/peempumrapee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mat-link hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/peempumrapee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mat-link hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/peempumrapee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mat-link hover:underline"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
