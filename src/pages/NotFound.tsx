import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm text-center">
      <h1 className="text-2xl font-semibold text-slate-800">Page not found</h1>
      <p className="mt-2 text-slate-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-4 inline-block rounded bg-slate-800 px-4 py-2 font-medium text-white transition-colors hover:bg-slate-700"
        aria-label="Go back to home page"
      >
        Go to Home
      </Link>
    </div>
  )
}
