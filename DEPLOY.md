# Triprodeo — Deployment Guide

The app has three components:

| Component   | Path       | Runtime         | Port |
|-------------|------------|-----------------|------|
| Frontend    | `./`       | Vite → static   | 80   |
| Backend API | `./backend`| Node + Express  | 5000 |
| Database    | —          | PostgreSQL 16+  | 5432 |

The admin CMS is served by the frontend at `/admin` and writes through to
the backend's `/api/cms` endpoints (which persist to Postgres via the
`SiteSettings` table under the `cms_content` key).

---

## Option 1 — Docker Compose (single host, one command)

```bash
cp backend/.env.example backend/.env          # optional: edit secrets
docker compose up -d --build
docker compose exec backend npm run db:seed   # first boot only
```

Then visit:
- Frontend:  http://localhost:8080
- Backend:   http://localhost:5000/api
- Admin CMS: http://localhost:8080/admin (login with `ADMIN_DEFAULT_EMAIL` / `ADMIN_DEFAULT_PASSWORD`)

## Option 2 — Split hosting (frontend static host + backend + managed Postgres)

### Backend
1. Provision Postgres and set `DATABASE_URL`.
2. Set all env vars from `backend/.env.example` (especially rotate the JWT secrets and admin password).
3. Build + run migrations + start:
   ```bash
   cd backend
   npm ci
   npm run build
   npm run db:deploy   # applies migrations
   npm run db:seed     # first boot only — seeds admin, hosts, sample properties
   npm start
   ```

### Frontend
1. Set `VITE_API_URL=https://api.your-domain.com/api` at build time.
2. Build and upload the `out/` directory to any static host (Vercel, Netlify,
   Cloudflare Pages, S3+CloudFront):
   ```bash
   npm ci
   VITE_API_URL=https://api.your-domain.com/api npm run build
   ```
3. Ensure the host rewrites unknown routes to `/index.html` (SPA fallback) —
   the provided `nginx.conf` does this.

---

## First-time database setup

If you don't have a migrations folder yet (fresh clone), create the initial
migration from the schema:

```bash
cd backend
npm run db:migrate -- --name init
```

For subsequent deploys use `npm run db:deploy` which only applies already-
committed migrations (no schema drift).

---

## Post-deploy checklist

- [ ] `/health` returns `{"status":"ok","db":"connected"}`
- [ ] `/sitemap.xml` and `/robots.txt` render
- [ ] Admin login works at `/admin`
- [ ] Saving content in the admin CMS persists across reloads (writes to
      backend via `POST /api/cms/settings`)
- [ ] Rotate `ADMIN_DEFAULT_PASSWORD`, `JWT_SECRET`, `JWT_REFRESH_SECRET`,
      `CMS_ADMIN_SECRET` from the defaults
