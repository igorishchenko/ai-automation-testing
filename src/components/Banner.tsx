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
      className="rounded-xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-700 p-6 text-white shadow-sm md:p-8"
      aria-label="Main promotional banner"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-3">
          <h1 className="text-2xl font-semibold leading-tight md:text-3xl">{title}</h1>
          <p className="text-sm leading-6 text-slate-200 md:text-base">{description}</p>
        </div>
        {ctaLabel && onCtaClick ? (
          <Button
            variant="secondary"
            className="w-full md:w-auto"
            aria-label={ctaLabel}
            onClick={onCtaClick}
          >
            {ctaLabel}
          </Button>
        ) : null}
      </div>
    </section>
  )
}
