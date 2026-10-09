# WCAG 2.1 AA Mapping Matrix

| Criterion | Target Interface Component | Technical Implementation | Verification Strategy |
|---|---|---|---|
| 1.1.1 Non-text Content | Informational icons and images | Meaningful images use descriptive `alt` text; decorative graphics use empty alt text or CSS. | Inspect DOM and test with a screen reader. |
| 1.3.1 Info and Relationships | Page layout, forms, headings | Semantic landmarks, headings, lists, labels, fieldsets and associated descriptions communicate structure without relying on visual styling. | Inspect DOM landmarks and headings; navigate with NVDA/VoiceOver. |
| 1.4.3 Contrast (Minimum) | Body text, headings, controls | Colour choices are selected to meet the required AA contrast thresholds. Contrast calculations are documented in `wireframes/main.css`. | Run a contrast checker and Lighthouse/axe audit. |
| 2.1.1 Keyboard | Navigation, filters, form controls | Native links, buttons and form controls are keyboard reachable and operable; no interaction requires a mouse. | Complete the entire primary flow using Tab, Shift+Tab, Enter and Space. |
| 2.4.3 Focus Order | Global navigation and booking flow | DOM order follows the visual/content order and interactive elements appear in a logical sequence. | Record a manual keyboard tab sequence. |
| 2.4.7 Focus Visible | Links, buttons, inputs | `:focus-visible` provides a high-visibility outline with sufficient offset. | Navigate using keyboard and visually confirm every focused control. |
| 3.3.1 Error Identification | Appointment form | Validation errors identify the field and provide specific corrective text. | Submit incomplete/invalid form data and verify error presentation. |
| 3.3.2 Labels or Instructions | Appointment form | Every field has an explicit `<label>` and relevant helper text through `aria-describedby`. | Inspect accessible names/descriptions and test with a screen reader. |
| 4.1.2 Name, Role, Value | Stateful filter controls | Native buttons expose `aria-pressed`; the filter trigger exposes `aria-expanded`. | Inspect accessibility tree and test state changes with a screen reader. |
| 4.1.3 Status Messages | Validation and booking status | Dynamic feedback is exposed through an `aria-live="polite"` region without requiring focus movement. | Trigger validation and successful booking with a screen reader. |

## Contrast Notes

The wireframe CSS documents the selected foreground/background combinations and their calculated contrast ratios. These values should be independently rechecked with a contrast tool before submission.
