# Devam Zanzmera — Portfolio

Personal portfolio built with **Next.js 16**, TypeScript, Tailwind CSS, `next-themes`, and Framer Motion.

## Features

- Resume-sourced About / Experience / Skills / Education / Contact
- Auto-synced public GitHub repositories (hourly revalidation)
- Light / dark / system theme
- Downloadable resume (`public/resume.pdf`)
- Inference Field design system with lattice atmosphere and motion

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run generate-resume` — regenerate `public/resume.pdf`

## Optional env

Copy `.env.example` to `.env.local` and set `GITHUB_TOKEN` for higher GitHub API rate limits.
