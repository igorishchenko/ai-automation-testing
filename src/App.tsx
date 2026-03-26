import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

function AppLayout() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <Banner
            title="Build reliable test automation workflows"
            description="Shared primitives are now centralized, making UI updates faster and more consistent across pages."
            ctaLabel="Learn more"
            onCtaClick={() => navigate('/about')}
          />
        </div>
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
