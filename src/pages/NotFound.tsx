import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="rounded-lg bg-white p-6 text-center shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-800">Page not found</h1>
      <p className="mt-2 text-slate-600">
        The page you are looking for does not exist or has been moved.
      </p>

      <Button
        className="mt-4 min-w-[295.96px]"
        onClick={() => navigate('/')}
        aria-label="Go back to home page"
        showDefaultIcon
      >
        Go to Home
      </Button>
    </div>
  )
}
