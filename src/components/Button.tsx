import type { ButtonHTMLAttributes, ReactNode } from 'react'
import buttonIcon from '../assets/button-icon.svg'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  children: ReactNode
  icon?: ReactNode
  showDefaultIcon?: boolean
}

const baseClasses =
  'inline-flex h-14 items-center justify-center rounded-full px-8 text-lg font-bold leading-7 tracking-[-0.0244em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#00D9FF] text-[#0F1115] hover:bg-[#00C4E6] focus-visible:ring-[#00D9FF] focus-visible:ring-offset-white',
  secondary:
    'bg-slate-200 text-slate-900 hover:bg-slate-300 focus-visible:ring-slate-400 focus-visible:ring-offset-white',
}

export function Button({
  type = 'button',
  variant = 'primary',
  className = '',
  children,
  icon,
  showDefaultIcon = false,
  ...props
}: ButtonProps) {
  const defaultIcon = showDefaultIcon ? <img src={buttonIcon} alt="" className="h-5 w-5" /> : null
  const resolvedIcon = icon ?? defaultIcon
  const iconIsDecorative = resolvedIcon === defaultIcon
  const classes = [baseClasses, variantClasses[variant], className].filter(Boolean).join(' ')

  return (
    <button type={type} className={classes} {...props}>
      {resolvedIcon ? (
        <span
          aria-hidden={iconIsDecorative ? true : undefined}
          className="mr-[8.99px] inline-flex h-5 w-5 items-center justify-center"
        >
          {resolvedIcon}
        </span>
      ) : null}
      <span>{children}</span>
    </button>
  )
}
