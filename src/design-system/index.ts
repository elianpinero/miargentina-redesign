// ─── Design System — Public API ───────────────────────────────────────────────
export * from './colors'
export * from './motion'

// ── Shadow tokens ────────────────────────────────────────────────────────────
export const shadows = {
  card: '0 2px 16px rgba(11,23,66,0.07), 0 1px 4px rgba(11,23,66,0.04)',
  cardHover: '0 6px 24px rgba(11,23,66,0.12), 0 2px 8px rgba(11,23,66,0.06)',
  float: '0 8px 32px rgba(11,23,66,0.18), 0 2px 8px rgba(0,0,0,0.08)',
  avatar: '0 2px 8px rgba(255,184,28,0.35)',
  gold: '0 4px 14px rgba(255,184,28,0.4)',
} as const

// ── Border radius tokens ─────────────────────────────────────────────────────
export const radii = {
  sm: 10,
  md: 14,
  lg: 18,
  xl: 22,
  '2xl': 28,
  card: 20,
  pill: 999,
} as const

// ── Spacing tokens ───────────────────────────────────────────────────────────
export const spacing = {
  pagePadding: '0 16px',
  sectionGap: 14,
  cardGap: 10,
  tabBarHeight: 83,
  headerHeight: 110,
  touchTarget: 44,
} as const

// ── Typography tokens ────────────────────────────────────────────────────────
export const typography = {
  fonts: {
    sans: "'Montserrat', system-ui, sans-serif",
    serif: "'Lora', Georgia, serif",
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const
