// ─── Argentine flag — flat badge style, with an 8-point star ─────────────────
interface ArgentinaFlagProps {
  className?: string
}

export function ArgentinaFlag({ className = 'w-5 h-3.5' }: ArgentinaFlagProps) {
  return (
    <svg viewBox="0 0 512 512" className={`${className} shrink-0`} aria-hidden="true">
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
