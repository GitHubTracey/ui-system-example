# AI Prompts — Usage Guide

This folder contains **canonical, tool-agnostic prompts** for generating and refactoring UI code in this repository.

These prompts are designed to work consistently across:

- GitHub Copilot (VS Code)
- Cursor
- ChatGPT / Claude
- Any chat-based LLM tool

They intentionally avoid tool-specific syntax and rely on **clear structure + repository context** instead.

---

## Source of Truth

All prompts in this folder MUST be used together with:

- `.ai/ui-guidelines.md` — **authoritative UI rules**
- Examples in `.ai/` — **approved patterns**

If generated output conflicts with the guidelines, the guidelines win.

---

## Prompt Philosophy

These prompts are designed to:

- Enforce consistent layout and design-system usage
- Reduce “invented” patterns
- Encourage senior-level component boundaries
- Produce reviewable, production-ready code

They prioritize:

- clarity over cleverness
- accessibility by default
- feature co-location
- thin pages + extracted domain UI

---

## Available Prompts

### `generate-screen.md`

Use when:

- creating a new page/screen
- scaffolding a new feature view
- exploring layout + structure before implementation

Outputs:

- file tree
- full file contents
- verification checklist

---

### `refactor-screen-to-guidelines.md`

Use when:

- an existing screen is inconsistent or messy
- you want to align code with the design system
- preparing code for review or handoff

Focus:

- behavior-preserving refactors
- layout + token correctness
- accessibility fixes where obvious

---

### `extract-feature-components.md`

Use when:

- a page has grown too large
- you want to extract toolbars, tables, panels, etc.
- improving readability and ownership boundaries

Focus:

- feature-local components
- clean prop surfaces
- correct placement (not `ui/components`)

---

### `a11y-audit.md`

Use when:

- reviewing a screen for accessibility
- before shipping or demoing
- after introducing new interactions (toggles, dialogs, tables)

Outputs:

- issues by severity
- concrete fixes
- keyboard and screen-reader verification steps

---

## How to Use These Prompts (by Tool)

### GitHub Copilot (VS Code)

1. Open Copilot Chat
2. Paste the contents of the chosen prompt
3. Attach context using `#`:
   - `#ui-guidelines.md`
   - relevant files or `#codebase`
4. Fill in the “Inputs” section before submitting

Optional:

- Use `.github/prompts/*` wrappers if present

---

### Cursor

1. Open Composer / Chat
2. Paste the prompt from `.ai/prompts/`
3. Ensure Cursor rules reference `.ai/ui-guidelines.md`
4. Provide screen name, feature folder, and requirements

Cursor users should treat `.ai/` as canonical documentation.

---

### ChatGPT / Claude / Other Tools

1. Paste the prompt contents
2. Paste or upload:
   - `.ai/ui-guidelines.md`
   - any relevant example files
3. Fill in required inputs
4. Ask for output **strictly in the required format**

---

## Best Practices

- Always run **one prompt at a time**
- Prefer copying prompts verbatim (don’t paraphrase)
- Fill in all “Inputs Required” sections
- Review generated file trees before accepting changes
- Treat output as a **draft**, not gospel — apply judgment

---

## When to Add a New Prompt

Add a new prompt when:

- a workflow repeats more than twice
- reviewers keep giving the same feedback
- you want to encode a best practice once, not explain it repeatedly

Keep prompts:

- focused
- explicit
- short enough to reason about

---

## Summary

- `.ai/prompts/` = **portable AI workflows**
- `.ai/ui-guidelines.md` = **non-negotiable rules**
- Editors may differ; expectations do not
- Consistency beats novelty

If you’re unsure which prompt to use, start with:
**`generate-screen.md`** for new work,  
**`refactor-screen-to-guidelines.md`** for existing code.
