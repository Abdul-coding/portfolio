# Abdul Rahman — Portfolio

A single-page portfolio built from Abdul Rahman's resume: React + TypeScript + Tailwind CSS, bundled with Vite.

## Design direction

Backend/systems aesthetic: an ink-navy canvas, a signature amber "signal" accent and a teal "stream" accent (nodding to caching and real-time streaming, both core to the resume), `Space Grotesk` for display type, `IBM Plex Mono` for data/labels, `Inter` for body copy. The hero's signature element is an animated request-trace panel that visualizes the exact caching pattern (single-flight cache-miss protection) described in the experience section.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Dynamic resume download (Google Drive)

The "download resume" buttons (nav, hero, contact) fetch whatever file currently sits in one Google Drive folder — so updating your resume is just "replace the file in that folder," no redeploy needed.

**One-time setup:**

1. **Create the folder.** In Google Drive, make a folder (e.g. "Resume") and keep exactly one file in it — your latest resume PDF. Whatever file is there is what gets served.
2. **Share it publicly.** Right-click the folder → Share → General access → "Anyone with the link" → Viewer. (The file inside inherits this.)
3. **Get the folder ID.** Open the folder in Drive; the ID is the string after `/folders/` in the URL, e.g. `https://drive.google.com/drive/folders/`**`1AbCdEfGhIjKlmNoPQRstuVWxyz`**.
4. **Create a Google Cloud API key.**
   - Go to [console.cloud.google.com](https://console.cloud.google.com) → create/select a project.
   - APIs & Services → Library → enable **Google Drive API**.
   - APIs & Services → Credentials → Create Credentials → API key.
   - Restrict the key: under "API restrictions" limit it to Google Drive API. Under "Application restrictions" you can lock it to your deployed domain(s) once you know them (HTTP referrers).
5. **Add both values locally:**
   ```bash
   cp .env.example .env
   ```
   then fill in:
   ```
   VITE_RESUME_DRIVE_FOLDER_ID=1AbCdEfGhIjKlmNoPQRstuVWxyz
   VITE_GOOGLE_DRIVE_API_KEY=AIzaSy...
   ```
6. **Add the same two variables to your host** (Vercel/Netlify: Project Settings → Environment Variables) so the deployed build has them too.

From then on: swap the file in that Drive folder whenever you update your resume — the site picks it up automatically on next page load, no code or repo changes required.

**Fallback behavior:** if the env vars aren't set, or the Drive API call fails for any reason (network, quota, folder made private, etc.), the button silently falls back to a static file at `public/Abdul_Resume_Node.pdf`. Drop a PDF there with that name as a safety net.

**Local tip:** Vite only reads `.env` when the dev server starts. After editing `.env`, stop and re-run `npm run dev`.

## Edit the content

Everything text-based (name, bullets, projects, skills, links) lives in one file:

```
src/data.ts
```

Update it and the whole site updates — no need to touch components.

Two things worth doing before you deploy:

1. Replace the placeholder `linkedin` and `github` URLs in `src/data.ts` with your real profile links.
2. Drop your resume PDF into `public/` and update `resumeFile` in `src/data.ts` if you want a "download resume" link (not wired into the UI yet — add a link using `profile.resumeFile` wherever you'd like it, e.g. in `Contact.tsx`).

## Ambient background

`src/components/BackgroundNetwork.tsx` is a canvas layer fixed behind the whole page: soft dots drift slowly and connect to their nearest neighbors with dashed lines, each carrying a small glowing pulse that travels along it — an ambient nod to the request/event traffic the resume is about. It respects `prefers-reduced-motion` (renders one static frame instead of animating) and re-sizes itself on window resize. Tune density via the `count` calculation near the top of the `setup()` function, and colors via the `DIM` / `SIGNAL` / `STREAM` constants at the top of the file.

## Section labels

The "01 · experience" style labels above each section (`src/components/Section.tsx`) are now a bordered, tinted chip (`bg-signal/10 border border-signal/30`) in bold amber mono type, instead of plain small text — makes them read as section anchors at a glance while scrolling.

## Project structure

```
src/
  data.ts              # all content — edit this first
  App.tsx              # page composition
  index.css            # tailwind + base styles
  components/
    Nav.tsx
    Hero.tsx
    TracePanel.tsx     # the animated cache-trace signature element
    Section.tsx         # shared section header/wrapper
    Experience.tsx
    Projects.tsx
    Skills.tsx
    Education.tsx
    Contact.tsx
```

## Deploy (Netlify)

Build settings are in `netlify.toml` (`npm run build` → publish `dist/`). Production build has been verified locally.

### Option A — Drag & drop (fastest, one-time)

1. Run `npm run build` locally (creates `dist/`).
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Deploy manually**.
3. Drag the `dist` folder onto the upload area.
4. Site Settings → **Environment variables** → add:
   - `VITE_RESUME_DRIVE_FOLDER_ID`
   - `VITE_GOOGLE_DRIVE_API_KEY`
5. **Trigger a redeploy** after adding env vars (manual deploys don’t bake env vars in unless you rebuild with them — for drag & drop, env vars only matter if you switch to continuous deploy / build on Netlify).

For the resume Drive feature on a manual drag-and-drop deploy, either rebuild locally *after* your `.env` is filled (Vite inlines `VITE_*` at build time), or use Option B so Netlify builds with those variables.

### Option B — Git + continuous deploy (recommended)

1. Create a GitHub repo and push this project (keep `.env` out of git — it’s already in `.gitignore`).
2. In Netlify: **Add new site** → **Import an existing project** → pick the repo.
3. Build settings are auto-detected from `netlify.toml`. Confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Before first deploy, add env vars:
   - `VITE_RESUME_DRIVE_FOLDER_ID`
   - `VITE_GOOGLE_DRIVE_API_KEY`
5. Deploy. Every push to `main` redeploys automatically.

### After deploy

- If your Google API key has **HTTP referrer** restrictions, add your Netlify domain (e.g. `https://yoursite.netlify.app/*`).
- Optional: Site settings → Domain management → add a custom domain.

Works the same on Vercel or GitHub Pages — static Vite output in `dist/`.
