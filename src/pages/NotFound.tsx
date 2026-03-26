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
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-slate-900 px-5 text-base font-semibold text-white transition-colors duration-200 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
      >
        Go to Home
      </Link>
    </div>
  )
}
