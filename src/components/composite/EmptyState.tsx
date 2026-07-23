import { cn } from '@/utils/cn'

interface EmptyStateProps {
  emoji: string
  emojiLabel?: string
  title: string
  description: string
  action?: React.ReactNode
  className?: string
}

export function EmptyState({ emoji, emojiLabel, title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        'py-12 px-8 text-center gap-4',
        className
      )}
    >
      <div
        className="w-[72px] h-[72px] rounded-[22px] bg-surface-secondary flex items-center justify-center text-[34px]"
        role="img"
        aria-label={emojiLabel || emoji}
      >
        {emoji}
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
