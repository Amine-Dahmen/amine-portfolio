import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/35',
  secondary:
    'bg-white/5 text-zinc-100 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20',
  ghost: 'text-zinc-300 hover:text-white hover:bg-white/5',
}

type Props = {
  children: ReactNode
  variant?: Variant
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled,
  onClick,
}: Props) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}
