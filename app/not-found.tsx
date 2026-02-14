import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-8xl font-bold tracking-tight">404</h1>
      <p className="mt-4 text-xl font-semibold">Page not found :(</p>
      <p className="mt-2 text-gray-600">
        The requested page could not be found.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700"
      >
        Go Home
      </Link>
    </main>
  );
}
