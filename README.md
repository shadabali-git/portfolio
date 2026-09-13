# Shadab Ali — Portfolio

A Next.js 15 (App Router) portfolio built with TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- Glassmorphism / bento-grid layout on a deep obsidian base
- Animated hero with a scripted terminal widget
- `Cmd/Ctrl + K` command palette to jump to any section, project, or social profile
- Interactive experience timeline
- Filterable skill chips (Frontend / Distributed Backend / DevOps & Cloud / Core CS)
- Project cards that open a slide-in drawer with full write-ups, stack, and links

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx            Page composition
  globals.css         Design tokens (Tailwind v4 @theme) + global styles
components/
  site-header.tsx      Floating nav + command palette trigger
  hero-section.tsx      Hero with status pill, CTAs, terminal widget
  terminal-widget.tsx   Scripted terminal animation
  experience-timeline.tsx
  bento-grid.tsx         Metrics, filterable skills, achievements, education
  project-card.tsx       Project grid + drawer trigger
  project-drawer.tsx     Radix-powered slide-in project detail drawer
  command-palette.tsx    cmdk-powered Cmd+K palette
  site-footer.tsx
lib/
  portfolio-data.ts    Single typed source of truth for all content
  utils.ts             cn() classname helper
```

## Before you deploy

- Drop an actual `resume.pdf` into `public/` — the hero's "Resume" link currently points at `/resume.pdf`.
- Update `metadataBase` in `app/layout.tsx` if the production domain differs.
- All content (experience, projects, links, stats) lives in `lib/portfolio-data.ts` — edit that one file to update the whole site.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Radix UI (Dialog) · cmdk · lucide-react
