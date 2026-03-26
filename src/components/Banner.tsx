import type { ReactNode } from 'react'

interface BannerProps {
  title: string
  description?: string
  tone?: 'info' | 'success' | 'warning'
  action?: ReactNode
}

export function Banner({ title, description, tone = 'info', action }: BannerProps) {
  const toneStyles = {
    info: 'border-sky-200 bg-sky-50 text-sky-900',
    success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    warning: 'border-amber-200 bg-amber-50 text-amber-900',
  }

  return (
    <section className={`rounded-lg border p-4 sm:p-5 ${toneStyles[tone]}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-semibold leading-6">{title}</h2>
          {description ? <p className="mt-1 text-sm leading-6 opacity-90">{description}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </section>
  )
}
