# Project guidance for coding agents

## Scope

This repository is Pumrapee Poomka's personal website and blog. It is a static React application built with Vite and deployed to GitHub Pages. There is no backend or database. Do not introduce Next.js conventions, server routes, or server-only dependencies.

Keep changes small and focused on the requested task. Preserve personal content unless asked to change it. Avoid new dependencies unless necessary and approved.

## Stack and commands

- React 19, React Router 7, TypeScript in strict mode, Vite 6, and Tailwind CSS 4.
- Use Node.js 22 to match CI and pnpm 9.15.4 as declared in `package.json`.
- Use [Makefile](Makefile) as the source of truth for project commands; prefer its targets over direct package-manager commands.
- `make setup` installs dependencies.
- `make dev` starts the development server.
- `make build` generates `out/`.
- The Makefile does not currently expose type-checking or preview targets. The `lint` script in `package.json` performs TypeScript checking, not ESLint or formatting.
- No automated test suite is configured. Do not claim tests passed when only type checking or a build was run.

## Architecture

- `index.html` mounts the application and initializes the theme before React loads.
- `src/main.tsx` creates the React root and configures `BrowserRouter` using Vite's base URL.
- `src/App.tsx` defines routes: `/`, `/about`, `/blog`, `/blog/:slug`, and the catch-all not-found page.
- `src/pages/` contains page components; `src/components/` contains the shared layout and theme toggle.
- `src/lib/posts.ts` eagerly imports `content/posts/*.md`, parses metadata, and sorts posts newest first.
- `src/lib/markdown.ts` converts Markdown to HTML with unified, remark, and rehype, including GitHub-flavored Markdown and sanitization.
- `src/globals.css` configures Tailwind, light/dark Material palette tokens, and `.prose` styles.
- `vite.config.ts` configures the `@` alias for `src/`, the deployment base path, and static output.

## Content conventions

- `content/about.md` feeds the homepage's About Me section. `/about` is separately authored in `src/pages/About.tsx`.
- Add blog posts as `content/posts/<slug>.md`; the filename defines `/blog/<slug>`.
- Frontmatter is a minimal line-based parser, not a YAML parser. Use unquoted, single-line `title`, `date`, and `excerpt` values. Use `YYYY-MM-DD` dates for predictable sorting; quoted values remain quoted literally.
- The homepage displays the five latest posts. Content is bundled at build time, not fetched from a CMS.
- Keep the Markdown sanitization pipeline in place before inserting generated HTML with `dangerouslySetInnerHTML`.

## Code conventions

- Follow nearby code: function components, TypeScript types, single quotes, and no semicolons in most TypeScript files.
- Use the existing `@/` alias where appropriate. Use React Router links for internal navigation.
- Prefer the existing `mat-*` Tailwind color tokens so changes work in both themes. `.prose` is styled locally; there is no Tailwind Typography plugin.
- Preserve accessible labels, semantic HTML, and safe external-link attributes.
- Theme state uses the `dark` class on the document element and the `theme` localStorage key. Keep the initial script in `index.html` and `ThemeToggle.tsx` consistent.

## Deployment constraints

- Preserve static hosting compatibility; runtime code must work in the browser without a server.
- `PAGES_BASE_PATH` defaults to `/` and is supplied by GitHub Pages configuration in CI. Keep asset URLs and router paths compatible with subpath deployments.
- Build output is `out/`, not `dist/`. The Vite build copies `index.html` to `404.html` for GitHub Pages client-side routing.
- `.github/workflows/vite.yml` builds and deploys on pushes to `main` and manual dispatch. It currently builds without a separate type-check step.
- Do not manually edit generated output or deploy without authorization.

## Validation and handoff

- For code changes, run `make build` when dependencies are available. It does not run type checking; use the `lint` script defined in `package.json` separately until a Makefile target exists. Report blockers or skipped checks explicitly.
- For UI, routing, or content changes, also check affected pages locally, including theme behavior and missing-post handling where relevant.
- For documentation-only changes, verify paths and commands against the repository and run `git diff --check`; a build is normally unnecessary.
- Summarize changed files, validation results, and any remaining limitations. Do not include unrelated cleanup.
