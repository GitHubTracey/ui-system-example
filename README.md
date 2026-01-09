## 🎯 Portfolio Intent

This repository is a **portfolio project** designed to demonstrate how a modern design system can be built and used **in conjunction with AI for generative workflows**.

The goal is not to showcase a single UI or feature, but to explore:

- how designers can be empowered to generate real, production-aligned screens
- how developers can retain ownership of architecture and system integrity
- how AI can accelerate iteration without bypassing review, accessibility, or intent

This project reflects my interest in **design systems, developer experience, and the craft of automation**—and how these disciplines can work together to reduce friction and improve time to market.

---

## 📦 What This Is / What This Is Not

### What this is

- A production-minded design system with real constraints
- A demonstration of AI-assisted screen generation within those constraints
- A reference for how designers and developers can collaborate through shared systems
- An exploration of how AI can act as a generator, collaborator, translator, and governor

### What this is not

- A finished SaaS product
- A replacement for designers or engineers
- A system where AI bypasses review or makes architectural decisions
- A free-form generator unconstrained by accessibility or design rules

This repository is intentionally scoped to highlight **systems thinking**, not surface-level polish.

---

## 🧭 Who This Is For

This project is relevant to multiple audiences:

- **Designers**
  - interested in generative workflows that connect directly to production
  - curious about reducing reliance on static mockups and handoff documents

- **Frontend engineers**
  - working on design systems, DevEx, or tooling
  - interested in safe, reviewable uses of AI in UI development

- **Hiring managers and reviewers**
  - evaluating system design, architectural thinking, and cross-disciplinary collaboration
  - looking for examples of thoughtful, forward-looking technical leadership

Each section of the repository is written with these audiences in mind.

---

## 🧠 Key Principles

This project is guided by a few core principles:

- **Automation is a craft**  
  It should remove friction without removing intent or judgment.

- **Design systems are contracts**  
  They exist to enable consistency, accessibility, and confidence at scale.

- **AI accelerates, it does not decide**  
  AI proposes; humans review, refine, and merge.

- **Accessibility is the default**  
  Not an afterthought or optional enhancement.

- **Fast iteration should still be safe**  
  Reversibility, review, and history are first-class concerns.

These principles shape both the tooling and the workflows demonstrated here.

---

## 🧭 How to Explore This Repo

Depending on what you’re most interested in:

- **To understand the design system itself**  
  Start with `.ai/ui-guidelines.md`

- **To see how AI is used to generate screens**  
  Read the **Generating Screens with AI** section below

- **To explore the long-term direction of this work**  
  Read **[The AI-Driven Design System Vision](.ai/VISION.md)**

The repository is meant to be explored, not just run.

## 🔮 Vision

This repository explores not just _what_ we build, but _where this design system is going_.

👉 Read **[The AI-Driven Design System Vision](.ai/VISION.md)**

# 🤖 Generating Screens with AI (VS Code Workflow)

This project includes a **standardized AI-assisted workflow** for generating UI screens that follow our design system, layout primitives, and accessibility rules.

These instructions are written for **designers and developers** using **VS Code with GitHub Copilot**.  
(The same prompts also work with Cursor and other AI tools.)

---

## 📁 Repository Context (Required Reading)

| Path                              | Purpose                                                                    |
| --------------------------------- | -------------------------------------------------------------------------- |
| `.ai/ui-guidelines.md`            | **Source of truth** for UI structure, tokens, spacing, and accessibility   |
| `.ai/prompts/`                    | Canonical, reusable AI prompts (screen generation, refactors, a11y audits) |
| `.github/copilot-instructions.md` | Enforces how Copilot must behave in this repository                        |

> **Important**  
> All AI-generated UI **must conform to `.ai/ui-guidelines.md`**.  
> If output conflicts with the guidelines, the guidelines win.

---

## ✅ One-Time Setup

1. Install **Visual Studio Code**
2. Install and enable:
   - **GitHub Copilot**
   - **GitHub Copilot Chat**
3. Sign in to GitHub when prompted

This setup is required only once.

---

