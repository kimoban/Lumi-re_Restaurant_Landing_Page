# Lumière Pop-Up – One‑Pager

A Vite + React one‑pager for a limited-time pop‑up restaurant. It features menu highlights, event details, ambiance photos, and a printable mini‑menu. Static assets are bundled by Vite; data is served via lightweight Vercel serverless functions.

## What’s included

- Client: Vite + React + Tailwind (under `client/`)
- API: Vercel serverless functions (under `api/`)
- Shared types: `shared/` (Zod schemas)
- Generated imagery: `attached_assets/generated_images/` (imported by components)

## Local development

Install dependencies, then run the dev server:

```powershell
npm install
npm run dev
```

This starts Vite at http://localhost:5173. If you need the API locally with Vercel emulation, you can use:

```powershell
# Optional – requires Vercel CLI installed (npm i -g vercel)
vercel dev
```

## Build

```powershell
npm run build
```

The static site is emitted to `dist/public/` (as configured in `vite.config.ts`).

## Deploy to Vercel

You can deploy either via the Vercel Dashboard or CLI. This repo already includes a `vercel.json` tailored for Vite + functions.

### 1) Dashboard (no CLI)

1. Push this project to GitHub.
2. Import the repo in Vercel.
3. Framework preset: Vite (auto-detected).
4. Build Command: `vite build` (auto from `vercel.json`).
5. Output Directory: `dist/public` (from `vercel.json`).
6. Deploy. Your API will be available under `/api/*` (e.g., `/api/menu`).

### 2) CLI (recommended for quick previews)

```powershell
npm install -g vercel
vercel login
vercel link  # choose this directory
vercel build
vercel deploy --prebuilt
```

- Static assets are served from `dist/public`.
- API endpoints are deployed from the `api/` folder:
  - `GET /api/menu`
  - `GET /api/event-details`
  - `GET /api/story`

## Notes on Replit cleanup

- Removed Replit-specific Vite plugins from `vite.config.ts`.
- Updated `package.json` scripts to use Vite directly; removed server bundling.
- You can safely delete `.replit` and `replit.md` if they remain in your copy; they don’t affect Vercel.

## Troubleshooting

- If Vercel can’t find the output directory, ensure it’s set to `dist/public` in Project Settings (it’s also defined in `vercel.json`).
- If images don’t appear, confirm the imports in components point to files in `attached_assets/generated_images/` and that they’re committed.
- If `/api/*` requests 404, verify the `api/` directory is at the repo root and files export a default `handler`.
