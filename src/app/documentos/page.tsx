'use client'

import { motion } from 'framer-motion'
import { IdCard, Car, Fingerprint, Info, CheckCircle2 } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { AccordionItem } from '@/components/composite/AccordionItem'
import { Button, Divider } from '@/components/primitives'
import { PageContainer } from '@/layouts/PageContainer'
import { MOCK_USER } from '@/utils/constants'

// ─── Decorative QR code — deterministic pattern, not a real scannable code ────
function DecorativeQRCode({ size = 152 }: { size?: number }) {
  const gridSize = 21
  const finderSize = 7
  const cellSize = size / gridSize

  const inFinderZone = (row: number, col: number) =>
    (row < finderSize && col < finderSize) ||
    (row < finderSize && col >= gridSize - finderSize) ||
    (row >= gridSize - finderSize && col < finderSize)

  const cells: { row: number; col: number }[] = []
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (inFinderZone(row, col)) continue
      if ((row * 13 + col * 7 + row * col) % 5 < 2) cells.push({ row, col })
    }
  }

  const finderOrigins = [
    [0, 0],
    [gridSize - finderSize, 0],
    [0, gridSize - finderSize],
  ]

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Código QR de la licencia">
      <rect width={size} height={size} fill="white" />
      {cells.map(({ row, col }) => (
        <rect key={`${row}-${col}`} x={col * cellSize} y={row * cellSize} width={cellSize} height={cellSize} fill="#0B1742" />
      ))}
      {finderOrigins.map(([col, row]) => (
        <g key={`${row}-${col}`} transform={`translate(${col * cellSize}, ${row * cellSize})`}>
          <rect width={cellSize * finderSize} height={cellSize * finderSize} fill="#0B1742" />
          <rect x={cellSize} y={cellSize} width={cellSize * 5} height={cellSize * 5} fill="white" />
          <rect x={cellSize * 2} y={cellSize * 2} width={cellSize * 3} height={cellSize * 3} fill="#0B1742" />
        </g>
      ))}
    </svg>
  )
}

// ─── Info row — icon + text, used under each document section ────────────────
function InfoRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <Info size={17} color="#0B1742" strokeWidth={1.8} className="shrink-0 mt-0.5" />
      <p className="font-sans text-body-sm text-text-primary leading-relaxed">{children}</p>
    </div>
  )
}

export default function DocumentosPage() {
  const [nombre, ...apellidoParts] = MOCK_USER.name.split(' ')
  const apellido = apellidoParts.join(' ')

  const today = new Date()
  const lastUpdated = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Documentos" subtitle="Tu documentación oficial" />
      <PageContainer className="space-y-2.5">

        {/* DNI */}
        <AccordionItem
          title="Documento Nacional de Identidad (DNI)"
          icon={IdCard}
          iconBg="#E8F0FE"
          iconColor="#3B5BDB"
          defaultOpen
        >
          <div className="space-y-4">
            <div className="space-y-3">
              <Button variant="primary" fullWidth>
                Ver DNI Digital
              </Button>
              <p className="font-sans text-caption text-text-secondary text-center">
                Datos suministrados por <span className="font-semibold text-info">RENAPER</span>
              </p>
            </div>

            <Divider />

            <div className="space-y-3">
              <p className="font-sans text-body-sm text-text-primary leading-relaxed">
                Recordá que podés solicitar el DNI para vos y tus hijos y tenerlos disponibles en la App.
              </p>
              <Button variant="outline" fullWidth>
                Solicitar DNI Digital
              </Button>
            </div>

            <Divider />

            <InfoRow>
              <button type="button" className="font-semibold text-info text-left">
                Cambié o voy a cambiar de dispositivo
              </button>
            </InfoRow>
          </div>
        </AccordionItem>

        {/* Licencia */}
        <AccordionItem
          title="Licencia Nacional de Conducir"
          icon={Car}
          iconBg="#E3F9E5"
          iconColor="#2B8A3E"
          defaultOpen
        >
          <div className="space-y-4">
            <p className="font-sans text-body-sm text-text-primary leading-relaxed">
              Si te retuvieron o inhabilitaron la licencia física, no podés circular con la licencia digital.
              Hacerlo constituye un delito.
            </p>

            <div className="flex flex-col items-center gap-2 py-2">
              <DecorativeQRCode />
              <p className="font-sans text-caption text-text-secondary">
                Última actualización {lastUpdated}
              </p>
            </div>

            <Divider />

            <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
              <div>
                <p className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Estado
                </p>
                <p className="flex items-center gap-1.5 font-sans font-bold text-body-sm text-success">
                  <CheckCircle2 size={16} strokeWidth={2} />
                  Vigente
                </p>
              </div>
              <div>
                <p className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Vencimiento
                </p>
                <p className="font-sans font-bold text-body-sm text-text-primary">18/09/2029</p>
              </div>
              <div>
                <p className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Nombre
                </p>
                <p className="font-sans font-bold text-body-sm text-text-primary">{nombre}</p>
              </div>
              <div>
                <p className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Apellido
                </p>
                <p className="font-sans font-bold text-body-sm text-text-primary">{apellido}</p>
              </div>
              <div className="col-span-2">
                <p className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Número de DNI
                </p>
                <p className="font-sans font-bold text-body-sm text-text-primary">{MOCK_USER.dni}</p>
              </div>
            </div>

            <Button variant="primary" fullWidth>
              Ver mi licencia
            </Button>

            <p className="font-sans text-caption text-text-secondary">
              Datos suministrados por la{' '}
              <span className="font-semibold text-info">Secretaría de Transporte de la Nación</span>.
            </p>

            <Divider />

            <InfoRow>
              Si los datos o tu vigencia está desactualizada,{' '}
              <button type="button" className="font-semibold text-info">
                solicitá la rectificación
              </button>{' '}
              en la Agencia Nacional de Seguridad Vial.
            </InfoRow>
          </div>
        </AccordionItem>

        {/* Antecedentes */}
        <AccordionItem
          title="Antecedentes Penales"
          icon={Fingerprint}
          iconBg="#F3F0FF"
          iconColor="#7048E8"
        >
          <div className="space-y-3">
            <p className="font-sans text-body-sm text-text-primary leading-relaxed">
              Recordá que podés solicitarlo con tu cuenta de Mi Argentina.
            </p>
            <Button variant="outline" fullWidth>
              Solicitar certificado
            </Button>
            <p className="font-sans text-caption text-text-secondary">
              Datos suministrados por{' '}
              <span className="font-semibold text-info">Registro Nacional de Reincidencia</span>
            </p>
          </div>
        </AccordionItem>
      </PageContainer>
    </motion.div>
  )
}
