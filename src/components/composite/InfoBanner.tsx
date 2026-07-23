import { cn } from '@/utils/cn'

interface InfoBannerProps {
  emoji: string
  emojiAriaLabel?: string
  title: string
  body: string
  variant?: 'info' | 'warning' | 'success'
  className?: string
}

const variantStyles = {
  info:    { wrapper: 'bg-info-soft border-info/10',    icon: 'bg-[#3B82F6]', title: 'text-info-text',    body: 'text-[#4B85AD]' },
  warning: { wrapper: 'bg-warning-soft border-warning/10', icon: 'bg-[#F59E0B]', title: 'text-warning-text', body: 'text-[#8B6000]' },
  success: { wrapper: 'bg-success-soft border-success/10', icon: 'bg-[#16A34A]', title: 'text-success-text', body: 'text-[#0f5132]' },
}

export function InfoBanner({
  emoji,
  emojiAriaLabel,
  title,
  body,
  variant = 'info',
  className,
}: InfoBannerProps) {
  const styles = variantStyles[variant]

  return (
    <div
      className={cn(
        'rounded-ios-lg border p-3.5',
        'flex items-center gap-3',
        styles.wrapper,
        className
      )}
      role="note"
    >
      <div
        className={cn('w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 text-lg', styles.icon)}
        aria-label={emojiAriaLabel}
        aria-hidden={!emojiAriaLabel}
      >
        {emoji}
      </div>
      <div>
        <p className={cn('font-sans font-bold text-caption leading-snug', styles.title)}>{title}</p>
        <p className={cn('font-sans text-[11px] mt-0.5', styles.body)}>{body}</p>
      </div>
    </div>
  )
}
