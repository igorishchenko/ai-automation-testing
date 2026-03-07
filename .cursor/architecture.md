# React App Architecture

Best-practice structure and conventions for this React + Vite + TypeScript app.

## Folder structure

Use a clear, scalable layout under `src/`:

```
src/
├── assets/          # Images, fonts, other static files
├── components/      # Shared, reusable UI components (no feature-specific logic)
├── features/        # Feature-specific modules (components, hooks, types)
├── hooks/           # Shared custom hooks
├── layouts/         # Layout components (e.g. Header, Footer, PageLayout)
├── pages/           # Route-level / page components
├── services/        # API client, external integrations
├── store/           # Global state (e.g. Context, Zustand) if needed
├── types/           # Shared TypeScript types and interfaces
├── utils/           # Pure helpers and utilities
├── App.tsx
├── main.tsx
└── index.css
```

## Principles

### 1. Separation of concerns

- **UI** → `components/`, `layouts/`, `pages/`
- **Data / API** → `services/`
- **State** → `store/` or feature-local state
- **Types** → `types/` or colocated in features

### 2. Feature-based organization

For larger domains, keep a feature self-contained:

```
src/features/<feature-name>/
├── components/      # Feature-specific components
├── hooks/
├── types.ts
├── api.ts           # Feature API calls (or use services/)
└── index.ts         # Public exports
```

Only import from the feature’s public API (e.g. `index.ts`), not deep paths.

### 3. Shared vs feature code

- **`components/`** – Generic, reusable building blocks (Button, Card, Input). No feature-specific logic.
- **`features/<name>/components/`** – Components that belong to one feature and may use its hooks/types.

### 4. Path aliases (recommended)

Configure `@/` (or `~/*`) in `tsconfig.json` and Vite so imports stay clean:

```ts
// Prefer
import { Button } from '@/components/Button'
import { useAuth } from '@/hooks/useAuth'

// Over deep relative paths
import { Button } from '../../../components/Button'
```

### 5. Naming

- **Components:** PascalCase, e.g. `UserProfile.tsx`, `DataTable.tsx`
- **Hooks:** `use` prefix, camelCase, e.g. `useAuth.ts`, `useLocalStorage.ts`
- **Utils/types:** camelCase for functions, PascalCase for types
- **Files:** Match export name (e.g. `Button.tsx` exports `Button`)

### 6. Colocation

Keep related files close: component + its tests, a small hook used by one feature next to that feature. Put only shared code in top-level `components/`, `hooks/`, `types/`.

### 7. Avoid

- One giant `components/` folder with dozens of unrelated components
- Deep nesting (prefer flat or one level of grouping)
- Mixing API calls or global state inside presentational components; use hooks or services instead

This layout keeps the app testable, maintainable, and easy to navigate as it grows.
