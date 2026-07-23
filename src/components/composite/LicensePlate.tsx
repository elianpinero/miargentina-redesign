import { cn } from '@/utils/cn'

interface LicensePlateProps {
  /** Raw plate value, with or without spaces, e.g. "AB123CD" or "A123BCD" */
  plate: string
  /** Car plates are wide/rectangular. Moto plates are square with the number on two lines. */
  variant?: 'car' | 'moto'
  className?: string
}

// ─── Argentine flag, with the Sol de Mayo ────────────────────────────────────
function FlagSwatch() {
  return (
    <svg
      viewBox="0 0 160 100"
      className="w-5 h-3.5 rounded-[1px] overflow-hidden shrink-0 border border-white/40"
      aria-hidden="true"
    >
      <rect width="160" height="33.34" y="0" fill="#75AADB" />
      <rect width="160" height="33.33" y="33.34" fill="#FFFFFF" />
      <rect width="160" height="33.33" y="66.67" fill="#75AADB" />
      <circle cx="80" cy="50" r="20" fill="none" stroke="#F6B40E" strokeWidth="6" strokeDasharray="3 4.2" />
      <circle cx="80" cy="50" r="13" fill="#F6B40E" stroke="#8B5E0A" strokeWidth="1" />
      <circle cx="75.5" cy="47.5" r="1.4" fill="#8B5E0A" />
      <circle cx="84.5" cy="47.5" r="1.4" fill="#8B5E0A" />
      <path d="M75 55 Q80 58.5 85 55" stroke="#8B5E0A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  )
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
        <FlagSwatch />
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
