# Prompt: Accessibility Audit + Fixes (Tool-Agnostic)

## Purpose

Audit a screen/component for accessibility issues and propose targeted fixes that align with the repository’s guidelines and components.

## Canonical References (MUST FOLLOW)

- `.ai/ui-guidelines.md` accessibility requirements and component standards.

## Inputs

- The screen/component code (paste it)
- Any related UI primitives used (if custom components hide semantics)

## Audit Scope

Check for:

- Semantic structure (headings, landmarks, lists, tables)
- Keyboard navigation:
  - tab order
  - focus visibility
  - focus traps in dialogs
  - actionable elements reachable/operable via keyboard
- Labels and names:
  - button labels match behavior
  - inputs have labels
  - icon-only buttons have accessible names
- State and announcements:
  - loading/empty/error states
  - aria-live where appropriate (if guidelines allow)
- Disabled states:
  - are discoverable
  - have explanations not solely via hover tooltip
- Tables:
  - headers and associations
  - row actions discoverable
- Color/contrast:
  - use tokens; avoid low-contrast muted text for critical info

## Constraints

- Prefer fixing issues using existing design system components and patterns.
- Avoid introducing new dependencies unless absolutely necessary.
- Keep changes minimal and behavior-preserving unless behavior is inaccessible.

## Output Format (REQUIRED)

1. Findings list with severity:
   - Critical / Major / Minor
   - For each: what is wrong, why it matters, and where it occurs
2. Proposed fixes:
   - precise code changes (full updated file contents)
3. Verification checklist:
   - keyboard steps to test
   - screen reader quick checks (generic, no vendor-specific claims)

## Task

Perform the audit and provide fixes following `.ai/ui-guidelines.md`, in the required format.
