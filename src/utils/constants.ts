// ─── App-wide types ───────────────────────────────────────────────────────────

export type TabId = 'inicio' | 'novedades' | 'telefonos' | 'tina'

export type ModuleId =
  | 'documentos'
  | 'vehiculos'
  | 'salud'
  | 'trabajo'
  | 'cobros'
  | 'tramites'
  | 'turnos'
  | 'hijos'

export interface ModuleConfig {
  id: ModuleId
  label: string
  href: string
  iconBg: string
  iconColor: string
  emoji: string
}

export interface TabConfig {
  id: TabId
  label: string
  href?: string
  ariaLabel: string
}

export interface UserProfile {
  name: string
  cuil: string
  email: string
  phone: string
  address: string
  dni: string
  birthdate: string
  gender: string
  nationality: string
  initials: string
  isVerified: boolean
}

export interface EmergencyPhone {
  number: string
  label: string
  emoji: string
  bgColor: string
  iconColor: string
}

// ─── Module config ────────────────────────────────────────────────────────────
export const MODULES: ModuleConfig[] = [
  { id: 'documentos', label: 'Documentos', href: '/documentos', iconBg: '#E8F0FE', iconColor: '#3B5BDB', emoji: '📄' },
  { id: 'vehiculos',  label: 'Vehículos',  href: '/vehiculos',  iconBg: '#E3F9E5', iconColor: '#2B8A3E', emoji: '🚗' },
  { id: 'trabajo',    label: 'Trabajo',    href: '/trabajo',    iconBg: '#FFF3BF', iconColor: '#E67700', emoji: '💼' },
  { id: 'salud',      label: 'Salud',      href: '/salud',      iconBg: '#FFE3E3', iconColor: '#C92A2A', emoji: '❤️' },
  { id: 'cobros',     label: 'Cobros',     href: '/cobros',     iconBg: '#E3FAFC', iconColor: '#0C7B8F', emoji: '💰' },
  { id: 'tramites',   label: 'Trámites',   href: '/tramites',   iconBg: '#F3F0FF', iconColor: '#7048E8', emoji: '📋' },
  { id: 'turnos',     label: 'Turnos',     href: '/turnos',     iconBg: '#FFF4E6', iconColor: '#D9480F', emoji: '📅' },
  { id: 'hijos',      label: 'Hijos',      href: '/hijos',      iconBg: '#FFF0F6', iconColor: '#A61E4D', emoji: '👶' },
]

// ─── Tab config ───────────────────────────────────────────────────────────────
export const TABS: TabConfig[] = [
  { id: 'inicio',    label: 'Inicio',    href: '/',          ariaLabel: 'Ir al inicio' },
  { id: 'novedades', label: 'Novedades', href: '/novedades', ariaLabel: 'Ver novedades' },
  { id: 'telefonos', label: 'Teléfonos', href: '/telefonos', ariaLabel: 'Ver teléfonos de emergencia' },
  { id: 'tina',      label: 'Tina',      ariaLabel: 'Abrir chat con Tina en WhatsApp' },
]

// ─── Emergency phones ─────────────────────────────────────────────────────────
export const EMERGENCY_PHONES: EmergencyPhone[] = [
  { number: '911', label: 'Central de emergencias nacional', emoji: '🚨', bgColor: '#FEECEC', iconColor: '#C92A2A' },
  { number: '144', label: 'Víctimas de violencia',           emoji: '💜', bgColor: '#F3E8FF', iconColor: '#7C3AED' },
  { number: '107', label: 'Emergencias Médicas',             emoji: '🏥', bgColor: '#FFE3E3', iconColor: '#C92A2A' },
  { number: '100', label: 'Bomberos',                        emoji: '🔥', bgColor: '#FFF4E6', iconColor: '#D9480F' },
  { number: '102', label: 'Línea de las chicas y los chicos',emoji: '👧', bgColor: '#FFF0F6', iconColor: '#A61E4D' },
  { number: '103', label: 'Defensa Civil',                   emoji: '🛡️', bgColor: '#E3F9E5', iconColor: '#2B8A3E' },
  { number: '106', label: 'Emergencia Náutica',              emoji: '⚓', bgColor: '#E3FAFC', iconColor: '#0C7B8F' },
  { number: '135', label: 'Asistencia al Suicida',           emoji: '🤝', bgColor: '#EEF2FF', iconColor: '#3B5BDB' },
  { number: '141', label: 'Ayuda Sedronar',                  emoji: '💊', bgColor: '#E3F9E5', iconColor: '#2B8A3E' },
  { number: '142', label: 'Menores extraviados',             emoji: '🔍', bgColor: '#FFF3BF', iconColor: '#E67700' },
  { number: '145', label: 'Denuncia de Trata',               emoji: '⚖️', bgColor: '#E8F0FE', iconColor: '#3B5BDB' },
  { number: '149', label: 'Víctimas de delitos',             emoji: '🏛️', bgColor: '#EEF2FF', iconColor: '#3B3F8C' },
]

// ─── Mock user ────────────────────────────────────────────────────────────────
export const MOCK_USER: UserProfile = {
  name: 'Matías Elian',
  cuil: '20-34567890-1',
  email: 'matias.elian@gmail.com',
  phone: '+54 9 11 3910 1010',
  address: 'Av. Corrientes 1234, CABA',
  dni: '34.567.890',
  birthdate: '15/03/1990',
  gender: 'Varón',
  nationality: 'Argentina',
  initials: 'ME',
  isVerified: true,
}

// ─── Tina WhatsApp ────────────────────────────────────────────────────────────
export const TINA_URL = 'https://api.whatsapp.com/send?phone=5491139101010'
