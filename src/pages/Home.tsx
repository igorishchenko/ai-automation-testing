import { Banner } from '../components/Banner'

export default function Home() {
  return (
    <div className="space-y-6">
      <Banner />

      <section className="rounded-lg bg-white p-6 shadow-sm" aria-label="Home content">
        <h1 className="text-2xl font-semibold text-slate-800">Welcome</h1>
        <p className="mt-2 text-slate-600">
          Welcome to the app. Use the navigation above to explore different sections.
        </p>
      </section>
    </div>
  )
}
