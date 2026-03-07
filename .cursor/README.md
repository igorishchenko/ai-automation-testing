# Cursor / AI context for this project

This folder holds rules and reference docs so AI (and humans) generate code that fits the repo.

| File | Purpose |
|------|--------|
| **ai-rules.md** | Project rules: tech stack, coding standards, testing, accessibility, and how AI should use the repo. |
| **architecture.md** | React app structure: folder layout, separation of concerns, feature-based organization, naming. |
| **examples.md** | Example implementations: components, hooks, compound components, forms, services. |
| **libs-rules.md** | Conventions for Vite, Tailwind, TypeScript, React, ESLint, and Prettier. |
| **code-practices.md** | Error handling, env vars, performance, security, when to test, when to split components, imports, git. |

**When writing or editing code:**

1. Follow **ai-rules.md** (TypeScript, functional components, Tailwind, Vitest, a11y, lint).
2. Match the structure in **architecture.md** (where to put components, hooks, features, services).
3. Reuse patterns from **examples.md** (props typing, custom hooks, composition, accessibility).
4. Apply **libs-rules.md** for Vite, Tailwind, TypeScript, React, and lint/format.
5. Use **code-practices.md** for errors, env, performance, security, testing, and splitting components.

Run `npm run lint` and `npm run format:check` (and `npm run build`) to keep the project consistent.
