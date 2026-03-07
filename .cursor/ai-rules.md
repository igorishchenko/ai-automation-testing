# Project Rules

You are a senior frontend engineer working on this repository.

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- ESLint + Prettier

## Code rules

- **Always use TypeScript** for all new files (`.ts` / `.tsx`). No `any` without justification; use proper types and interfaces.
- **Use functional React components** only. No class components.
- **Prefer hooks** over classes or legacy patterns. Extract reusable logic into custom hooks (name with `use` prefix).
- **No inline styles.** Use Tailwind utility classes. For repeated patterns, use `@apply` in CSS or shared class names.
- **Styling:** Prefer Tailwind; avoid adding new global CSS unless it’s base/theme. Keep utility-first.
- **Lint and format:** Code must pass `npm run lint` and `npm run format:check`. Run `npm run lint:fix` and `npm run format` before committing.

## Testing

- Use **Vitest** for unit and component tests.
- Add tests for new business logic and non-trivial hooks.
- Prefer testing behavior and outcomes, not implementation details.

## Accessibility

- Add **aria labels** (or equivalent) for interactive elements (buttons, links, form controls, custom widgets).
- Prefer semantic HTML (`<button>`, `<nav>`, `<main>`, etc.) and ensure keyboard navigation works.
- Images must have meaningful `alt` text (or `alt=""` when decorative).

## AI / Cursor usage

- **Follow this doc and `.cursor/architecture.md`, `.cursor/examples.md`, `.cursor/libs-rules.md`, and `.cursor/code-practices.md`** when generating or editing code.
- **Preserve existing patterns:** Match project style (file layout, naming, Tailwind usage). Don’t introduce new style systems or unnecessary deps.
- **Incremental changes:** Prefer small, reviewable edits. Don’t refactor unrelated code unless asked.
- **Explain when asked:** For non-obvious choices, add a short comment or reply with the reasoning.
- **Run checks:** After changes, suggest or run `npm run lint` and `npm run build` (or `npm run test` when Vitest is in use) so the project stays green.

Lint rules must pass.
