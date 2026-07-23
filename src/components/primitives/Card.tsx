'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

// ─── Types ────────────────────────────────────────────────────────────────────
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable press animation (for tappable cards) */
  interactive?: boolean
  /** Remove default padding */
  noPadding?: boolean
  children: React.ReactNode
}

// ─── Component ────────────────────────────────────────────────────────────────
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ interactive = false, noPadding = false, className, children, onClick, ...props }, ref) => {
    const isClickable = interactive || !!onClick

    return (
      <motion.div
        ref={ref}
        onClick={onClick}
        whileTap={isClickable ? { scale: 0.97 } : undefined}
        transition={{ duration: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
        className={cn(
          'card-surface',
          !noPadding && 'p-4',
          isClickable && 'cursor-pointer',
          className
        )}
        {...(props as React.ComponentProps<typeof motion.div>)}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

// ─── Card.Row — for list rows inside a card ──────────────────────────────────
interface CardRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  last?: boolean
}

export function CardRow({ children, last = false, className, ...props }: CardRowProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 px-4 py-3.5',
        !last && 'border-b border-surface-tertiary/60',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
