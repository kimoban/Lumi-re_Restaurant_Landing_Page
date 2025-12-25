# Lumière Pop‑Up — Landing Page

Vite + React one‑pager for a limited‑time restaurant pop‑up. It showcases menu highlights, event details, ambiance photos, and a printable mini‑menu. Static assets are bundled by Vite; data can be served via Vercel serverless functions or a local Express server.

## Project Structure

- Client app: see [client/](client/) (React + Tailwind on Vite)
- API functions: see [api/](api/) (serverless endpoints for Vercel)
- Optional server: see [server/](server/) (Express server used in non‑Vercel environments)
- Shared types: see [shared/](shared/) (Zod schemas)
- Static assets: see [attached_assets/generated_images/](attached_assets/generated_images/)
- Vite config with path aliases: see [vite.config.ts](vite.config.ts)
  - `@` → `client/src`
  - `@shared` → `shared`
  - `@assets` → `attached_assets`

## Requirements

- Node.js 18+ and npm

## Scripts

- `dev`: start Vite dev server
- `build`: build static site to [dist/public](dist/public)
- `start`: preview built site locally (Vite preview)
- `check`: TypeScript type check
- `db:push`: Drizzle Kit schema push (optional, if you add a database)

## Local Development

1) UI only (quickest):

```powershell
npm install
npm run dev
```

This runs the client at [http://localhost:5173](http://localhost:5173).

2) UI + API (Vercel emulation):

```powershell
npm install -g vercel
vercel dev
```

This serves the client and the API endpoints under `/api/*` (e.g., `/api/menu`).

## API Endpoints

Available via Vercel functions or the Express server:

- `GET /api/menu`
- `GET /api/event-details`
- `GET /api/story`

You can override response payloads in serverless mode with the following environment variables (each expects JSON):

- `MENU_ITEMS_JSON`
- `EVENT_DETAILS_JSON`
- `STORY_JSON`

Example (PowerShell):

```powershell
$env:MENU_ITEMS_JSON = '[{"id":"demo","name":"Testing","description":"…","price":9,"category":"appetizer","imageUrl":"/assets/x.png"}]'
vercel dev
```

## Build & Preview

```powershell
npm run build
npm run start
```

The build output is emitted to [dist/public](dist/public) as configured in [vite.config.ts](vite.config.ts).

## Deploy (Vercel)

This repo ships with [vercel.json](vercel.json) configured for Vite and functions.

Dashboard:

1. Push the repo to GitHub.
2. Import in Vercel; framework preset “Vite” is auto‑detected.
3. Build Command: `vite build`; Output Directory: `dist/public`.
4. Deploy. API is available under `/api/*`.

CLI:

```powershell
npm install -g vercel
vercel login
vercel link
vercel build
vercel deploy --prebuilt
```

## Notes

- The Express server in [server/](server/) mirrors the `/api/*` routes and can serve the built client in non‑Vercel hosting. It is not wired to an npm script by default.
- Images under [attached_assets/generated_images/](attached_assets/generated_images/) are imported directly by components.

## Troubleshooting

- `/api/*` returns 404 during `npm run dev`: use `vercel dev` to run serverless functions locally.
- Missing images: ensure files exist under [attached_assets/generated_images/](attached_assets/generated_images/) and imports point to the correct paths.
- Vercel build output mismatch: confirm Output Directory is `dist/public` (also defined in [vercel.json](vercel.json)).
