# Component & Pattern Examples

Reference implementations for components, hooks, and composition in this project.

---

## 1. Functional component (with TypeScript)

```tsx
// components/Button.tsx
import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base = 'rounded px-4 py-2 font-medium transition-colors'
  const variants = {
    primary: 'bg-slate-800 text-white hover:bg-slate-700',
    secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300',
  }
  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
```

---

## 2. Custom hook (reusable logic)

```tsx
// hooks/useLocalStorage.ts
import { useState, useCallback } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [stored, setStored] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: T) => {
      setStored(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    },
    [key]
  )

  return [stored, setValue]
}
```

---

## 3. Presentational vs data (container)

**Presentational:** only props and UI.

```tsx
// components/UserCard.tsx
type UserCardProps = {
  name: string
  email: string
  onEdit?: () => void
}

export function UserCard({ name, email, onEdit }: UserCardProps) {
  return (
    <article className="rounded-lg border p-4">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-slate-600">{email}</p>
      {onEdit && (
        <button type="button" onClick={onEdit} aria-label={`Edit ${name}`}>
          Edit
        </button>
      )}
    </article>
  )
}
```

**Container (page/feature):** fetches data and passes to presentational component.

```tsx
// pages/UserPage.tsx
import { useState, useEffect } from 'react'
import { UserCard } from '@/components/UserCard'
import { fetchUser } from '@/services/users'

export function UserPage({ id }: { id: string }) {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  useEffect(() => {
    fetchUser(id).then(setUser)
  }, [id])
  if (!user) return <div>Loading…</div>
  return <UserCard name={user.name} email={user.email} />
}
```

---

## 4. Compound components (shared state via context)

```tsx
// components/Tabs.tsx
import { createContext, useContext, useState, type ReactNode } from 'react'

type TabsContextValue = { active: string; setActive: (id: string) => void }
const TabsContext = createContext<TabsContextValue | null>(null)

function useTabs() {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error('Tabs components must be used within Tabs')
  return ctx
}

type TabsProps = { defaultValue: string; children: ReactNode }
export function Tabs({ defaultValue, children }: TabsProps) {
  const [active, setActive] = useState(defaultValue)
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  )
}

type TabListProps = { children: ReactNode }
export function TabList({ children }: TabListProps) {
  return <div role="tablist" className="flex gap-2">{children}</div>
}

type TabProps = { id: string; children: ReactNode }
export function Tab({ id, children }: TabProps) {
  const { active, setActive } = useTabs()
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active === id}
      onClick={() => setActive(id)}
      className={active === id ? 'font-bold' : ''}
    >
      {children}
    </button>
  )
}

type TabPanelProps = { id: string; children: ReactNode }
export function TabPanel({ id, children }: TabPanelProps) {
  const { active } = useTabs()
  if (active !== id) return null
  return <div role="tabpanel">{children}</div>
}
```

---

## 5. List with keys and accessibility

```tsx
// Prefer stable IDs for keys; fallback to index only when list is static and not reordered
<ul role="list" aria-label="User list">
  {users.map((user) => (
    <li key={user.id}>
      <UserCard name={user.name} email={user.email} />
    </li>
  ))}
</ul>
```

---

## 6. Form with controlled inputs and labels

```tsx
<form onSubmit={(e) => { e.preventDefault(); onSubmit(data) }}>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    value={data.email}
    onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
    autoComplete="email"
    aria-required
  />
  <button type="submit" aria-label="Submit form">Submit</button>
</form>
```

---

## 7. Service layer (API)

```ts
// services/api.ts
const BASE = import.meta.env.VITE_API_URL ?? '/api'

export async function fetchUser(id: string): Promise<{ id: string; name: string; email: string }> {
  const res = await fetch(`${BASE}/users/${id}`)
  if (!res.ok) throw new Error('Failed to fetch user')
  return res.json()
}
```

Use these patterns as the standard for new components and hooks in this repo.
