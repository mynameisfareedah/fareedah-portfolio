# Fareedah Hussain Portfolio

Personal professional portfolio for Fareedah Hussain, a Full-Stack Developer and Digital Technology & Operations Specialist. The site presents verified technical work, digital systems, operations experience, and data skills without inventing project details.

## Stack

- React and Vite (JavaScript)
- Tailwind CSS 4 via `@tailwindcss/vite`
- React Router for page and project case-study routes
- Supabase configuration prepared through environment variables; no backend service is connected yet
- Git/GitHub and Netlify deployment

## Structure

- `src/components/` reusable interface components
- `src/content/` central site and project content
- `src/components/pages/` page-level views for About, Experience, Projects, Skills, Contact, and case studies
- `src/index.css` global design tokens and Tailwind entry point
- `public/favicon-fh.svg` FH favicon asset

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` when Supabase configuration is introduced. Never commit real credentials. Only `VITE_` values are exposed to the browser, so sensitive server-side credentials belong in Netlify environment variables or serverless functions.

## Build and deployment

```bash
npm run build
npm run preview
```

Netlify is configured in `netlify.toml` to build with `npm run build`, publish `dist`, and rewrite application routes to `index.html`. Connect the Git repository to Netlify and add any future environment variables in the Netlify site settings. No production URL is currently defined.
