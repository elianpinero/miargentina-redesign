'use client'

// StatusCard — glassmorphism card used in the dashboard header
interface StatusCardProps {
  label: string
  value: string
  sub: string
  emoji: string
}

export function StatusCard({ label, value, sub, emoji }: StatusCardProps) {
  return (
    <div
      className="glass rounded-ios-lg p-3.5"
      role="region"
      aria-label={label}
    >
      {/* Label row */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <span aria-hidden="true" className="text-sm">{emoji}</span>
        <span className="font-sans font-semibold text-[10px] text-white/55 uppercase tracking-[0.5px]">
          {label}
        </span>
      </div>

      {/* Value */}
      <p className="font-sans font-extrabold text-[14px] text-white leading-tight">{value}</p>

      {/* Sub */}
      <p className="font-sans text-[11px] text-white/50 mt-0.5">{sub}</p>
    </div>
  )
}
