import { cn } from '@/utils/cn'

export type BadgeVariant = 'green' | 'gold' | 'blue' | 'navy' | 'red' | 'purple'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  green:  'bg-success-soft text-success-text',
  gold:   'bg-warning-soft text-warning-text',
  blue:   'bg-info-soft text-info-text',
  navy:   'bg-[#EEF2FF] text-[#3B3F8C]',
  red:    'bg-danger-soft text-danger-text',
  purple: 'bg-[#F3E8FF] text-[#7C3AED]',
}

export function Badge({ variant = 'green', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1',
        'rounded-pill px-2.5 py-0.5',
        'text-[10px] font-bold tracking-[0.2px]',
        'whitespace-nowrap',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
