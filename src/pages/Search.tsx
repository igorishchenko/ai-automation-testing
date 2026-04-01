import { useSearchParams, Link } from 'react-router-dom'
import { useMemo } from 'react'

/** Mock searchable items; replace with real data source later. */
const MOCK_ITEMS: { id: string; title: string; description: string; path: string }[] = [
  { id: '1', title: 'Home', description: 'Welcome and main landing page.', path: '/' },
  { id: '2', title: 'About', description: 'About this app and tech stack.', path: '/about' },
  {
    id: '3',
    title: 'Profile',
    description: 'User profile pages with dynamic IDs.',
    path: '/profile/1',
  },
  {
    id: '4',
    title: 'AI Automation',
    description: 'Overview of AI automation testing features.',
    path: '/',
  },
  {
    id: '5',
    title: 'Search',
    description: 'Global search across the application.',
    path: '/search',
  },
]

function filterItems(items: typeof MOCK_ITEMS, query: string): typeof MOCK_ITEMS {
  const lower = query.trim().toLowerCase()
  if (!lower) return []
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(lower) || item.description.toLowerCase().includes(lower)
  )
}

export default function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''

  const results = useMemo(() => filterItems(MOCK_ITEMS, query), [query])
  const hasResults = results.length > 0

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-800">Search</h1>

      {query ? (
        <p className="mt-1 text-sm text-slate-600" aria-live="polite">
          {hasResults
            ? `${results.length} result${results.length === 1 ? '' : 's'} for “${query}”`
            : `No results for “${query}”`}
        </p>
      ) : (
        <p className="mt-1 text-sm text-slate-600">
          Enter a search term in the header to find content.
        </p>
      )}

      {hasResults ? (
        <ul className="mt-4 list-none space-y-3 p-0" role="list" aria-label="Search results">
          {results.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="block rounded-md border border-slate-200 p-3 transition-colors hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                <span className="font-medium text-slate-900">{item.title}</span>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      {query && !hasResults ? (
        <div
          className="mt-6 rounded-md border border-slate-200 bg-slate-50 p-6 text-center"
          role="status"
        >
          <p className="font-medium text-slate-700">No results found</p>
          <p className="mt-1 text-sm text-slate-600">
            Try a different search term or check the spelling.
          </p>
        </div>
      ) : null}
    </div>
  )
}
