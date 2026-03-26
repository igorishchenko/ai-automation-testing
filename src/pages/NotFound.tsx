import { useNavigate } from 'react-router-dom'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="space-y-4">
      <Banner
        title="Page not found"
        description="The page you are looking for does not exist or has been moved."
        tone="warning"
      />
      <div className="rounded-lg bg-white p-6 text-center shadow-sm">
        <Button onClick={() => navigate('/')} aria-label="Go back to home page">
          Go to Home
        </Button>
      </div>
    </div>
  )
}
