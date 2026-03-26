import { Button } from './Button'

interface BannerProps {
  title: string
  description: string
  ctaLabel?: string
  onCtaClick?: () => void
}

export function Banner({ title, description, ctaLabel, onCtaClick }: BannerProps) {
  return (
    <section
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      aria-label="Announcement banner"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
        </div>

        {ctaLabel && onCtaClick ? (
          <Button
            variant="primary"
            size="md"
            onClick={onCtaClick}
            className="w-full sm:w-auto"
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </Button>
        ) : null}
      </div>
    </section>
  )
}
