import { Badge, type BadgeVariant } from '@/components/primitives/Badge'
import { cn } from '@/utils/cn'

interface VehicleCardProps {
  modelo: string
  año: number
  patente: string
  vtv: string
  badgeText: string
  badgeVariant?: BadgeVariant
  className?: string
}

export function VehicleCard({
  modelo,
  año,
  patente,
  vtv,
  badgeText,
  badgeVariant = 'green',
  className,
}: VehicleCardProps) {
  return (
    <div className={cn('card-surface p-4 space-y-3', className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="font-sans font-bold text-body text-text-primary">
          {modelo} {año}
        </p>
        <Badge variant={badgeVariant}>{badgeText}</Badge>
      </div>

      {/* Plate */}
      <div
        className="inline-flex items-center justify-center rounded-[10px] bg-navy-900 px-4 py-2"
        aria-label={`Patente ${patente}`}
        role="img"
      >
        <span className="font-sans font-extrabold text-[20px] text-gold-500 tracking-[3px]">
          {patente}
        </span>
      </div>

      {/* VTV */}
      <p className="font-sans text-caption text-text-secondary">
        VTV: {vtv}
      </p>
    </div>
  )
}
