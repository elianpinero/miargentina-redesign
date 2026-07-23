'use client'

import { Check, type LucideIcon } from 'lucide-react'

// StatusCard — glassmorphism card used in the dashboard header
interface StatusCardProps {
  label: string
  value: string
  sub: string
  icon: LucideIcon
  verified?: boolean
}

export function StatusCard({ label, value, sub, icon: Icon, verified = false }: StatusCardProps) {
  return (
    <div
      className="glass rounded-ios-lg p-3.5"
      role="region"
      aria-label={label}
    >
      {/* Label row */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon size={13} color="white" strokeWidth={2} aria-hidden="true" />
        <span className="font-sans font-semibold text-[10px] text-white/55 uppercase tracking-[0.5px]">
          {label}
        </span>
      </div>

      {/* Value */}
      <p className="font-sans font-extrabold text-[14px] text-white leading-tight flex items-center gap-1">
        {value}
        {verified && <Check size={13} color="#4ADE80" strokeWidth={3} aria-hidden="true" />}
      </p>

      {/* Sub */}
      <p className="font-sans text-[11px] text-white/50 mt-0.5">{sub}</p>
    </div>
  )
}
