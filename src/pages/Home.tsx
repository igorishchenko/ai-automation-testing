import { useCallback, useEffect, useMemo, useState } from 'react'

type Item = {
  id: string
  title: string
  description: string
}

const FAVORITES_STORAGE_KEY = 'favorites:itemIds'

const ITEMS: readonly Item[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    description: 'A quick overview of how to navigate the app.',
  },
  {
    id: 'profile-tips',
    title: 'Profile tips',
    description: 'Personalize your experience by updating your profile.',
  },
  {
    id: 'automation-basics',
    title: 'Automation basics',
    description: 'Learn the core concepts behind automation testing workflows.',
  },
  {
    id: 'best-practices',
    title: 'Best practices',
    description: 'A checklist of reliable patterns for day-to-day work.',
  },
] as const

function readFavoritesFromSession(): string[] {
  try {
    if (typeof window === 'undefined') return []
    const raw = window.sessionStorage.getItem(FAVORITES_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter((v): v is string => typeof v === 'string')
  } catch {
    return []
  }
}

function writeFavoritesToSession(ids: string[]) {
  try {
    if (typeof window === 'undefined') return
    window.sessionStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids))
  } catch {
    // ignore storage write failures (e.g. privacy mode)
  }
}

function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => readFavoritesFromSession())

  useEffect(() => {
    writeFavoritesToSession(favoriteIds)
  }, [favoriteIds])

  const favoriteIdSet = useMemo(() => new Set(favoriteIds), [favoriteIds])

  const isFavorited = useCallback((id: string) => favoriteIdSet.has(id), [favoriteIdSet])

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }, [])

  return { favoriteIds, favoriteIdSet, isFavorited, toggleFavorite }
}

function FavoriteButton({
  isActive,
  itemTitle,
  onToggle,
}: {
  isActive: boolean
  itemTitle: string
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isActive ? `Remove ${itemTitle} from favorites` : `Add ${itemTitle} to favorites`}
      aria-pressed={isActive}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ${
        isActive ? 'text-amber-600 hover:bg-amber-50' : 'text-slate-500 hover:bg-slate-100'
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        aria-hidden="true"
        fill={isActive ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.486 4.57a1 1 0 00.95.69h4.804c.969 0 1.371 1.24.588 1.81l-3.887 2.824a1 1 0 00-.364 1.118l1.486 4.57c.3.921-.755 1.688-1.539 1.118l-3.887-2.824a1 1 0 00-1.176 0l-3.887 2.824c-.783.57-1.838-.197-1.539-1.118l1.486-4.57a1 1 0 00-.364-1.118L2.27 9.997c-.783-.57-.38-1.81.588-1.81h4.804a1 1 0 00.95-.69l1.486-4.57z"
        />
      </svg>
    </button>
  )
}

function ItemCard({
  item,
  isFavorited,
  onToggleFavorite,
}: {
  item: Item
  isFavorited: boolean
  onToggleFavorite: () => void
}) {
  return (
    <article
      className={`rounded-lg border bg-white p-4 shadow-sm transition-colors ${
        isFavorited ? 'border-amber-200 bg-amber-50/40' : 'border-slate-200'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-slate-900">{item.title}</h2>
          <p className="mt-1 text-sm text-slate-600">{item.description}</p>
        </div>
        <FavoriteButton isActive={isFavorited} itemTitle={item.title} onToggle={onToggleFavorite} />
      </div>
    </article>
  )
}

export default function Home() {
  const { isFavorited, toggleFavorite } = useFavorites()

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-800">Home</h1>
        <p className="mt-2 text-slate-600">Browse items and mark your favorites.</p>
      </div>

      <ul role="list" aria-label="Items" className="grid gap-4 sm:grid-cols-2">
        {ITEMS.map((item) => (
          <li key={item.id}>
            <ItemCard
              item={item}
              isFavorited={isFavorited(item.id)}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Favorites() {
  const { favoriteIdSet, toggleFavorite } = useFavorites()

  const favoriteItems = useMemo(
    () => ITEMS.filter((item) => favoriteIdSet.has(item.id)),
    [favoriteIdSet]
  )

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-800">Favorites</h1>
        <p className="mt-2 text-slate-600">All items you’ve marked as favorites in this session.</p>
      </div>

      {favoriteItems.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
          <p className="font-medium">No favorites yet.</p>
          <p className="mt-1 text-sm text-slate-600">
            Go to Home and click the star icon on an item to add it here.
          </p>
        </div>
      ) : (
        <ul role="list" aria-label="Favorite items" className="grid gap-4 sm:grid-cols-2">
          {favoriteItems.map((item) => (
            <li key={item.id}>
              <ItemCard item={item} isFavorited onToggleFavorite={() => toggleFavorite(item.id)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
