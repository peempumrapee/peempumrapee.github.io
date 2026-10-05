# peempumrapee.github.io

Personal website and Markdown-powered blog for Pumrapee Poomka, built with React 19, TypeScript, Vite 6, and Tailwind CSS 4. Deployed as a static client-side application to GitHub Pages, with light and dark themes.

## Development

Use Node.js 22 (matching CI) and pnpm 9.15.4 (declared in `package.json`).

```bash
make setup
make dev
```

## Branching strategy

- Use `feat/<branch>` for any update related to the web codebase.
- Use `blog/<branch>` for any update to Markdown blog content in `content/posts/`.

## Commands

Use [Makefile](Makefile) as the source of truth for project commands. Its targets wrap pnpm:

| Command | Purpose |
| --- | --- |
| `make setup` | Install dependencies |
| `make dev` | Start the Vite development server |
| `make build` | Build static files into `out/` |

No automated test suite is currently configured. The Makefile does not currently expose type-checking or preview targets.

## Project structure

- `index.html` — HTML entry point and initial theme selection.
- `src/main.tsx` — React startup and browser router.
- `src/App.tsx` — routes for `/`, `/about`, `/blog`, `/blog/:slug`, and a not-found fallback.
- `src/pages/` — page components.
- `src/components/` — shared layout and theme toggle.
- `src/lib/` — post loading and sanitized Markdown-to-HTML conversion.
- `src/globals.css` — Tailwind setup, theme tokens, and Markdown styles.
- `content/` — homepage biography and blog posts.
- `.github/workflows/vite.yml` — GitHub Pages build and deployment.

## Editing content

Edit `content/about.md` for the homepage's **About Me** section. The separate `/about` page is implemented in `src/pages/About.tsx`.

Add posts as `content/posts/<slug>.md`; the filename determines the URL `/blog/<slug>`. For example:

```markdown
---
title: My first post
date: 2026-02-14
excerpt: A short description of the post.
---

Write the post body in Markdown here.
```

Metadata uses a minimal `key: value` parser, not full YAML. Use unquoted, single-line values; quotes are retained literally. Posts are sorted newest first, and the homepage shows the latest five. Markdown supports GitHub-flavored syntax and is sanitized before rendering. Content is bundled by Vite; rebuild to publish changes.

## Deployment

`.github/workflows/vite.yml` installs locked dependencies, builds, and deploys `out/` to GitHub Pages on pushes to `main` or manual workflow runs. Configure the repository's Pages source as **GitHub Actions**.

Vite uses `PAGES_BASE_PATH` (default `/`) for the deployment base path; CI supplies it from the Pages configuration. The browser router uses the same base. The build also copies `out/index.html` to `out/404.html` to support client-side routes on GitHub Pages.

See [AGENT.md](AGENT.md) for coding-agent guidance.
