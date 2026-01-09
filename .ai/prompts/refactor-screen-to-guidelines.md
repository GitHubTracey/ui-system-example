# Prompt: Refactor a Screen to Conform to UI Guidelines (Tool-Agnostic)

## Purpose

Refactor an existing screen/page to conform to this repository’s UI guidelines and architectural conventions, without changing behavior.

## Canonical References (MUST FOLLOW)

- `.ai/ui-guidelines.md` is the source of truth for layout, tokens, components, and accessibility.
- Use existing `.ai/` examples as canonical patterns.

## Inputs

- The current screen file content (paste it)
- Any related components/hooks referenced by the screen (paste if needed)
- Target behavior to preserve (brief bullets)

## Constraints

- Preserve runtime behavior and UI output unless explicitly required to change.
- Reduce complexity by splitting responsibilities:
  - orchestration/data loading
  - derived state/selectors
  - UI composition
  - domain-specific UI components
- Prefer feature co-location for domain components.
- Replace hardcoded styling with tokens/utilities per guidelines.
- Improve accessibility where clearly incorrect (semantics, labels, focus, keyboard).
- Keep TypeScript strict-friendly; avoid `any`.

## Refactor Goals

- Make the page read like a storyboard: `Page → Header → Content → Footer` with clear subcomponents.
- Move non-trivial derived state into a `use*Model` hook (if appropriate).
- Extract cohesive UI regions into feature-local components (Toolbar/Table/etc).
- Ensure consistent empty/loading/error states.

## Output Format (REQUIRED)

1. Proposed file tree changes (created/modified/moved).
2. Full contents for each file that changes (complete files, not diffs).
3. A short migration checklist (what to verify, potential regressions).

## Task

Refactor the provided screen to match `.ai/ui-guidelines.md` and output in the required format.
