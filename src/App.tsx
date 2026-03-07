import { NavLink, Outlet, Routes, Route, useMatch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

function AppLayout() {
  const homeMatch = useMatch({ path: '/', end: true })
  const aboutMatch = useMatch('/about')
  const profileMatch = useMatch('/profile/me')

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b border-slate-200 bg-white shadow-sm" aria-label="Main navigation">
        <div className="mx-auto flex max-w-4xl items-center gap-6 px-4 py-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-slate-200 text-slate-900'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
              }`
            }
            aria-current={homeMatch ? 'page' : undefined}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-slate-200 text-slate-900'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
              }`
            }
            aria-current={aboutMatch ? 'page' : undefined}
          >
            About
          </NavLink>
          <NavLink
            to="/profile/me"
            className={({ isActive }) =>
              `rounded px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-slate-200 text-slate-900'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
              }`
            }
            aria-current={profileMatch ? 'page' : undefined}
          >
            Profile
          </NavLink>
        </div>
      </nav>
      <main className="mx-auto max-w-4xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
