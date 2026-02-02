# Project Development Logs & Onboarding Guide

**Project:** Psicologia do 1º Andar  
**Stack:** React 18, TypeScript, Vite, Tailwind CSS  
**Deployment:** Google Cloud Run (Docker) / Vercel (Static)

---

## 🧬 Project DNA (Read This First)
If you are new to this project, here is the core logic you need to understand:

1.  **Data-Driven Architecture:**
    *   We do not hardcode content (text/images) inside React components.
    *   **Source of Truth:** `src/data.ts`. This file acts as a local "Headless CMS".
    *   **Workflow:** To update a service description or add a team member, you edit `data.ts`, not `Team.tsx`.

2.  **Routing Strategy (`HashRouter`):**
    *   We use `HashRouter` (URLs look like `domain.com/#/equipa`) instead of `BrowserRouter` (`domain.com/equipa`).
    *   **Why?** This application is deployed on static hosts (Vercel) and simplified containers (Nginx). `HashRouter` prevents "404 Not Found" errors on page refresh because the server always serves `index.html` and the browser handles the rest via the hash fragment.

3.  **Styling System ("Clarity"):**
    *   We use a custom Tailwind configuration in `index.html`.
    *   **Key Colors:** `bg-clarity-primary` (Green), `bg-clarity-surface` (Cream).
    *   **Design Language:** Pill shapes, rounded corners (`rounded-[2.5rem]`), and glassmorphism.

---

## 📜 Development History (Chronological)

### Phase 1: Inception & MVP Structure
**Goal:** Create a functional SPA for a psychology clinic.
*   **Action:** Initialized Vite + React + TypeScript.
*   **Architecture Decision:** Separated `types.ts` (interfaces) and `data.ts` (content) immediately to allow non-developers to edit text safely.
*   **Initial Pages:** Home, Services, Team, Contact.

### Phase 2: The "Clarity" Redesign
**Goal:** Shift from generic pastel design to a high-end, organic aesthetic.
*   **Context:** The initial design was functional but lacked "soul". We referenced "Clarity Care" for inspiration.
*   **Changes:**
    *   **Typography:** Added `Playfair Display` for a sophisticated feel.
    *   **Layout:** Moved to "Split Layouts" (Text on left, Image on right) in the Hero section.
    *   **Micro-interactions:** Added hover effects that scale images and change card background colors.
    *   **Navigation:** Created a floating, pill-shaped Navbar that changes appearance on scroll.

### Phase 3: Content Realism & Accuracy
**Goal:** Ensure the site reflects the actual professionals.
*   **Update:** Dr. Sara Bartolomeu's profile was updated.
*   **Specifics:** 
    *   Linked to her project "Pra semana à mesma hora".
    *   **Correction:** Initially listed as a Podcast, corrected to "Project" upon review.
    *   **Feature:** Added a "Direct Contact" sidebar in `TeamMember.tsx` to handle individual emails/websites, as opposed to just the general clinic contact.

### Phase 4: Cloud Infrastructure (The "Containerization")
**Goal:** Deploy to Google Cloud Run.
*   **Challenge:** Cloud Run requires a listening server; it cannot just serve static files like Vercel.
*   **Solution:** Docker Multi-Stage Build.
    1.  **Build Stage:** Uses Node.js to run `vite build`, generating the `dist/` folder.
    2.  **Run Stage:** Uses Nginx (Alpine Linux) to serve the `dist/` folder.
*   **File Created:** `Dockerfile` describing this process.
*   **File Created:** `nginx.conf` to configure the server.

### Phase 5: Troubleshooting & Stabilization (The "Fixes")
*This phase addressed critical bugs preventing deployment.*

#### 5.1 The "Import Map" Crash
*   **Symptom:** White screen of death. Console errors about React version mismatch.
*   **Cause:** The `index.html` contained a CDN `<script type="importmap">` forcing React 19, while `package.json` installed React 18.
*   **Fix:** Removed the `importmap`. We now rely 100% on Vite bundling locally installed dependencies.

#### 5.2 Cloud Run "Port 8080" Error
*   **Symptom:** Deployment failed: *"Container failed to start... listen on port defined by PORT=8080"*.
*   **Cause:** Nginx defaults to port 80. Cloud Run strictly requires 8080.
*   **Fix:** 
    1.  Modified `nginx.conf` to `listen 8080;`.
    2.  Added a fallback `start` script in `package.json`: `vite preview --port 8080`.

#### 5.3 Build Failures (TS6133)
*   **Symptom:** `npm run build` failed.
*   **Cause:** TypeScript "Strict Mode" forbids unused variables.
*   **Fix:** Cleaned up code in `Home.tsx` (removed unused `idx` in map) and `TeamMember.tsx` (removed unused `Phone` import).

### Phase 6: Documentation
**Goal:** Ensure project longevity.
*   **Action:** Created this `docs/` folder.
*   **Artifacts:**
    *   `README.md`: How to run/deploy.
    *   `idea-inbox-mvp-roadmap.md`: Strategic view.
    *   `architecture-decisions.md`: Technical justification.
    *   `LOGS.md`: Historical context.

---

## 🛠 Common "Gotchas" (Troubleshooting)

1.  **"My changes in `Team.tsx` aren't showing up!"**
    *   Check `data.ts`. The component renders what is in the data file. You likely need to update the array there.

2.  **"The site 404s when I refresh on a subpage."**
    *   This shouldn't happen because we use `HashRouter`. If it does, ensure you haven't accidentally switched back to `BrowserRouter` in `App.tsx`.

3.  **"Images aren't loading."**
    *   We use `picsum.photos` for placeholders. If they fail, it's likely an external service issue. In production, replace these URLs in `data.ts` with real asset paths.
