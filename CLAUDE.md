# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Docusaurus 3 documentation site for sagelga's projects, hosted at docs.sagelga.com. Deployed via Cloudflare Pages.

## Commands

- `npm start` — Local dev server with hot reload
- `npm run build` — Production build (outputs to `build/`)
- `npm run serve` — Serve the production build locally
- `npm run typecheck` — TypeScript type checking (`tsc`)
- `npm run clear` — Clear Docusaurus cache (useful when builds behave unexpectedly)
- `npm run pages:deploy` — Deploy to Cloudflare Pages via wrangler

## Architecture

- **Docusaurus 3** with `preset-classic` — blog is disabled, only docs + custom pages
- **Sidebar**: Auto-generated from `docs/` filesystem structure (`sidebars.js`)
- **Math**: KaTeX support via `remark-math` + `rehype-katex`
- **Search**: Algolia DocSearch (configured in `docusaurus.config.mjs`)
- **Deployment**: Cloudflare Pages — config in `wrangler.jsonc`, build output is `./build`
- **Node version**: 20 (`.node-version`)

## Content Structure

Each project lives in its own directory under `docs/`:
`approval-workflow`, `codenames`, `compro-project`, `data-journal`, `documentation`, `oh-sheet`, `panda`, `trashmelody`

Each project directory typically contains a `README.md` (landing page) and subdirectories for `docs/`, `manual/`, or `wordlist/`.

## Customization

- `src/pages/index.tsx` — Custom homepage
- `src/components/HomepageFeatures/` — Feature cards on the homepage
- `src/css/custom.css` — Global CSS overrides
- `docusaurus.config.mjs` — Site config, navbar items, Algolia, KaTeX stylesheets
- `static/img/` — Static assets (SVGs, favicon, social card)
