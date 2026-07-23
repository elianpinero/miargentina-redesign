// ─── Services Layer ───────────────────────────────────────────────────────────
// Thin API client wrappers. Replace mock data with real endpoints.
// All functions return typed Promises; errors propagate to React Error Boundaries.

import type { UserProfile } from '@/utils/constants'
import { MOCK_USER } from '@/utils/constants'

// ── Base client (replace with your API base URL) ──────────────────────────────
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? ''

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  })
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`)
  return res.json() as Promise<T>
}

// ── User service ──────────────────────────────────────────────────────────────
export const userService = {
  /**
   * Fetch authenticated user profile.
   * Replace with: apiFetch<UserProfile>('/api/perfil')
   */
  async getProfile(): Promise<UserProfile> {
    // Mock — remove when API is ready
    await new Promise((r) => setTimeout(r, 200))
    return MOCK_USER
  },
}

// ── Documentos service ────────────────────────────────────────────────────────
export interface Documento {
  id: string
  tipo: string
  numero: string
  vencimiento: string | null
  estado: 'vigente' | 'por_vencer' | 'vencido'
}

export const documentosService = {
  async getDocumentos(): Promise<Documento[]> {
    // Replace with: apiFetch<Documento[]>('/api/documentos')
    return [
      { id: '1', tipo: 'DNI', numero: '34.567.890', vencimiento: '2030-03-12', estado: 'vigente' },
      { id: '2', tipo: 'Pasaporte', numero: 'AAB123456', vencimiento: '2028-07-05', estado: 'vigente' },
      { id: '3', tipo: 'Licencia', numero: 'CAP-2019-12345', vencimiento: '2025-09-18', estado: 'por_vencer' },
    ]
  },
}

// ── Vehículos service ─────────────────────────────────────────────────────────
export interface Vehiculo {
  id: string
  modelo: string
  año: number
  patente: string
  vtv: string
  estado: 'al_dia' | 'vencida'
}

export const vehiculosService = {
  async getVehiculos(): Promise<Vehiculo[]> {
    // Replace with: apiFetch<Vehiculo[]>('/api/vehiculos')
    return [
      { id: '1', modelo: 'Ford EcoSport', año: 2021, patente: 'AB240SC', vtv: '2025-11', estado: 'al_dia' },
      { id: '2', modelo: 'Honda CB 500', año: 2019, patente: 'L456XYZ', vtv: '2025-08', estado: 'al_dia' },
    ]
  },
}

// ── Turnos service ────────────────────────────────────────────────────────────
export interface Turno {
  id: string
  organismo: string
  fecha: string
  hora: string
  lugar: string
  estado: 'confirmado' | 'pendiente' | 'cancelado'
}

export const turnosService = {
  async getTurnos(): Promise<Turno[]> {
    // Replace with: apiFetch<Turno[]>('/api/turnos')
    return []
  },

  async solicitarTurno(organismo: string, fecha: string): Promise<Turno> {
    return apiFetch<Turno>('/api/turnos', {
      method: 'POST',
      body: JSON.stringify({ organismo, fecha }),
    })
  },
}

// ── Cobros service ────────────────────────────────────────────────────────────
export interface Cobro {
  id: string
  programa: string
  importe: number
  estado: 'cobrado' | 'pendiente' | 'procesando'
  fecha: string
}

export const cobrosService = {
  async getCobros(): Promise<Cobro[]> {
    // Replace with: apiFetch<Cobro[]>('/api/cobros')
    return [
      { id: '1', programa: 'IFE - Ingreso Familiar', importe: 45000, estado: 'cobrado', fecha: '2025-04' },
      { id: '2', programa: 'Asignación Universal por Hijo', importe: 28500, estado: 'cobrado', fecha: '2025-05' },
    ]
  },
}

export { apiFetch }
