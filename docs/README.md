# Psicologia do 1º Andar - Website

A modern, minimalist, and responsive Single Page Application (SPA) for the "Psicologia do 1º Andar" psychology clinic in Viseu. The website is built to be comforting, professional, and fast, utilizing modern web technologies.

## 🚀 Quick Start

### Prerequisites
*   Node.js (v18 or higher)
*   npm (v9 or higher)
*   Git

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/psicologia-1-andar.git
    cd psicologia-1-andar
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser at `http://localhost:5173`.

## 🛠 Tech Stack

*   **Framework:** React 18 + TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM (v6, using `HashRouter`)
*   **Icons:** Lucide React
*   **Hosting:** Vercel (Static) OR Google Cloud Run (Docker)

## 📝 How to Update Content

You do **not** need to edit HTML code to update text, team members, or services.
All content is centralized in **`src/data.ts`**.

1.  Open `src/data.ts`.
2.  **To add a Team Member:** Add a new object to the `team` array.
3.  **To change Address/Hours:** Edit the `contactInfo` object at the bottom.
4.  **To add a Service:** Add a new object to the `services` array.

### 🖼️ Managing Images (Replacing Placeholders)

The website currently uses placeholder images (`picsum.photos`). To use your own real photos:

1.  **Prepare your images:** Rename them clearly (e.g., `sara-profile.jpg`, `clinic-interior.jpg`).
2.  **Add to project:** Drag and drop your image files into the **`public/`** folder (create a subfolder like `public/images/` to keep it organized).
3.  **Update Data:**
    *   Open `src/data.ts`.
    *   **For Team Members:** Find the `image` field in the `team` array.
    *   **For Home Hero Image:** Find the `homeContent.hero.image` field.
    *   **For Avatars:** Find the `homeContent.hero.avatars` array.
    
    *   Replace the URL with your local path:
        ```typescript
        // BEFORE
        image: 'https://picsum.photos/id/65/400/500',

        // AFTER
        image: '/images/sara-profile.jpg',
        ```
    *   *Note:* Do not include "public" in the path string. The build tool treats the public folder as the root `/`.

## ☁️ Deployment Options

### Option 1: Vercel (Recommended for Speed)
This is the easiest way to deploy and get automatic updates when you push to GitHub.

1.  Push your code to a **GitHub Repository**.
2.  Log in to [Vercel](https://vercel.com) and click "Add New... > Project".
3.  Import your GitHub repository.
4.  Vercel will detect `Vite` automatically.
5.  Click **Deploy**.
    *   *Note:* Since we use `HashRouter`, no special configuration files (`vercel.json`) are needed.

### Option 2: Google Cloud Run (Docker)
This project is configured to run on Google Cloud Run using the included `Dockerfile` and `nginx.conf`.

1.  **Build Locally (Optional Testing):**
    ```bash
    docker build -t psicologia-website .
    docker run -p 3000:8080 psicologia-website
    ```

2.  **Deploy via Cloud SDK:**
    ```bash
    gcloud run deploy psicologia-website --source . --port 8080 --allow-unauthenticated
    ```

## 📂 Project Structure

```text
├── src/
│   ├── components/    # Reusable UI components (Navbar, Footer)
│   ├── pages/         # Page views (Home, Services, Team, etc.)
│   ├── data.ts        # CENTRAL CONTENT STORE
│   ├── types.ts       # TypeScript definitions
│   └── App.tsx        # Main layout and routing
├── public/            # Static assets (IMAGES GO HERE)
├── docs/              # Documentation
├── Dockerfile         # Cloud Run configuration
├── nginx.conf         # Nginx configuration for Docker
└── vite.config.ts     # Vite configuration
```

## 🎨 Design System ("Clarity")

The site uses a custom color palette defined in `index.html`:

*   **Primary (Forest Green):** `#2A4E45`
*   **Secondary (Sand):** `#DBCFB0`
*   **Background (Warm Cream):** `#F4F2ED`
*   **Accent (Sage):** `#E3EBE8`

## 📄 Documentation

For more details on architectural decisions and future plans, check the `docs/` folder:
*   [Roadmap & Status](docs/idea-inbox-mvp-roadmap.md)
*   [Architecture Decisions](docs/architecture-decisions.md)
*   [Development Logs](docs/LOGS.md)