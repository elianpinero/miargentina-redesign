// ─── Feature: Dashboard ───────────────────────────────────────────────────────
// Types and data specific to the dashboard/home screen.

import { Calendar, IdCard, type LucideIcon } from 'lucide-react'

export interface StatusCard {
  id: string
  label: string
  value: string
  sub: string
  Icon: LucideIcon
  variant: 'neutral' | 'success' | 'warning'
}

export interface HolidayBanner {
  date: string
  name: string
  daysAway: number
}

// ── Mock dashboard data ───────────────────────────────────────────────────────
export const getDashboardData = () => ({
  statusCards: [
    {
      id: 'turnos',
      label: 'PRÓXIMO TURNO',
      value: 'Sin turnos',
      sub: 'Solicitá un turno',
      Icon: Calendar,
      variant: 'neutral' as const,
    },
    {
      id: 'credenciales',
      label: 'CREDENCIALES',
      value: 'Al día',
      sub: 'DNI · Vence 2030',
      Icon: IdCard,
      variant: 'success' as const,
    },
  ] satisfies StatusCard[],

  holiday: {
    date: '25 de Mayo',
    name: 'Día de la Revolución de Mayo',
    daysAway: 8,
  } satisfies HolidayBanner,
})
