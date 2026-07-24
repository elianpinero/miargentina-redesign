import { cn } from '@/utils/cn'
import { ArgentinaFlag } from './ArgentinaFlag'

interface LicensePlateProps {
  /** Raw plate value, with or without spaces, e.g. "AB123CD" or "A123BCD" */
  plate: string
  /** Car plates are wide/rectangular. Moto plates are square with the number on two lines. */
  variant?: 'car' | 'moto'
  className?: string
}

export function LicensePlate({ plate, variant = 'car', className }: LicensePlateProps) {
  const clean = plate.replace(/\s/g, '').toUpperCase()
  const isMoto = variant === 'moto'

  // Car: "AB123CD" -> "AB 123 CD". Moto: split across two lines like the physical square plate.
  const lines = isMoto
    ? [clean.slice(0, 3), clean.slice(3)]
    : [`${clean.slice(0, 2)} ${clean.slice(2, 5)} ${clean.slice(5)}`]

  return (
    <div
      className={cn(
        'inline-flex flex-col overflow-hidden rounded-[10px] border-[3px] border-black bg-white shadow-sm shrink-0',
        isMoto ? 'w-[110px]' : 'w-[220px]',
        className
      )}
      role="img"
      aria-label={`Patente ${clean}`}
    >
      {/* MERCOSUR band — the full "REPÚBLICA ARGENTINA" text only fits the wide car plate */}
      <div className="flex items-center gap-1 bg-[#1B4B94] px-1.5 py-[3px] whitespace-nowrap">
        <span className="font-sans font-extrabold text-[6px] text-white leading-none tracking-tight shrink-0">
          MERCOSUR
        </span>
        {!isMoto && (
          <span className="flex-1 text-center font-sans font-extrabold text-[7px] text-white leading-none tracking-tight">
            REPÚBLICA ARGENTINA
          </span>
        )}
        {isMoto && <span className="flex-1" />}
        <ArgentinaFlag />
      </div>

      {/* Plate number */}
      <div className={cn('flex items-center justify-center bg-white', isMoto ? 'flex-col py-1' : 'py-2')}>
        {lines.map((line) => (
          <span
            key={line}
            className="font-sans font-extrabold text-black leading-none tracking-wider text-[26px]"
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  )
}
