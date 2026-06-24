import bannerIcon from '../assets/banner-icon.svg'

type BannerProps = {
  streakDays?: number
  className?: string
}

export function Banner({ streakDays = 12, className = '' }: BannerProps) {
  const classes = [
    'relative h-[155.97px] w-full max-w-[345.55px] overflow-hidden rounded-[24px] bg-gradient-to-b from-[#00D9FF] to-[#8B5CF6] p-6 text-left',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classes} aria-label="Workout streak banner">
      <div className="pointer-events-none absolute left-[249.56px] top-[59.97px] h-[127.99px] w-[127.99px] rounded-full bg-white/10" />

      <div className="relative z-10 text-[#0F1115]">
        <div className="flex h-6 w-full items-center gap-[7.99px]">
          <span aria-hidden className="inline-flex h-6 w-6 items-center justify-center">
            <img src={bannerIcon} alt="" className="h-6 w-6" />
          </span>
          <p className="text-base font-semibold leading-6 tracking-[-0.02em]">Workout Streak</p>
        </div>

        <p className="mt-2 h-12 text-5xl font-bold leading-[1] tracking-[0.0073em]">{streakDays}</p>
        <p className="mt-1 text-base font-normal leading-6 tracking-[-0.02em] text-[#0F1115]/80">
          days in a row! Keep it up!
        </p>
      </div>
    </section>
  )
}
