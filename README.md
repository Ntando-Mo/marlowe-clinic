# Marlowe Clinic: Accessible Healthcare Portal
**Inclusive UI/UX and Accessible React Component Architecture**

Live Prototype: [https://ntando-mo.github.io/marlowe-clinic/](https://ntando-mo.github.io/marlowe-clinic/)

A production-grade, client-side React application designed to provide equitable healthcare access to the Careville community. The platform balances a premium, editorial design system with strict WCAG 2.1 AA compliance, ensuring a seamless booking experience for all users, specifically accommodating keyboard-only navigation and screen-reader (NVDA) reliance.

## Quick Start
```bash
npm install
npm run dev        # Local development at http://localhost:5173
npm test           # Executes unit, interaction, and axe-core accessibility suites
npm run build      # Generates optimized production build in /dist
```

## Repository Architecture
```text
wireframes/     # Initial accessibility planning (index.html, wcag-matrix.md, persona.md)
src/            # React application source code
  components/   # Modular UI components (Header, LogoMark, Footer)
  pages/        # Route views (HomePage, Services, Booking)
  styles/       # global.css (Clinical design system and structural overrides)
public/         # Static assets (favicon.svg)
lighthouse/     # Production accessibility audit reports
```

---

## Part A: Accessibility Trade-off Analysis

To accommodate keyboard-only navigation and NVDA reliance, specific engineering decisions were made to prioritize functional accessibility over generic aesthetic uniformity:

1. **Native Controls vs. Custom Widgets:** Custom date-pickers and stylized dropdowns often break NVDA interaction flows and trap keyboard users. We explicitly utilized native `<input type="date">` and `<select>` elements for the booking form. While this sacrifices cross-browser visual uniformity, it guarantees bulletproof keyboard behavior and native mobile picker support.
2. **Highly Visible Focus Management vs. Minimalist Aesthetics:** Premium minimalist designs often hide focus states. Marlowe Clinic embraces focus as a core navigational tool. All interactive elements utilize a highly visible `3px solid var(--forest)` outline with a `3px outline-offset`, ensuring keyboard users never lose their place on the screen.
3. **Live Region Verbosity vs. Silence:** Announcing every keystroke or filter toggle immediately would flood screen readers with noise. Filter and search result counts are debounced, and form field errors are announced *on blur* rather than on change. This requires a slight delay in feedback but provides a vastly superior, polite listening experience.

## Part B: Assistive Technology State Architecture

React state acts as the single source of truth. The accessibility tree is entirely state-derived, ensuring the DOM never drifts from the visual UI:

* **Dynamic ARIA Attributes:** Form inputs dynamically derive `aria-invalid` from validation state. Error messages are programmatically linked to inputs using `aria-describedby`, ensuring screen readers announce the specific error upon input focus. 
* **State-Driven Signifiers:** Active states on category filters rely on `aria-pressed="true"`, which triggers a structural CSS inversion (solid background, contrasting text) rather than relying on color shifts alone (WCAG 1.4.1).
* **Focus Flow on Routing (SPAs):** React Router does not natively announce page changes. We implemented manual focus management and a `scrollToTop` handler on all navigation links. This resets the viewport and allows the screen reader to naturally catch the new `<h1>` title.
* **Bypass Blocks:** A dedicated `.skip-link` is mounted at the top of the DOM. It remains visually hidden but drops into view upon the first `Tab` keystroke, allowing keyboard users to bypass the sticky navigation.

## Part C: Verification and Testing Audit

### 1. Automated Audits (Reproducible)
* **Vitest / RTL:** All component renders and user event interactions pass.
* **axe-core (jest-axe):** 0 violations found across all wireframes and all React views.
* **Contrast Ratios:** Validated manually and via automated tools. The primary brand color `var(--forest)` on `var(--white)` yields a 10.8:1 ratio, safely exceeding the WCAG AA 4.5:1 requirement.

### 2. Lighthouse Production Audits
*Tested on production build (`npm run build && npm run preview`) via Headless Chromium.*

| Route | Accessibility Score | Audit Artifact |
| :--- | :--- | :--- |
| `/` (Home) | 100 / 100 | `lighthouse/home.json` |
| `/services` | 100 / 100 | `lighthouse/services.json` |
| `/booking` | 100 / 100 | `lighthouse/booking.json` |

### 3. Manual NVDA & Keyboard Protocol
Manual testing was conducted keyboard-only with NVDA to simulate screen-reader workflows:
* **Landmark Navigation:** Pressing `D` cycles logically through `banner`, `main`, and `contentinfo` (footer).
* **Bypass Blocks:** Initial `Tab` focuses "Skip to main content". `Enter` successfully routes focus to the `<main>` tag.
* **Form Validation:** Submitting an empty form successfully intercepts the submission, moves focus to the first invalid input, and explicitly reads the error message.
* **Tab Sequence:** No keyboard traps exist. Focus sequence follows a strict, logical left-to-right, top-to-bottom visual hierarchy across all views.

---

