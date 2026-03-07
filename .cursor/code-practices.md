# Code practices & skills

Additional practices for consistency, safety, and maintainability. Use these when implementing features or reviewing code.

---

## Error handling

- **User-facing errors:** Show a clear message in the UI (e.g. toast or inline). Don’t leave failed states silent.
- **API / async:** Handle errors in async code (try/catch or `.catch`). For fetch, check `response.ok` or throw and catch a single place (e.g. service layer or boundary).
- **Logging:** In development, log errors with enough context (e.g. `console.error('Fetch failed', { url, status, error })`). Avoid logging sensitive data.
- **Error boundaries:** Use a React Error Boundary for the app or major sections so one component failure doesn’t blank the whole screen. Show a fallback UI and optionally a “retry” action.

---

## Environment & config

- **Naming:** Client-side env vars must start with `VITE_`. Use UPPER_SNAKE_CASE (e.g. `VITE_API_URL`, `VITE_APP_NAME`).
- **Defaults:** Provide safe defaults in code when possible (e.g. `import.meta.env.VITE_API_URL ?? '/api'`). Document required vars in `.env.example` and README.
- **Secrets:** Never commit secrets or put them in `VITE_*` vars. Use backend or build-time injection for keys.

---

## Performance

- **Lazy loading:** Use `React.lazy` and `Suspense` for heavy or route-level components so the initial bundle stays small.
- **Memoization:** Use `useMemo` / `useCallback` only when there’s a measured need (e.g. expensive computation, or dependency passed to a memoized child). Don’t wrap everything “just in case.”
- **Lists:** For long lists, consider virtualization (e.g. `react-window` or similar) so only visible items are rendered.
- **Images:** Prefer explicit dimensions or aspect-ratio to avoid layout shift. Use appropriate formats (e.g. WebP) and sizes when possible.

---

## Security

- **XSS:** Don’t use `dangerouslySetInnerHTML` unless necessary; when used, sanitize or trust only known safe content.
- **Links:** Use `rel="noopener noreferrer"` for `target="_blank"` links.
- **Forms:** Validate on client for UX; always validate and sanitize on the server. Don’t rely on client-only checks for security.

---

## When to add tests

- **New utilities / pure functions:** Add unit tests (Vitest) for edge cases and main behavior.
- **Custom hooks:** Add tests for the hook’s behavior (e.g. with `@testing-library/react-hooks` or by rendering a small test component).
- **Critical UI flows:** Add component or integration tests for signup, checkout, or other high-impact paths.
- **Bug fixes:** Add a test that would have caught the bug so it doesn’t regress.

---

## When to split components

- **Reuse:** Same UI or logic used in more than one place → extract to a shared component or hook.
- **Size:** A single component file > ~200–300 lines or many responsibilities → split into smaller components or hooks.
- **Clarity:** A section of JSX is hard to read or has a clear name (e.g. “SearchFilters”) → extract and name it.
- **Testing:** Easier to test a small component or hook in isolation → extract.

Don’t split every tiny piece; balance reuse and readability.

---

## Imports

- **Order:** Group in a consistent order, e.g.: (1) React / libs, (2) internal (components, hooks, utils), (3) types, (4) assets/styles. Use a blank line between groups. ESLint/Prettier can enforce this if configured.
- **Path aliases:** Prefer `@/components/...` over `../../components/...` once aliases are set up.
- **Barrel files:** Use `index.ts` in a folder to re-export public API; avoid deep imports from inside the folder (e.g. `features/auth/components/Form` → import from `features/auth`).

---

## Git & commits

- **Working state:** Code should pass `npm run lint`, `npm run format:check`, and `npm run build` before commit. Run these locally or in pre-commit/CI.
- **Commit messages:** Prefer clear, present-tense messages (e.g. “Add user profile form”, “Fix login redirect”). Reference tickets if the project uses them.

These practices complement the main project rules and library rules for better, consistent, and safer code.
