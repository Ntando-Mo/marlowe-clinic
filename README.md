# Marlowe Clinic Portal

A responsive React single-page application for browsing Marlowe Clinic services, checking practitioner availability, and submitting appointment requests with keyboard and screen-reader accessibility support.

**Live Demo:** [https://Ntando-Mo.github.io/marlowe-clinic/](https://Ntando-Mo.github.io/marlowe-clinic/)

## Key Features & Implemented Behaviour

- **Service Directory & Filtering (`src/pages/ServicesPage.jsx`, `src/components/FilterControls.jsx`):** Filter services by category, triage priority, and search query. Filter updates are computed synchronously in React state and announced via `LiveRegion` (`aria-live="polite"`) without moving focus away from the active filter control.
- **Appointment Request Form (`src/pages/BookingPage.jsx`, `src/components/AppointmentForm.jsx`):** Connects form controls with explicit `<label>` elements, helper text, error messaging, and live status updates upon submission.
- **Route & Focus Management (`src/App.jsx`, `src/hooks/useFocusOnViewChange.js`, `src/components/SkipLink.jsx`):** Uses `HashRouter` for GitHub Pages routing, provides a skip-to-main-content link, and shifts focus to `#main-content` (`tabIndex="-1"`) when navigating between routes.
- **Visible Focus Styles (`src/styles/global.css`):** Applies a high-contrast `3px solid var(--forest, #14534B)` outline with `2px` offset on focused interactive elements and form fields.

## Accessibility Design & Trade-Offs

- **Semantic Structure & Landmark Regions:** Uses `<header>`, `<nav>`, `<main id="main-content" tabIndex="-1">`, `<section>`, `<article>`, and `<footer>` alongside sequential heading levels so assistive technologies can navigate landmarks and outlines predictably.
- **Live Announcements vs. Focus Changes:** Filtering updates the `LiveRegion` count immediately rather than debouncing or forcing focus onto headings, keeping keyboard users anchored to their chosen filter control.
- **Visual Contrast & Mesh Gradient (`src/pages/HomePage.jsx`, `src/styles/global.css`):** Pairs soft sage/forest background tones with high-contrast text and borders to support readability while keeping visual styling clean and restrained.

Additional design and planning artifacts are available in the repository:
- [Persona](./wireframes/persona.md)
- [WCAG Matrix](./wireframes/wcag-matrix.md)
- [Accessibility Test Log](./ACCESSIBILITY-TEST-LOG.md)

## Audit Evidence

Save your exported audit artifacts under `audits/` so they match the links below:
- Lighthouse Report: `./audits/lighthouse-report.html` *(add exported Lighthouse report file here)*
- axe Audit Evidence: `./audits/axe-audit-summary.md` *(add exported axe test output/notes here)*

## Getting Started

```bash
npm install
npm run dev