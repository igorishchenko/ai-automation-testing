import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base =
    'rounded px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500'
  const variants = {
    primary: 'bg-slate-800 text-white hover:bg-slate-700',
    secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300',
  }
  return (
    <button type="button" className={`${base} ${variants[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}
