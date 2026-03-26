import { Banner } from '../components/Banner'
import { Button } from '../components/Button'

export default function Home() {
  const scrollToContent = () => {
    window.scrollTo({ top: 360, behavior: 'smooth' })
  }

  return (
    <div className="space-y-6">
      <Banner
        title="Welcome to AI Automation Testing"
        description="Build, validate, and iterate on your automation scenarios with reusable UI primitives and a consistent user experience."
        ctaLabel="Explore App"
        onCtaClick={scrollToContent}
      />

      <section className="rounded-lg bg-white p-6 shadow-sm" aria-label="Home content">
        <h2 className="text-2xl font-semibold text-slate-800">Get started</h2>
        <p className="mt-2 text-slate-600">
          Use the navigation above to explore sections and verify shared component behavior.
        </p>
        <div className="mt-4">
          <Button size="sm" onClick={scrollToContent}>
            Learn More
          </Button>
        </div>
      </section>
    </div>
  )
}
