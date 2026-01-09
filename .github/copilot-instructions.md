# Copilot Instructions — UI & Design System

## Purpose

These instructions define how GitHub Copilot should generate UI code in this repository.
They are **non-negotiable defaults** and must be followed for all UI-related output.

Copilot must treat the documents in `.ai/`—especially `.ai/ui-guidelines.md`—as the
**canonical source of truth** for UI structure, styling, and accessibility.

---

## Source of Truth (Required Reading)

When generating, editing, or refactoring UI code, Copilot MUST:

1. **Consult `.ai/ui-guidelines.md`**
   - This document defines layout primitives, spacing rules, tokens, accessibility standards,
     and component usage.
   - Do not invent new patterns when a guideline already exists.

2. **Follow examples in `.ai/`**
   - Files in `.ai/` represent approved patterns and reference implementations.
   - Prefer copying structure from these examples over creating novel approaches.

If there is a conflict between generated output and `.ai/ui-guidelines.md`,
**the guidelines always win**.

---

## Layout & Structure Rules

- Use existing layout primitives (e.g. `Page`, `Page.Header`, `Page.Content`, `Page.Footer`)
- Do not inline layout logic that already exists in shared layout components
- Keep page components thin: orchestration + composition only
- Extract domain-specific UI into feature-local components (not `ui/components`)

---

## Design System Usage

- Use design tokens and semantic utilities (`bg-page`, `text-fg`, spacing tokens, etc.)
- Do not hardcode colors, spacing, or typography values unless explicitly allowed
- Prefer existing components over creating new ones

---

## Code Quality, Linting & Type Safety (Always Required)

All generated or modified UI code MUST meet the repository’s linting and type-safety standards.

Copilot MUST:

- Produce code that passes linting and type-checking with zero warnings or errors
- Avoid `any`; use precise types or `unknown` with proper narrowing
- Avoid unused imports, variables, and effects
- Use `import type` for type-only imports where applicable
- Respect restricted import boundaries and public barrel exports
- Avoid deep or disallowed imports that violate lint rules
- Avoid `eslint-disable` comments unless explicitly requested by the user
- Match existing formatting and hook usage patterns

---

## Accessibility (Always Required)

- Follow accessibility guidance in `.ai/ui-guidelines.md`
- Use correct semantic elements and ARIA roles
- Do not rely on hover-only affordances
- Disabled states must be explained (not tooltip-only)

---

## Component Placement Rules

- `ui/components`: reusable, domain-agnostic primitives only
- `ui/layouts`: structural layout components only
- Feature-specific components (e.g. Operations, Billing, Riders) must live with their feature
- Hooks that encode page/domain behavior belong near the feature, not in `ui/`

---

## Naming & Intent

- Names must reflect responsibility (e.g. `useOperationsModel`, not `useOperationsData`)
- Avoid ambiguous labels (e.g. “Add” that sometimes removes)
- Prefer clarity over brevity when meaning could be lost

---

## When Unsure

If Copilot is unsure how to proceed:

- Ask for clarification **instead of guessing**
- Or explicitly state assumptions before generating code

---

## Summary

- `.ai/ui-guidelines.md` is the authority
- `.ai/` examples are canonical
- Consistency > cleverness
- Accessibility and intent are first-class concerns
- When in doubt, ask questions