## 🧩 Generate a New Screen (Step-by-Step)

Follow these steps exactly. They are designed to be repeatable and predictable.

---

### Step 1 — Open Copilot Chat

In VS Code, either:

- Click the **Copilot icon** in the left sidebar  
  **or**
- Open the Command Palette:
  - **macOS:** `Cmd + Shift + P`
  - **Windows/Linux:** `Ctrl + Shift + P`
  - Run **Copilot: Open Chat**

---

### Step 2 — Open the Screen Generation Prompt

In the file explorer, open: .ai/prompts/generate-screen.md

This file contains the approved prompt Copilot must follow.

---

### Step 3 — Copy the Entire Prompt

- Select **all content** in `generate-screen.md`
- Copy it to your clipboard

> ⚠️ Do **not** paraphrase or shorten the prompt.  
> The structure and wording are intentional.

---

### Step 4 — Paste the Prompt into Copilot Chat

- Paste the full prompt into Copilot Chat
- Scroll to the section titled: Screen Specification (FILL IN BEFORE RUNNING)

Fill in the fields using plain English. Example:

- **Screen name:** BillingPage
- **Feature folder:** `features/billing`
- **Header title:** Billing & Invoices
- **Content sections:** Invoice table, payment method panel
- **Data sources:** invoices, payment methods
- **States:** loading, empty, error
- **Interactions:** filter invoices, download invoice PDF

No code is required at this step.

---

### Step 5 — Attach Required Context (Critical)

In the Copilot Chat input field, type `#` and attach:

- `#ui-guidelines.md`
- Any relevant example files from `.ai/`
- _(Optional)_ `#codebase` if integrating with existing features

> ❗ This step is mandatory.  
> Without it, Copilot may ignore the design system.

---

### Step 6 — Run the Prompt

Press **Enter**.

Copilot will generate:

1. A proposed file tree
2. Full contents of each file
3. A checklist of what to verify locally

---

### Step 7 — Create the Files

1. Review the proposed file tree
2. Create the files in the suggested locations
3. Paste the generated code **as-is** into each file

Avoid cherry-picking lines unless you are confident in the changes.

---

## 🔁 Other Supported AI Tasks

Use the same workflow as above, starting from a different prompt file.

| Task                                         | Prompt File                                    |
| -------------------------------------------- | ---------------------------------------------- |
| Refactor a screen to match the design system | `.ai/prompts/refactor-screen-to-guidelines.md` |
| Extract toolbars, tables, or panels          | `.ai/prompts/extract-feature-components.md`    |
| Accessibility audit and fixes                | `.ai/prompts/a11y-audit.md`                    |

The steps remain identical:

1. Open prompt
2. Copy entire file
3. Paste into Copilot Chat
4. Attach `#ui-guidelines.md`
5. Fill inputs
6. Run

---

## 📏 Rules to Follow (Non-Negotiable)

### Always

- Attach `#ui-guidelines.md`
- Copy prompts verbatim
- Use design tokens (no hardcoded colors or spacing)
- Prefer feature-local components over `ui/components`
- Review generated code before committing

### Never

- Ask Copilot to “just generate a page”
- Invent new layout primitives
- Rely on hover-only interactions
- Rename components casually

---

## 🧠 Mental Model

- `.ai/ui-guidelines.md` → **The law**
- `.ai/prompts/` → **Repeatable workflows**
- Copilot → **A junior assistant**

The prompts tell Copilot _how_ to work.  
The guidelines tell it _what is allowed_.

---

## 🆘 If Something Looks Wrong

Do **not** fix the output line-by-line.

Instead:

- Rerun the prompt
- Attach more context
- Be more explicit in the “Screen Specification” section

This approach produces better results and keeps the system consistent.

## 🤝 A Note on AI Collaboration

Some parts of this repository — including documentation and workflow scaffolding — were developed with the assistance of AI tools such as ChatGPT.

This mirrors the philosophy demonstrated here: AI is used as a collaborator to accelerate iteration and improve clarity, while all final decisions, structure, and review remain human-driven.
