# Accessibility Test Log — Marlowe Clinic

## Scope & Environment

- **Application:** Marlowe Clinic React Portal (`marlowe-clinic`)
- **Live URL:** [https://Ntando-Mo.github.io/marlowe-clinic/](https://Ntando-Mo.github.io/marlowe-clinic/)
- **Views Reviewed:** Home (`/`), Clinic Services (`/services`), Appointment Booking (`/booking`)
- **Assistive & Audit Tools:** Browser DevTools Lighthouse, axe DevTools, keyboard navigation (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`), and screen reader spot checks

## Referenced Audit Artifacts

- **Lighthouse Report:** [./audits/lighthouse-report.html](./audits/lighthouse-report.html)
- **axe Audit Summary:** [./audits/axe-audit-summary.md](./audits/axe-audit-summary.md)

## Findings & Remediation Log

| ID | Area / View | Issue Identified | Fix / Implemented Behaviour | Status |
| :--- | :--- | :--- | :--- | :--- |
| A11Y-01 | `HomePage` ("Seamless Access") | Heading level skipped (`<h2>` followed by `<h4>` in timeline steps). | Updated timeline step headings to `<h3>` to maintain sequential heading hierarchy. | Addressed |
| A11Y-02 | `ServicesPage` filter controls | Changing category or triage filters moved focus to a heading, pulling keyboard users away from the active control. | Kept focus on the selected filter control and announced updated result counts via `LiveRegion` (`aria-live="polite"`). | Addressed |
| A11Y-03 | Form controls (`global.css`) | Focus styling relied on a faint shadow rather than a distinct high-contrast outline. | Added a `3px solid var(--forest, #14534B)` outline with `2px` offset on `:focus-visible` for interactive and form elements. | Addressed |
| A11Y-04 | Route navigation (`App.jsx`, `useFocusOnViewChange.js`) | Navigating between routes in the SPA needed explicit focus handling to `#main-content`. | Added route-change focus management targeting `#main-content` (`tabIndex="-1"`) after initial load. | Addressed |

## Verification Notes

- **Service Filtering & Live Announcements:** Filtering updates results synchronously in React state and updates the `LiveRegion` status message without shifting keyboard focus.
- **Form Labelling & Validation:** Booking form fields pair with explicit `<label>` elements, helper text, error messages, and live status feedback.
- **Remaining Manual Checks:** Continue verifying full screen-reader announcements and keyboard tab order across all routes after each build and commit.