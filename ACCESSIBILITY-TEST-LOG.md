# Accessibility Verification & Testing Audit

## 1. Automated Testing (Lighthouse)
* **Tool Used:** Chrome Lighthouse (DevTools)
* **Pages Tested:** `/` (Service Directory) and `/booking` (Appointment Form)
* **Score Achieved:** 100% Accessibility
* **Notes:** All contrast ratios exceed WCAG AA 4.5:1 requirements following CSS updates. Dynamic `aria-label` attributes successfully implemented to resolve identical link warnings on service cards.

## 2. Manual Keyboard Navigation Audit
* **Testing Environment:** Windows 11, Google Chrome
* **Methodology:** Full traversal using `Tab`, `Shift+Tab`, `Space`, and `Enter`.
* **Results:** 
  * Zero keyboard traps detected.
  * DOM tab sequence strictly matches the visual layout.
  * The custom `:focus-visible` outline provides high-visibility tracking across all interactive elements.
  * Programmatic focus correctly shifts to the first invalid input field when form submission fails.

## 3. Screen Reader Audit (NVDA)
* **Testing Environment:** NVDA 2024.1, Google Chrome
* **Results:**
  * **Landmarks & Headings:** NVDA successfully parsed the `<header>`, `<main>`, `<aside>`, and `<footer>` landmarks, allowing quick structural navigation via shortcut keys.
  * **Stateful Controls:** Triage filter buttons correctly announced their `aria-expanded` and `aria-pressed` state changes in real-time.
  * **Form Validation:** Explicit `<label>` and `aria-describedby` associations successfully read out helper text. Triggering a validation error successfully fired the `aria-live="polite"` region, announcing the error immediately to the user without moving their current focus.