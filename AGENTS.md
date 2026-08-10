# Personal Blog Project Rules

## Project Scope

This is a static personal blog built with React, TypeScript, Vite, React Router, and Markdown content.

The current project does not use a backend, database, CMS, MDX, server-side rendering, or user authentication.

## Project Structure

- Public Markdown files live under `content/posts/`.
- Route-level pages live under `src/pages/`.
- Reusable UI components live under `src/components/`.
- Markdown loading and static article configuration live under `src/content/`.
- Shared TypeScript types live under `src/types/`.
- Reusable stateful logic and browser-side behavior live under `src/hooks/`.
- Global styles live under `src/index.css`; application-specific styles live under `src/App.css`.
- Keep private Obsidian notes outside `content/posts/`.

## Content

- Markdown files contain article body content only.
- Do not add frontmatter unless explicitly requested.
- Article title, date, tags, excerpt, and slug are configured in `src/content/posts.ts`.
- When adding a Markdown file, add its corresponding static metadata entry in `src/content/posts.ts`.
- Use `react-markdown` to render Markdown and `remark-gfm` for GitHub-style Markdown features.
- Do not use MDX unless explicitly requested.
- Do not reintroduce `gray-matter` or `marked` without discussing the browser/runtime implications first.
- Avoid `dangerouslySetInnerHTML` for Markdown rendering.

## Visual Design System

The visual language is a restrained personal engineering notebook: readable, warm, utilitarian, and content-focused. Do not introduce a marketing-site visual style, excessive animation, gradients, or decorative UI without explicit approval.

### Color tokens

Define shared colors as CSS custom properties in `src/index.css` and reuse the tokens instead of scattering new color literals through components.

```css
:root {
  --color-background: #f6f3ed;
  --color-surface: #fbfaf7;
  --color-text: #252525;
  --color-muted: #625e57;
  --color-subtle: #777168;
  --color-border: #ddd6ca;
  --color-accent: #1f6f5b;
  --color-accent-soft: #e5eee9;
  --color-on-accent: #ffffff;
  --color-code-background: #252525;
}
```

- `--color-background` is the global page background.
- `--color-surface` is used for cards and raised content areas.
- `--color-text` is the primary readable text color.
- `--color-muted` and `--color-subtle` are used for descriptions and metadata.
- `--color-border` is used for dividers and card borders.
- `--color-accent` is the primary interactive color.
- `--color-accent-soft` is used for tags and secondary highlights.
- `--color-on-accent` is used for text displayed on the accent color.
- `--color-code-background` is used for fenced code blocks.

New colors require a clear design reason and should be added as named tokens before use.

### Typography scale

Use `rem` for font sizes and preserve a clear hierarchy:

- Body text: `1rem`, line-height around `1.7`.
- Small metadata and labels: `0.875rem`.
- Lead paragraphs: `1.125rem`, line-height around `1.7`.
- Section headings: approximately `1.5rem` to `2rem`.
- Page headings: responsive `clamp()` sizing, normally between `2.5rem` and `5rem`.
- Article body text: approximately `1.05rem` to `1.125rem`, line-height around `1.8`.
- Code text: use a monospace font and preserve horizontal scrolling for long lines.

Do not use arbitrary pixel font sizes in individual components. Prefer the existing scale or add a documented token.

### Layout

- Keep the main content width around `980px`.
- Keep long-form article content narrower, around `720px`.
- Use a mobile breakpoint around `600px` unless the layout requires another documented breakpoint.
- Prefer whitespace, readable line lengths, and simple borders over dense card decoration.

## Component Rules

- `Layout` owns the global page shell and must include `Header`, page content, and `Footer`.
- `Header` owns global navigation and branding only.
- `Footer` owns global footer information only.
- Route pages in `src/pages/` compose components and handle page-level decisions; they should not become shared UI libraries.
- Reusable components in `src/components/` should have one clear responsibility.
- Create a component when UI is reused, has independent behavior, or would otherwise make a page difficult to read.
- Do not create one-off wrapper components merely to reduce a few lines of JSX.
- `PostCard` displays a post summary and must not load Markdown or contain route configuration.
- Content loading belongs in `src/content/`, not inside visual components.
- Internal navigation must use React Router `Link`; use normal anchors only for external URLs.
- Prefer semantic HTML elements such as `header`, `nav`, `main`, `article`, `section`, and `footer`.
- Preserve keyboard focus states, readable contrast, and responsive behavior when changing components.

## Hook Rules

- Create custom hooks only for reusable stateful logic, subscriptions, browser APIs, or effects.
- Name custom hooks with the `use` prefix and keep each hook focused on one behavior.
- Do not create a hook for a simple value calculation that can remain a local function or expression.
- Do not put visual markup, route configuration, or Markdown loading inside hooks.
- Keep content loading in `src/content/` unless the behavior genuinely depends on component lifecycle or browser state.
- Follow the Rules of Hooks: call hooks only at the top level of React components or other custom hooks.

## Routing

- `/` is the home page.
- `/posts` is the article list.
- `/posts/:slug` is the article detail page.
- `/about` is the about page.
- Preserve direct navigation and refresh support for all routes.

## Development and Validation

- Start development with `npm run dev`.
- Run `npm run lint` when changing TypeScript or React code.
- Use modern TypeScript and ESM syntax.
- Do not use `var`, `require`, `module.exports`, or other CommonJS syntax.
- Do not use Node.js runtime APIs in browser source code, including `fs`, `path`, or `Buffer`.
- Application logic must use `.ts` or `.tsx`; Markdown, CSS, HTML, JSON, and static asset files are allowed where appropriate.
- Run linting and formatting checks before committing code.
- Use Prettier for formatting and ESLint or Oxlint for code quality checks.
- Do not introduce hardcoded color values in components or page styles.
- Define colors as CSS custom properties in the design token section.
- Reuse existing design tokens, spacing, typography, and component styles before adding new values.
- Prefer CSS classes and shared styles over inline style objects.
- Use `currentColor` for reusable SVG icons when possible.
- Run `npm run build` before considering a code change complete.
- Keep the project dependency list small and prefer maintained ecosystem packages.
- Do not commit secrets, private notes, `.env` files, `node_modules/`, or generated local artifacts.

## Scope Boundaries

- Keep Version 1 static and Git-driven.
- Do not add a backend, database, CMS, authentication, analytics, Astro, or Next.js unless explicitly requested.
- Do not change the Markdown content model or routing architecture without discussing the impact first.

## Git

- Use clear Conventional Commit-style messages when practical.
- Commit messages should use the format `type: short description`, for example `feat: add Markdown post rendering`.
- Use `feat` for new behavior, `fix` for bug fixes, `refactor` for structure-only changes, `style` for formatting or visual-only changes, `docs` for documentation, `test` for tests, and `chore` for tooling or dependency maintenance.
- Keep each commit focused on one meaningful change.
- Commit meaningful changes rather than artificial daily commits.
- Do not rewrite or discard existing user changes without approval.
