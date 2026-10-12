# Amine Dahmen — Portfolio

Modern, dark-first developer portfolio built with React, Vite, TypeScript, Tailwind CSS v4, and Framer Motion.

## Prerequisites

- Node.js 20+ (recommended)
- npm 10+

## Installation

```bash
cd amine-portfolio
npm install
```

## Development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Tailwind CSS

Tailwind v4 is wired through the official Vite plugin:

- `vite.config.ts` — `tailwindcss()` from `@tailwindcss/vite`
- `src/index.css` — `@import 'tailwindcss';` plus `@theme` tokens

## Contact form

- **Default:** submitting the form opens the user’s mail client with a pre-filled message (`mailto:`).
- **Optional:** set `VITE_FORM_ENDPOINT` in `.env` (see `.env.example`) to POST to Formspree or a similar endpoint.

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub, GitLab, or Bitbucket).
2. In [Vercel](https://vercel.com), choose **Add New Project** and import the repo.
3. Vercel auto-detects **Vite**; use defaults:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add environment variables in the Vercel project settings if you use `VITE_FORM_ENDPOINT`.
5. Deploy.

Single-page apps work out of the box; no extra rewrites are required for this site.

## Customize

Edit copy, links, and project data in `src/data/portfolio.ts` (email, GitHub, LinkedIn, projects, skills, timeline).
