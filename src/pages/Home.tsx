import { useNavigate } from 'react-router-dom'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="space-y-4">
      <Banner
        title="Welcome to AI Automation"
        description="Explore shared components and pages using the navigation. This banner and all actions are now built from reusable primitives."
        tone="info"
        action={
          <Button
            size="sm"
            onClick={() => navigate('/about')}
            aria-label="Learn more about this app"
          >
            Learn More
          </Button>
        }
      />
      <section className="rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-800">Welcome</h1>
        <p className="mt-2 text-slate-600">
          Welcome to the app. Use the navigation above to explore different sections.
        </p>
      </section>
    </div>
  )
}
