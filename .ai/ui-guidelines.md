# UI Guidelines

This document outlines the guiding principles, patterns, and conventions used in this UI system.  
The goal is to provide a **consistent, accessible, and scalable foundation** for building interfaces that are easy to use and easy to extend.

---

## 1. Design Principles

### 1.1 Clarity over cleverness

- UI should communicate intent immediately.
- Prefer explicit labels and predictable patterns over compact or novel interactions.

### 1.2 Progressive disclosure

- Show only what is needed at the moment.
- Advanced or destructive actions should be visually de-emphasized or gated.

### 1.3 Accessibility by default

- Keyboard navigation, focus management, and screen reader support are first-class concerns.
- Visual affordances must not rely on color alone.

### 1.4 Consistency enables speed

- Reusable components and tokens reduce cognitive load for both users and developers.
- Similar interactions should behave the same everywhere.

---

## 2. Theming & Color System

### 2.1 Theme model

The application supports multiple themes (`light`, `dark`, `purplegold`) using CSS variables applied at the document root:

```css
:root[data-theme="light"] { … }
:root[data-theme="dark"] { … }
:root[data-theme="purplegold"] { … }
```

Themes are initialized at app startup and persisted in localStorage.

### 2.2 Semantic color tokens

Colors are defined semantically rather than by raw values:

--color-bg — page background

--color-surface — headers, footers, panels

--color-surface-muted — subtle row hovers, muted surfaces

--color-fg — primary text

--color-fg-muted — secondary or supporting text

--color-border — dividers and outlines

Status colors are also semantic:

positive

warning

neutral

negative

This allows themes to change appearance without changing component code.

## 3. Layout Patterns

### 3.1 Page layout

All pages follow a consistent structure:

<Page>
  <Page.Header />
  <Page.Content />
  <Page.Footer />
</Page>

Header and footer share the same surface background.

Content uses the page background token.

### 3.2 Action alignment

Primary actions are right-aligned.

Secondary or contextual actions are grouped together.

Tables reserve a consistent action column width to prevent layout shift.

## 4. Components

### 4.1 Buttons

Buttons communicate both importance and risk.

Variants:

primary — main call to action

secondary — supporting actions

ghost / link — low-emphasis actions

destructive — irreversible or risky actions

Guidelines:

Disabled buttons are non-focusable.

If an action is unavailable, provide an explanatory tooltip where appropriate.

### 4.2 Tables

Tables are optimized for clarity and scannability.

Rows can be highlighted when contextually relevant (e.g. selected rider).

Sticky headers are supported for large datasets.

Status and actions are visually separated from core data.

### 4.3 Status indicators

Status is communicated using both color and text.

Examples:

On-time

Delayed (10 min)

Cancelled

Complete

Status colors follow the semantic status tokens and adapt per theme.

### 4.4 Tooltips

Tooltips are used to:

Explain why an action is disabled

Provide additional context without cluttering the UI

Guidelines:

Tooltips should not repeat visible labels.

Tooltip colors are theme-aware and designed for sufficient contrast.

Disabled controls are wrapped to allow hover/focus tooltips.

### 4.5 Forms

Form components are built from composable primitives:

TextField

CheckboxField

RadioGroupField

Guidelines:

Labels are always visible.

Required fields are clearly indicated.

Dialog forms manage focus correctly and return focus to the trigger on close.

## 5. Accessibility

### 5.1 Keyboard support

All interactive elements are reachable via keyboard.

Focus is visibly styled and never removed without replacement.

Dialogs trap focus while open and restore focus on close.

### 5.2 Screen readers

Icons are paired with text or aria-labels.

Decorative icons are hidden from assistive tech.

Status changes are reflected in text, not just color.

## 6. State & Feedback

### 6.1 Immediate feedback

Actions provide immediate visual confirmation.

Disabled states are clearly communicated.

### 6.2 Empty and loading states

Loading states are explicit.

Empty states explain what to do next, not just that something is empty.

## 7. Extensibility Guidelines

When adding new components:

Prefer extending existing primitives.

Introduce new tokens only when semantics differ.

Keep component APIs small and intentional.

Avoid embedding business logic inside UI primitives.

## 8. Philosophy

This system prioritizes:

Thoughtful defaults

Predictable behavior

Accessibility without compromise

The intent is not to be flashy, but to enable teams to ship confidently, quickly, and consistently.
