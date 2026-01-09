# Prompt: Generate a Screen (Tool-Agnostic)

## Purpose

Generate a new screen/page that conforms to this repository’s UI system, architecture, and accessibility standards.

## Canonical References (MUST FOLLOW)

- `.ai/ui-guidelines.md` is the source of truth for:
  - layout primitives, spacing, typography, tokens
  - component usage patterns
  - accessibility requirements
  - file organization conventions
- Use existing patterns from `.ai/` examples when available.

## Inputs Required (ask for missing only if necessary)

- Screen name (e.g., `OperationsPage`, `BillingPage`)
- Route or entrypoint location (if applicable)
- Data requirements:
  - static / mock / fetched
  - any domain types involved (e.g., `Rider`, `Route`)
- UI requirements:
  - header title
  - primary actions
  - empty/loading/error states
  - tables/forms/dialogs
- Target folder:
  - prefer feature co-location (e.g., `features/<feature>/...`) unless guidelines specify otherwise

## Constraints

- Use the existing layout primitives (e.g., `Page`, `Page.Header`, `Page.Content`, `Page.Footer`) if that is the established pattern.
- Use design tokens and semantic utilities (e.g., `bg-bg`, `text-fg`, `text-fg-muted`) rather than hardcoded colors.
- Do not introduce new UI primitives if existing ones exist.
- Keep the page component thin: orchestration + composition; extract cohesive UI into feature-local components.
- Accessibility is required: correct semantics, keyboard support, no hover-only requirements.
- Output MUST pass `pnpm lint` (or repository equivalent) with zero warnings/errors.
- Output MUST pass `pnpm typecheck` / `tsc -b` (or repository equivalent).
- Do not use `any` (respect `@typescript-eslint/no-explicit-any`).
- No unused imports/vars; no unused `useMemo`/`useEffect` dependencies.
- Prefer `type`-only imports where appropriate (`import type { ... } from ...`).
- Do not add `eslint-disable` comments unless explicitly requested; fix issues properly.
- Respect any restricted import rules (e.g. use barrels, avoid deep imports) per repo lint config.
- Match existing formatting conventions (Prettier) and component patterns from `.ai/`.

## Output Format (REQUIRED)

1. A proposed file tree showing all files created/modified.
2. The full contents of each new/modified file, in separate code blocks.
3. A short checklist of what to verify locally (build, lint, types, basic interactions).
   - `pnpm lint`
   - `pnpm typecheck` (or `tsc -b`)
   - `pnpm test` (if applicable)
   - manual smoke test steps (keyboard nav, focus, empty/loading/error states)

4) A “Lint-risk self-check” list confirming:
   - no `any`
   - no unused imports/vars
   - imports follow repo conventions (no restricted/deep imports)
   - code compiles under strict TS

## Screen Specification (FILL IN BEFORE RUNNING)

- Screen name:
- Feature folder:
- Header title:
- Header actions:
- Content sections:
- Footer (if any):
- Data sources:
- States: loading / empty / error:
- Interactions:
- Accessibility notes:

## Task

Using the specification above and following `.ai/ui-guidelines.md`, generate the screen implementation.

When choosing component boundaries:

- Extract a `*Toolbar` component if there is a dense control bar or filters.
- Extract a `*Table` or `*List` component if there is a complex list/table body.
- Extract a `use*Model` hook if the page has non-trivial derived state and actions.

Return the output strictly in the required format.
