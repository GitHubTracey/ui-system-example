# Golden Examples

These examples represent the preferred patterns for:

- Layout composition (`Page.Header / Page.Content / Page.Footer`)
- Tables (selection, actions, sticky headers)
- Disabled actions with tooltips (Radix tooltip + disabled button wrapper)
- Dialog forms (Radix dialog + focus-safe triggers + form primitives)
- Select patterns (grouped options, wheelchair indicator)

When generating new UI code, follow these examples as the source of truth.

### Import conventions

- UI primitives are imported exclusively from `ui/components`
- Higher-level or grouped components (Dialog, Form) may expose their own entry points
- App code should not deep-import component internals
