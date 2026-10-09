# Assistive Technology User Persona

## Primary Persona: Thandi Mokoena

**Age:** 42  
**Context:** Community healthcare clinic user  
**Primary task:** Find an appropriate clinic service and request an appointment without assistance.

## Technical Configuration

- **Device:** Windows laptop
- **Browser:** Chrome
- **Screen reader:** NVDA
- **Input:** Keyboard only
- **Display:** Standard laptop display at 100% zoom
- **Connection:** Typical mobile/home broadband connection

## Assistive Technology and Input Modality

Thandi relies on NVDA to read page content, form labels, headings, landmarks, and status messages. She uses the keyboard rather than a mouse, moving through interactive controls with Tab and Shift+Tab and activating controls with Enter or Space.

## Pain Points With Conventional Web Design

- Buttons that do not expose their current state.
- Form fields without explicit labels.
- Error messages that appear visually but are not associated with the invalid field.
- Interfaces that move focus unexpectedly.
- Small or low-contrast text.
- Custom controls that cannot be operated with a keyboard.
- Search/filter results changing without an announcement.
- Long pages without meaningful landmarks and headings.

## Primary Goals

1. Identify the correct clinic service quickly.
2. Understand which practitioner and appointment times are available.
3. Complete the appointment request using only the keyboard.
4. Receive clear feedback when information is missing or invalid.
5. Know when an appointment request has been submitted successfully.

## Accessibility Requirements

The interface should provide semantic landmarks, a logical heading structure, visible keyboard focus, explicit form labels, descriptive helper/error text, stateful ARIA attributes where required, and polite announcements for important dynamic changes. The user should never be required to use a mouse to complete the primary journey.
