'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────
export type ButtonVariant = 'primary' | 'outline' | 'gold' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  children: React.ReactNode
}

// ─── Style maps ───────────────────────────────────────────────────────────────
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-navy-900 text-white border-transparent hover:bg-navy-800 active:bg-navy-900',
  outline:
    'bg-transparent text-navy-900 border-navy-900 border-[1.5px] hover:bg-navy-900/5',
  gold:
    'bg-gold-500 text-navy-900 border-transparent hover:bg-gold-400',
  ghost:
    'bg-surface-secondary text-text-primary border-transparent hover:bg-surface-tertiary',
  danger:
    'bg-danger-soft text-danger-text border-transparent hover:bg-danger/10',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2.5 text-[13px] rounded-ios',
  md: 'px-5 py-[14px] text-body rounded-ios-lg',
  lg: 'px-6 py-4 text-body-lg rounded-ios-xl',
}

// ─── Component ────────────────────────────────────────────────────────────────
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
        className={cn(
          // Base
          'inline-flex items-center justify-center gap-2',
          'font-sans font-bold',
          'border',
          'cursor-pointer select-none',
          'transition-colors duration-150',
          'touch-target',
          // Variants
          variantStyles[variant],
          // Sizes
          sizeStyles[size],
          // Full width
          fullWidth && 'w-full',
          // Disabled
          (disabled || loading) && 'opacity-50 pointer-events-none',
          className
        )}
        disabled={disabled || loading}
        aria-busy={loading}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
