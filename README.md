# Marlowe Clinic — Accessible Healthcare Booking Portal

Marlowe Clinic is a client-side React single-page application built for the Community Healthcare Clinic track (Ticket MD-2026-0143). Patients can browse clinical services, filter by category, triage priority, or keyword, check practitioner availability, and submit appointment requests using keyboard navigation and screen readers[cite: 3, 4].

**Live Application:** [https://Ntando-Mo.github.io/marlowe-clinic/](https://Ntando-Mo.github.io/marlowe-clinic/)

## Accessibility Trade-Off Analysis

1. **Immediate State Filtering & Live Announcements vs. Debouncing:** Service search and category/triage filters update results synchronously in React state and announce counts through a polite live region (`aria-live="polite"`) rather than delaying updates with a debounce timer or shifting focus onto a heading. Immediate feedback keeps keyboard users anchored to their selected filter control while still notifying screen reader users of result changes.
2. **Submit-Time Validation & Explicit Field Associations vs. Aggressive Blur Errors:** Appointment form inputs pair explicit `<label htmlFor="...">` elements with `aria-describedby` helper text, `aria-invalid` error states, and live status feedback on submission rather than interrupting typing on every field blur. This reduces premature error noise while keeping validation outcomes clear and programmatic.
3. **Restrained Mesh Gradient & High-Contrast Focus Rings vs. Heavy Decorative Styling:** The home view layers subtle sage and forest radial gradients behind transparent sections while keeping body copy contrast high and enforcing a `3px` solid forest focus outline (`outline-offset: 2px`) on `:focus-visible` controls. This preserves a calm clinical aesthetic without sacrificing focus visibility or readability.

## Assistive Technology State Architecture

React state and hooks synchronize directly with the accessibility tree and DOM focus:

- **Filter & Live Region State (`src/pages/ServicesPage.jsx`, `src/components/FilterControls.jsx`, `src/components/LiveRegion.jsx`):** Filter state (`searchQuery`, `selectedCategory`, `selectedTriage`) drives the filtered service list, control press/selection states (`aria-pressed`), and the `LiveRegion` status message (`"Showing X clinic services."`) without yanking focus away from the active control.
- **Form Accessibility State (`src/components/AppointmentForm.jsx`, `src/pages/BookingPage.jsx`):** Validation state toggles `aria-invalid` on invalid controls, links field instructions and errors via `aria-describedby`, and updates live status regions for submission feedback.
- **Route & Landmark Focus (`src/App.jsx`, `src/hooks/useFocusOnViewChange.js`):** After initial mount, route changes (`pathname`) trigger `useFocusOnViewChange` to move focus to `<main id="main-content" tabIndex="-1">`, working alongside `SkipLink` and semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)[cite: 4].

## Verification & Testing Audit

- **Automated Audits:** Lighthouse and axe DevTools checks were run against the application views to verify accessibility rules, heading order, contrast, and focus indicators. Audit screenshots are stored in `./audits/`:
  - [Lighthouse Accessibility Audit](./audits/lighthouse-accessibility.png)
  - [axe DevTools Audit Results](./audits/axe-devtools-home.png)
- **Manual & Component Testing:** Verified `Tab`/`Shift+Tab` traversal, `Enter`/`Space` activation, zero keyboard traps, route focus transitions, screen reader landmark/live-region announcements, and Vitest/React Testing Library suites (`npm test`). See [ACCESSIBILITY-TEST-LOG.md](./ACCESSIBILITY-TEST-LOG.md), [Persona](./wireframes/persona.md), and [WCAG Matrix](./wireframes/wcag-matrix.md) for full details[cite: 2, 4, 5].

## Getting Started

```bash
npm install
npm run dev
npm test
npm run build