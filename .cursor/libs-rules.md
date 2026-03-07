# Library & tool rules

Conventions for the main libs and tools in this project. Follow these when writing or suggesting code.

---

## Vite

- **Env variables:** Use `import.meta.env.VITE_*` for client-exposed config. Never expose secrets; use server-side env for API keys. Document public env vars in a root `.env.example` (e.g. `VITE_API_URL=`).
- **Static assets:** Put images/fonts in `src/assets/` and import them (so they get hashed and optimized). Use `public/` only for files that must keep a fixed path (e.g. favicon, robots.txt).
- **Imports:** Prefer explicit extensions in TypeScript only where required (e.g. for Vite resolution). Use path aliases once configured (`@/` or `~/*`) instead of deep `../`.
- **Build:** The app uses `tsc -b` then `vite build`. Don’t skip typecheck in CI; keep `npm run build` as the single production build command.

---

## Tailwind CSS

- **Utility-first:** Use Tailwind classes in JSX. Avoid inline styles and extra CSS files unless it’s base/theme or a repeated pattern.
- **Repeated patterns:** Use `@apply` in a shared CSS file or a small set of utility classes in a constant; don’t duplicate long class strings in many components.
- **Content paths:** New files that use Tailwind must live under paths covered in `tailwind.config.js` `content` (e.g. `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`). Don’t add Tailwind in files outside these paths.
- **Arbitrary values:** Use `w-[137px]` or `text-[#fff]` only when no theme value fits. Prefer theme tokens (e.g. `text-slate-700`) and extend the theme in `tailwind.config.js` if a value is reused.
- **Responsive / dark:** Use responsive prefixes (`sm:`, `md:`) and `dark:` when needed. Prefer mobile-first ordering of classes.

---

## TypeScript

- **Strict mode:** Keep `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` enabled. Don’t disable them in `tsconfig.json` without a documented reason.
- **No `any`:** Prefer `unknown` and type guards, or proper types/interfaces. If `any` is unavoidable, add a short `// eslint-disable-next-line` and comment why.
- **Types for props:** Always type component props (interface or type). Prefer `interface` for object shapes that may be extended.
- **Third-party code:** Use `@types/*` for untyped packages. If types are missing, add a minimal `*.d.ts` in `src/` or `types/` and avoid `declare module 'x' { export default any }` without real types.
- **Exports:** Prefer named exports for components and utilities; use default export only for pages or single-component files if the project convention prefers it.

---

## React

- **Keys:** Use stable, unique IDs (e.g. `item.id`) for list keys. Index only when the list is static and never reordered.
- **Refs:** Use `useRef` for DOM refs and for mutable values that don’t need to trigger re-renders. Type refs properly (`useRef<HTMLInputElement>(null)`).
- **Effect cleanup:** If an effect subscribes to something (events, timers, fetch), return a cleanup function. Cancel aborts or ignore stale results in async effects.
- **Children:** Type `children` as `React.ReactNode` unless you need a more specific type. Use `ReactNode` from `react`.
- **Event handlers:** Type with `React.*EventHandler` or use inferred types from JSX. Don’t use `any` for event params.

---

## ESLint & Prettier

- **No disabling without reason:** Don’t add `eslint-disable` or `prettier-ignore` without a one-line comment explaining why. Prefer fixing the issue or adjusting the rule in config.
- **Config:** ESLint uses flat config (`eslint.config.js`). Prettier is the source of truth for formatting; ESLint runs with `eslint-config-prettier` so formatting rules don’t conflict.
- **Scope:** Lint and format the whole repo (or `src/`); keep scripts as in package.json: `lint`, `lint:fix`, `format`, `format:check`. All must pass before merge.

These rules apply whenever you add or change code that touches the corresponding lib.
