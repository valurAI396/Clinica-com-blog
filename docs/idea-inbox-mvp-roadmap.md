# Project: Psicologia do 1º Andar - Web Portal

## 1. Executive Summary
This project is a modern, Single Page Application (SPA) designed for "Psicologia do 1º Andar", a psychology clinic in Viseu. The goal is to provide a comforting, professional, and accessible digital presence that converts visitors into patients through clear communication of services and team expertise.

## 2. What Works (Current MVP Status)
The application is currently in **Stable Production-Ready** state.

### Core Features
- **Responsive UI:** Fully fluid design that works on Mobile, Tablet, and Desktop.
- **Navigation:**
  - Sticky top bar with transparency effects.
  - Mobile hamburger menu with smooth animations.
  - Footer with quick links and contact info.
- **Routing:** Client-side routing (`HashRouter`) allowing navigation between Home, Services, Team, and Contacts without page reloads.
- **Data Management:** Centralized `data.ts` file acting as a "Headless CMS" for easy updates to:
  - Service descriptions.
  - Team member profiles (including specialized bio pages).
  - Clinic contact details and hours.
- **Visual Design:**
  - "Clarity Care" aesthetic: Organic shapes, pill buttons, soft shadows.
  - Palette: Deep Forest Green (`#2A4E45`), Warm Sand (`#DBCFB0`), and Cream Backgrounds (`#F4F2ED`).

### Deployment & Infrastructure
- **Build System:** Vite-based build pipeline is error-free (TypeSafety enforced).
- **Google Cloud Run:** Fully containerized with Docker + Nginx (Alpine), listening on port 8080.
- **Vercel:** Compatible with Vercel static hosting via GitHub integration.
- **Version Control:** Repository structure optimized for GitHub CI/CD triggers.

## 3. Roadmap & Future Improvements

### Phase 1: Post-Launch (Immediate)
- [ ] **SEO Optimization:** Add `react-helmet-async` to manage `<title>` and `<meta>` tags per route.
- [ ] **Analytics:** Integrate Google Analytics 4 (GA4).
- [ ] **Google Maps:** Replace the static placeholder with a real Embed API iframe.

### Phase 2: Functionality
- [ ] **Form Backend:** Connect the Contact Form to EmailJS or a Cloud Function to actually send emails.
- [ ] **Online Booking:** Integrate with a third-party booking system (e.g., Calendly or Doctolib) links.

### Phase 3: Content Management
- [ ] **Blog Section:** Add a blog module for SEO content strategy.
- [ ] **CMS:** Eventually migrate `data.ts` to a headless CMS (Contentful or Sanity) if updates become too frequent for developers to handle.
