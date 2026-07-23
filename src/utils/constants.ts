// ─── App-wide types ───────────────────────────────────────────────────────────
import {
  FileText, Car, Briefcase, Heart, Wallet, ClipboardList, Calendar, Baby,
  Siren, HeartHandshake, Hospital, Flame, Users, Shield, Anchor, Pill, Search, Scale, Landmark,
  type LucideIcon,
} from 'lucide-react'

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
  Icon: LucideIcon
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
  Icon: LucideIcon
  bgColor: string
  iconColor: string
}

// ─── Module config ────────────────────────────────────────────────────────────
export const MODULES: ModuleConfig[] = [
  { id: 'documentos', label: 'Documentos', href: '/documentos', iconBg: '#E8F0FE', iconColor: '#3B5BDB', Icon: FileText },
  { id: 'vehiculos',  label: 'Vehículos',  href: '/vehiculos',  iconBg: '#E3F9E5', iconColor: '#2B8A3E', Icon: Car },
  { id: 'trabajo',    label: 'Trabajo',    href: '/trabajo',    iconBg: '#FFF3BF', iconColor: '#E67700', Icon: Briefcase },
  { id: 'salud',      label: 'Salud',      href: '/salud',      iconBg: '#FFE3E3', iconColor: '#C92A2A', Icon: Heart },
  { id: 'cobros',     label: 'Cobros',     href: '/cobros',     iconBg: '#E3FAFC', iconColor: '#0C7B8F', Icon: Wallet },
  { id: 'tramites',   label: 'Trámites',   href: '/tramites',   iconBg: '#F3F0FF', iconColor: '#7048E8', Icon: ClipboardList },
  { id: 'turnos',     label: 'Turnos',     href: '/turnos',     iconBg: '#FFF4E6', iconColor: '#D9480F', Icon: Calendar },
  { id: 'hijos',      label: 'Hijos',      href: '/hijos',      iconBg: '#FFF0F6', iconColor: '#A61E4D', Icon: Baby },
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
  { number: '911', label: 'Central de emergencias nacional', Icon: Siren,          bgColor: '#FEECEC', iconColor: '#C92A2A' },
  { number: '144', label: 'Víctimas de violencia',           Icon: HeartHandshake, bgColor: '#F3E8FF', iconColor: '#7C3AED' },
  { number: '107', label: 'Emergencias Médicas',             Icon: Hospital,       bgColor: '#FFE3E3', iconColor: '#C92A2A' },
  { number: '100', label: 'Bomberos',                        Icon: Flame,          bgColor: '#FFF4E6', iconColor: '#D9480F' },
  { number: '102', label: 'Línea de las chicas y los chicos',Icon: Users,          bgColor: '#FFF0F6', iconColor: '#A61E4D' },
  { number: '103', label: 'Defensa Civil',                   Icon: Shield,         bgColor: '#E3F9E5', iconColor: '#2B8A3E' },
  { number: '106', label: 'Emergencia Náutica',               Icon: Anchor,         bgColor: '#E3FAFC', iconColor: '#0C7B8F' },
  { number: '135', label: 'Asistencia al Suicida',            Icon: HeartHandshake, bgColor: '#EEF2FF', iconColor: '#3B5BDB' },
  { number: '141', label: 'Ayuda Sedronar',                   Icon: Pill,           bgColor: '#E3F9E5', iconColor: '#2B8A3E' },
  { number: '142', label: 'Menores extraviados',              Icon: Search,         bgColor: '#FFF3BF', iconColor: '#E67700' },
  { number: '145', label: 'Denuncia de Trata',                Icon: Scale,          bgColor: '#E8F0FE', iconColor: '#3B5BDB' },
  { number: '149', label: 'Víctimas de delitos',              Icon: Landmark,       bgColor: '#EEF2FF', iconColor: '#3B3F8C' },
]

// ─── Mock user ────────────────────────────────────────────────────────────────
export const MOCK_USER: UserProfile = {
  name: 'Valentín Perez',
  cuil: '20-34567890-1',
  email: 'valentin.perez@gmail.com',
  phone: '+54 9 11 3910 1010',
  address: 'Av. Corrientes 1234, CABA',
  dni: '34.567.890',
  birthdate: '15/03/1990',
  gender: 'Masculino',
  nationality: 'Argentina',
  initials: 'VP',
  isVerified: true,
}

// ─── Tina WhatsApp ────────────────────────────────────────────────────────────
export const TINA_URL = 'https://api.whatsapp.com/send?phone=541139101010'

// ─── External links ──────────────────────────────────────────────────────────
export const TERMS_URL = 'https://www.argentina.gob.ar/miargentina/terminos-y-condiciones'
export const VACUNAS_URL = 'https://www.argentina.gob.ar/salud/vacunas'
export const RECETA_ELECTRONICA_URL = 'https://www.argentina.gob.ar/noticias/la-receta-electronica-se-incorpora-la-app-mi-argentina'
