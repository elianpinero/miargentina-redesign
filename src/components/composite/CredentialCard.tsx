import { Badge, type BadgeVariant } from '@/components/primitives/Badge'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/utils/cn'

interface CredentialCardProps {
  emoji: string
  emojiBg: string
  title: string
  subtitle: string
  detail?: string
  badgeText?: string
  badgeVariant?: BadgeVariant
  onClick?: () => void
  className?: string
}

export function CredentialCard({
  emoji,
  emojiBg,
  title,
  subtitle,
  detail,
  badgeText,
  badgeVariant = 'green',
  onClick,
  className,
}: CredentialCardProps) {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        'card-surface p-4',
        onClick && 'cursor-pointer active:scale-[0.98] transition-transform duration-150',
        className
      )}
    >
      <div className="flex items-start gap-3.5">
        {/* Icon */}
        <div
          className="w-[46px] h-[46px] rounded-[14px] flex items-center justify-center text-[22px] shrink-0 mt-0.5"
          style={{ background: emojiBg }}
          aria-hidden="true"
        >
          {emoji}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="font-sans font-bold text-body text-text-primary leading-tight">{title}</p>
            {badgeText && <Badge variant={badgeVariant}>{badgeText}</Badge>}
          </div>
          <p className="font-sans text-caption text-text-secondary">{subtitle}</p>

          {detail && (
            <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-surface-tertiary/60">
              <span className="font-sans text-[11px] text-text-secondary">{detail}</span>
              {onClick && <ChevronRight size={14} color="#9CA3AF" />}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
