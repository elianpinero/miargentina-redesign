import type { LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

interface EmptyStateProps {
  icon: LucideIcon
  iconLabel?: string
  title: string
  description: string
  action?: React.ReactNode
  className?: string
}

export function EmptyState({ icon: Icon, iconLabel, title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        'py-12 px-8 text-center gap-4',
        className
      )}
    >
      <div
        className="w-[72px] h-[72px] rounded-[22px] bg-surface-secondary flex items-center justify-center"
        role="img"
        aria-label={iconLabel}
      >
        <Icon size={30} color="#6B7280" strokeWidth={1.6} />
      </div>
      <div className="space-y-2">
        <p className="font-sans font-bold text-title-sm text-text-primary">{title}</p>
        <p className="font-sans text-body-sm text-text-secondary leading-relaxed max-w-[220px] mx-auto">
          {description}
        </p>
      </div>
      {action}
    </div>
  )
}
