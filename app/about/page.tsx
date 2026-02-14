import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-2xl w-full">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          &larr; Home
        </Link>
        <h1 className="mt-4 text-3xl font-bold">About</h1>
        <p className="mt-6 text-gray-600">
          Hi, I&apos;m Pumrapee Poomka. Welcome to my personal website.
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="https://github.com/peempumrapee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/peempumrapee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/peempumrapee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
