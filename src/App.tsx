import { Outlet, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import Home, { Favorites } from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
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
        <Route path="favorites" element={<Favorites />} />
        <Route path="about" element={<About />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
