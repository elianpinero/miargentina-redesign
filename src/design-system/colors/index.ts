// ─── Color Tokens ─────────────────────────────────────────────────────────────
// Single source of truth for all colors used in the app.
// Import this file in components; never hardcode hex values.

export const colors = {
  // Brand — Navy
  navy: {
    900: '#0B1742',
    800: '#13265E',
    700: '#1A3380',
  },

  // Brand — Gold
  gold: {
    500: '#FFB81C',
    400: '#FCBF45',
    300: '#FFD166',
  },

  // Backgrounds
  bg: {
    primary: '#F5F6FA',
    secondary: '#EDEEF4',
  },

  // Surfaces
  surface: {
    primary: '#FFFFFF',
    overlay: 'rgba(255,255,255,0.85)',
    glass: 'rgba(255,255,255,0.1)',
  },

  // Text
  text: {
    primary: '#111827',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
    inverse: '#FFFFFF',
    gold: '#FFB81C',
  },

  // Semantic
  success: {
    soft: '#E2F6EC',
    DEFAULT: '#16A34A',
    text: '#0f5132',
  },
  info: {
    soft: '#D0E7F8',
    DEFAULT: '#0EA5E9',
    text: '#0d3a5c',
  },
  warning: {
    soft: '#FFF3BF',
    DEFAULT: '#F59E0B',
    text: '#8B6000',
  },
  danger: {
    soft: '#FEECEC',
    DEFAULT: '#DC2626',
    text: '#7A1010',
  },

  // Module accent colors
  module: {
    documentos: { bg: '#E8F0FE', icon: '#3B5BDB' },
    vehiculos: { bg: '#E3F9E5', icon: '#2B8A3E' },
    trabajo: { bg: '#FFF3BF', icon: '#E67700' },
    salud: { bg: '#FFE3E3', icon: '#C92A2A' },
    cobros: { bg: '#E3FAFC', icon: '#0C7B8F' },
    tramites: { bg: '#F3F0FF', icon: '#7048E8' },
    turnos: { bg: '#FFF4E6', icon: '#D9480F' },
    hijos: { bg: '#FFF0F6', icon: '#A61E4D' },
  },

  // iOS Tab Bar
  tabBar: {
    bg: 'rgba(255,255,255,0.85)',
    border: 'rgba(0,0,0,0.08)',
    active: '#0B1742',
    inactive: '#8E8E93',
  },
} as const

export type ColorToken = typeof colors
