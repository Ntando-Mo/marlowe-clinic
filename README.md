# Marlowe Clinic: Accessible Community Healthcare Portal

## Project Overview
Marlowe Clinic is a fully accessible Single Page Application (SPA) providing community healthcare access. Developed as Capstone 4, this portal allows users to browse medical services, filter by triage priority, and request appointments. The application is engineered to meet WCAG 2.1 AA compliance, ensuring seamless operability for users relying on assistive technologies, specifically tailored for keyboard-only navigation and NVDA screen reader compatibility.

## 1. Accessibility Trade-Off Analysis
**Client-Side Routing vs. Traditional Navigation:** 
Traditional multi-page applications trigger a full browser refresh, naturally resetting screen reader focus to the top of the new document. In our SPA, navigating between the Service Directory and the Booking Form dynamically updates the DOM without a hard refresh. The trade-off was accepting increased architectural complexity to engineer a custom `useFocusOnViewChange` hook. This overhead was necessary to ensure our primary persona (an NVDA screen reader user) is immediately informed of page changes without their focus being abandoned on a stale DOM node.

**Custom Stateful Toggle Controls vs. Native Form Elements:** 
For the triage filtering system, we evaluated using native `<select>` dropdowns versus custom stateful buttons. Native elements provide built-in screen reader support with zero JavaScript configuration but are rigid to style and have small hit areas. We opted to build custom toggle controls. This trade-off sacrificed the out-of-the-box reliability of native inputs in favor of a highly tailored, high-contrast interface that accommodates low-vision requirements while remaining fully operable via keyboard.

**Deferred "Polite" Form Validation vs. Real-Time Inline Feedback:** 
We evaluated implementing real-time validation versus deferred validation triggered upon form submission. Real-time validation offers sighted users immediate visual correction, but can overwhelm screen reader users with chaotic auditory feedback mid-typing. We chose deferred validation. This intentional friction ensures the live region only speaks when the user explicitly expects feedback, making the form significantly more navigable.

## 2. Assistive Tech State Architecture
Our React state management directly drives the DOM accessibility tree to ensure assistive technologies remain synchronized with the UI. 
* **Filter State:** React `useState` hooks control the triage categories. These state values are directly interpolated into the `aria-expanded` attributes on the accordion toggle and `aria-pressed` attributes on the filter chips, announcing real-time boolean changes to screen readers.
* **Form Validation:** We utilize controlled components where the validation state dynamically updates the `aria-invalid` attribute on inputs. Errors are rendered inside a dedicated `<LiveRegion>` component containing `aria-live="polite"`, prompting NVDA to read the error state immediately without interrupting the user's keystrokes.
* **Programmatic Focus:** Using the `useRef` hook, we capture references to the main `<h1>` heading and the first invalid form input. Upon route transitions or failed form submissions, React's `useEffect` explicitly calls `.focus()` on these refs to safely guide the user's focus.

## 3. Verification & Testing Audit

### Automated Testing
* **Tool Used:** Chrome Lighthouse (DevTools)
* **Pages Tested:** `/` (Service Directory) and `/booking` (Appointment Form)
* **Score Achieved:** 100% Accessibility
* **Notes:** All contrast ratios exceed WCAG AA 4.5:1 requirements. Dynamic `aria-label` attributes successfully implemented to provide unique programmatic names for identical "Book Now" links.

### Manual Screen Reader & Keyboard Audit
* **Testing Environment:** Windows 11, Google Chrome, NVDA 2024.1
* **Keyboard Results:** Zero keyboard traps detected. DOM tab sequence strictly matches the visual layout. The custom `:focus-visible` outline provides high-visibility tracking.
* **NVDA Results:** NVDA successfully parsed all semantic landmarks (`<header>`, `<main>`, `<aside>`, `<footer>`). Filter buttons correctly announced their `aria-pressed` state changes in real-time. Triggering a form validation error successfully fired the `aria-live` region, announcing the error immediately to the user.