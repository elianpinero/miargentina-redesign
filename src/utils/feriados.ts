// Feriados nacionales 2026 — fuente: https://www.argentina.gob.ar/feriados
export interface Feriado {
  date: string // YYYY-MM-DD
  label: string
}

export const FERIADOS_2026: Feriado[] = [
  { date: '2026-01-01', label: 'Año Nuevo' },
  { date: '2026-02-16', label: 'Carnaval' },
  { date: '2026-02-17', label: 'Carnaval' },
  { date: '2026-03-23', label: 'Día no laborable con fines turísticos' },
  { date: '2026-03-24', label: 'Día Nacional de la Memoria por la Verdad y la Justicia' },
  { date: '2026-04-02', label: 'Día del Veterano y de los Caídos en la Guerra de Malvinas' },
  { date: '2026-04-03', label: 'Viernes Santo' },
  { date: '2026-05-01', label: 'Día del Trabajador' },
  { date: '2026-05-25', label: 'Día de la Revolución de Mayo' },
  { date: '2026-06-15', label: 'Paso a la Inmortalidad del Gral. Martín Miguel de Güemes' },
  { date: '2026-06-20', label: 'Paso a la Inmortalidad del Gral. Manuel Belgrano' },
  { date: '2026-07-09', label: 'Día de la Independencia' },
  { date: '2026-08-17', label: 'Paso a la Inmortalidad del Gral. José de San Martín' },
  { date: '2026-10-12', label: 'Día del Respeto a la Diversidad Cultural' },
  { date: '2026-11-23', label: 'Día de la Soberanía Nacional' },
  { date: '2026-12-07', label: 'Día no laborable con fines turísticos' },
  { date: '2026-12-08', label: 'Día de la Inmaculada Concepción de María' },
  { date: '2026-12-25', label: 'Navidad' },
]

function parseLocalDate(iso: string): Date {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day)
}

/** Returns the next upcoming feriado relative to `from` (today by default), including today itself. */
export function getNextFeriado(from: Date = new Date()): Feriado | null {
  const todayStart = new Date(from.getFullYear(), from.getMonth(), from.getDate())
  return (
    FERIADOS_2026.find((feriado) => parseLocalDate(feriado.date) >= todayStart) ?? null
  )
}

export function formatFeriadoDate(iso: string): string {
  const date = parseLocalDate(iso)
  return date.toLocaleDateString('es-AR', { day: 'numeric', month: 'long' })
}

export function formatTodayLong(from: Date = new Date()): string {
  const formatted = from.toLocaleDateString('es-AR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}
