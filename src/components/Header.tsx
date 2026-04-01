import { useState, useCallback, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const APP_NAME = 'AI Automation'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
] as const

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const getAriaCurrent = useCallback(
    (to: string, end: boolean) => {
      if (end && to === '/') return location.pathname === '/' ? 'page' : undefined
      return location.pathname === to ? 'page' : undefined
    },
    [location.pathname]
  )

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const trimmed = searchQuery.trim()
      if (trimmed) {
        navigate(`/search?q=${encodeURIComponent(trimmed)}`)
        setMobileMenuOpen(false)
      }
    },
    [searchQuery, navigate]
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    if (mobileMenuOpen) {
      document.addEventListener('keydown', onKeyDown)
      return () => document.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileMenuOpen])

  return (
    <header className="border-b border-slate-200 bg-white shadow-sm" role="banner">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <NavLink
          to="/"
          end
          className="text-lg font-semibold text-slate-900 no-underline transition-colors hover:text-slate-700"
          aria-label={`${APP_NAME} - Home`}
        >
          {APP_NAME}
        </NavLink>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="main-nav"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          id="main-nav"
          className={`w-full md:flex md:w-auto md:flex-row md:items-center md:gap-1 ${
            mobileMenuOpen ? 'flex flex-col gap-1' : 'hidden'
          }`}
          aria-label="Main navigation"
        >
          <form
            role="search"
            className="flex items-center gap-2 py-2 md:py-0"
            onSubmit={handleSearchSubmit}
          >
            <label htmlFor="global-search" className="sr-only">
              Search content
            </label>
            <input
              id="global-search"
              type="search"
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-800 placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
              autoComplete="off"
            />
            <button
              type="submit"
              className="rounded-md bg-slate-700 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              aria-label="Submit search"
            >
              Search
            </button>
          </form>
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-200 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`
              }
              aria-current={getAriaCurrent(to, end)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
