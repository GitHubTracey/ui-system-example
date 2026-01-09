# Prompt: Extract Feature Components from a Page (Tool-Agnostic)

## Purpose

Extract one or more cohesive UI sections from a page into feature-local components, improving readability, reusability within the feature, and testability.

## Canonical References (MUST FOLLOW)

- `.ai/ui-guidelines.md` for:
  - tokens/utilities
  - layout patterns
  - accessibility requirements
  - folder boundaries (ui primitives vs layouts vs feature components)

## Inputs

- The current page component (paste it)
- Desired extractions (choose one or more):
  - Toolbar
  - Table/List
  - Footer content block
  - Dialog wrapper
  - Filters/search section
- Any constraints (e.g., “keep props minimal”, “avoid passing dispatch”)

## Extraction Rules

- Feature components belong in the feature folder, not `ui/components`.
- Prefer “smart hook + dumb components”:
  - A `use*Model` can own domain rules, derived state, and actions.
  - Components should mostly render and call callbacks.
- Minimize prop surface:
  - pass only what a component needs
  - prefer domain-level callbacks over passing `dispatch`
- Keep naming responsibility-accurate:
  - `*Toolbar`, `*Table`, `*List`, `*Panel`, `use*Model`

## Accessibility Requirements

- Ensure extracted components remain keyboard-usable.
- Maintain focus stability after actions (especially if you add toggles, dialogs, menus).
- Do not rely on hover-only affordances; provide labels.

## Output Format (REQUIRED)

1. Proposed new file structure.
2. Full contents of:
   - updated page file
   - each newly created component file
   - any updated exports/index files (if needed)
3. Notes: prop boundary decisions and why they were chosen.

## Task

Perform the extraction(s) described, preserving behavior, following `.ai/ui-guidelines.md`, and return in the required format.
