import { useParams } from 'react-router-dom'

export default function Profile() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-800">Profile</h1>
      <p className="mt-2 text-slate-600">
        Viewing profile for: <span className="font-medium text-slate-800">{id ?? 'unknown'}</span>
      </p>
    </div>
  )
}
