# Architectural Decision Record (ADR)

## 1. Frontend Framework
*   **Decision:** React 18 + TypeScript + Vite
*   **Reasoning:**
    *   **Vite:** Chosen for superior build performance over Webpack/CRA.
    *   **TypeScript:** Ensures type safety, critical for the `data.ts` structure to ensure the UI doesn't break if content is missing.
    *   **React 18:** Uses the latest concurrency features, though currently utilizing standard rendering.

## 2. Styling Strategy
*   **Decision:** Tailwind CSS
*   **Reasoning:**
    *   Allows rapid development of the custom "Clarity" design system.
    *   Configuration centrally managed in `index.html` (via CDN script for the prototype, scalable to build-time config).
    *   Easy handling of responsive states (`md:`, `lg:`).

## 3. Routing Strategy
*   **Decision:** `HashRouter` (React Router v6)
*   **Context:**
    *   Deployment targets include both static hosting (Vercel) and containers (Cloud Run).
*   **Reasoning:**
    *   **Universal Compatibility:** `HashRouter` uses the URL hash (`/#/servicos`) to manage state. This prevents 404 errors on page refresh on static hosts that don't have complex rewrite rules configured.
    *   It simplifies the Vercel and Nginx configuration significantly, ensuring the app works "out of the box" on any platform.

## 4. Hybrid Deployment Strategy
The application is designed to be agnostic of the hosting provider.

### Option A: Google Cloud Run (Containerized)
*   **Mechanism:** Docker Multi-stage Build + Nginx.
*   **Flow:**
    1.  **Stage 1 (Build):** Node image installs dependencies and runs `vite build`.
    2.  **Stage 2 (Serve):** Nginx Alpine image copies the `dist/` folder.
*   **Configuration:** `nginx.conf` listens on port 8080 (Cloud Run requirement) and serves `index.html`.

### Option B: Vercel (Static)
*   **Mechanism:** Native Vite detection.
*   **Flow:** Connect GitHub Repository -> Vercel detects Vite -> Runs `npm run build` -> Serves `dist/`.
*   **Benefits:** Zero configuration required; faster CD (Continuous Deployment) from GitHub; automatic SSL.

## 5. Data Architecture
*   **Decision:** Static `data.ts` file.
*   **Reasoning:**
    *   The clinic's content (address, team, services) changes infrequently.
    *   Setting up a database or API for this MVP would add unnecessary complexity and cost.
    *   **Benefit:** Zero latency on content loading and strictly typed content structure.

## 6. Version Control & Dependencies
*   **Decision:** GitHub + Strict Local Versioning
*   **Reasoning:**
    *   Dependencies are strictly managed via `package.json`.
    *   The build pipeline (`tsc && vite build`) runs on every commit to GitHub (via Vercel) or on container build, preventing broken code from reaching production.
