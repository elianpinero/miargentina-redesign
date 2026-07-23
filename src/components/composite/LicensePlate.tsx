import { cn } from '@/utils/cn'

interface LicensePlateProps {
  /** Raw plate value, with or without spaces, e.g. "AB123CD" or "A123BCD" */
  plate: string
  /** Car plates are wide/rectangular. Moto plates are square with the number on two lines. */
  variant?: 'car' | 'moto'
  className?: string
}

// ─── Argentine flag — flat badge style, with an 8-point star ─────────────────
function FlagSwatch() {
  return (
    <svg viewBox="0 0 512 512" className="w-5 h-3.5 shrink-0" aria-hidden="true">
      <defs>
        <clipPath id="flag-badge-clip">
          <rect x="80" y="131" width="350" height="250" rx="40" />
        </clipPath>
      </defs>
      <g clipPath="url(#flag-badge-clip)">
        <rect x="80" y="131" width="350" height="83.3" fill="#00A9E0" />
        <rect x="80" y="214.3" width="350" height="83.4" fill="#EDEDED" />
        <rect x="80" y="297.7" width="350" height="83.3" fill="#00A9E0" />
        {/* fold shadow + darker flutter along the right edge */}
        <rect x="368" y="131" width="30" height="250" fill="#000000" opacity="0.08" />
        <path d="M398 131 Q446 256 398 381 L430 381 L430 131 Z" fill="#0072A8" />
        {/* 8-point star */}
        <path
          fill="#FFE800"
          d="M256,186 L266.7,230.1 L305.5,206.5 L281.9,245.3 L326,256 L281.9,266.7 L305.5,305.5 L266.7,281.9 L256,326 L245.3,281.9 L206.5,305.5 L230.1,266.7 L186,256 L230.1,245.3 L206.5,206.5 L245.3,230.1 Z"
        />
      </g>
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
