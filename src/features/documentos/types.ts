// ─── Feature: Documentos ──────────────────────────────────────────────────────

export type DocumentoEstado = 'vigente' | 'por_vencer' | 'vencido' | 'disponible'

export interface DocumentoItem {
  id: string
  titulo: string
  subtitulo: string
  vencimiento: string | null
  estado: DocumentoEstado
  proveedor: string
}

export const DOCUMENTO_ESTADO_LABEL: Record<DocumentoEstado, string> = {
  vigente: 'Vigente',
  por_vencer: 'Por vencer',
  vencido: 'Vencido',
  disponible: 'Disponible',
}

export const DOCUMENTO_ESTADO_BADGE: Record<DocumentoEstado, 'green' | 'gold' | 'red' | 'blue'> = {
  vigente: 'green',
  por_vencer: 'gold',
  vencido: 'red',
  disponible: 'blue',
}

// Mock data — replace with documentosService.getDocumentos()
export const MOCK_DOCUMENTOS: DocumentoItem[] = [
  {
    id: 'dni',
    titulo: 'Documento Nacional de Identidad (DNI)',
    subtitulo: 'Válido ante organismos oficiales',
    vencimiento: '12/03/2030',
    estado: 'vigente',
    proveedor: 'RENAPER',
  },
  {
    id: 'pasaporte',
    titulo: 'Pasaporte',
    subtitulo: 'República Argentina',
    vencimiento: '05/07/2028',
    estado: 'vigente',
    proveedor: 'RENAPER',
  },
  {
    id: 'licencia',
    titulo: 'Licencia Nacional de Conducir',
    subtitulo: 'Categoría B · CABA',
    vencimiento: '18/09/2025',
    estado: 'por_vencer',
    proveedor: 'ANSV',
  },
]
