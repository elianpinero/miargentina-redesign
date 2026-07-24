'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { RotateCw, UserRound } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { ArgentinaFlag } from '@/components/composite/ArgentinaFlag'
import { QRCode } from '@/components/composite/QRCode'
import { PageContainer } from '@/layouts/PageContainer'
import { MOCK_USER } from '@/utils/constants'

// New polycarbonate DNI design per Disposición 55/2026 — light security-blue
// card with a faint diagonal hatch standing in for the guilloché pattern.
const cardBackground = {
  backgroundImage:
    'linear-gradient(135deg, #EAF6FB 0%, #D9EDF7 100%), ' +
    'repeating-linear-gradient(45deg, rgba(11,23,66,0.035) 0px, rgba(11,23,66,0.035) 1px, transparent 1px, transparent 6px)',
}

const SEXO_LABEL: Record<string, string> = { Masculino: 'M', Femenino: 'F' }

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[6px] font-semibold text-navy-900/55 uppercase tracking-wide leading-none">
      {children}
    </p>
  )
}

export default function DniDigitalPage() {
  const [flipped, setFlipped] = useState(false)

  const [nombre, ...apellidoParts] = MOCK_USER.name.split(' ')
  const apellido = apellidoParts.join(' ')
  const sexo = SEXO_LABEL[MOCK_USER.gender] ?? 'X'
  const dniDigits = MOCK_USER.dni.replace(/\D/g, '')

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="DNI Digital" subtitle="Documento Nacional de Identidad" />
      <PageContainer className="flex flex-col items-center gap-5">

        <div className="w-full" style={{ perspective: 1400 }}>
          <motion.button
            type="button"
            onClick={() => setFlipped((prev) => !prev)}
            aria-label={flipped ? 'Ver frente del DNI' : 'Ver dorso del DNI'}
            className="relative w-full aspect-[856/540] cursor-pointer"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* ─── Front ─── */}
            <div
              className="absolute inset-0 rounded-2xl border border-[#B8D4E8] shadow-card overflow-hidden text-left"
              style={{ ...cardBackground, backfaceVisibility: 'hidden' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- local static SVG watermark */}
              <img
                src="/images/escudo-nacional.svg"
                alt=""
                aria-hidden="true"
                className="absolute -right-5 -bottom-6 h-32 w-auto opacity-[0.07] pointer-events-none"
              />
              <div className="relative h-full p-3.5 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local static SVG, no image optimization needed */}
                  <img src="/images/escudo-nacional.svg" alt="" aria-hidden="true" className="h-5 w-auto shrink-0" />
                  <div className="leading-none">
                    <p className="font-sans font-extrabold text-[8px] text-navy-900 tracking-wide">
                      REPÚBLICA ARGENTINA
                    </p>
                    <p className="font-sans font-bold text-[6.5px] text-navy-900/70 tracking-wide">
                      DOCUMENTO NACIONAL DE IDENTIDAD
                    </p>
                  </div>
                </div>

                {/* Photo + fields */}
                <div className="flex gap-3 mt-2.5">
                  <div className="w-[68px] h-[86px] rounded-md bg-white/70 border border-[#B8D4E8] flex items-center justify-center shrink-0 overflow-hidden">
                    <UserRound size={38} color="#8AA3B8" strokeWidth={1.2} />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div>
                      <FieldLabel>Apellido / Surname</FieldLabel>
                      <p className="text-[11px] font-extrabold text-navy-900 leading-tight truncate">{apellido}</p>
                    </div>
                    <div>
                      <FieldLabel>Nombre / Name</FieldLabel>
                      <p className="text-[11px] font-extrabold text-navy-900 leading-tight truncate">{nombre}</p>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <FieldLabel>Sexo / Sex</FieldLabel>
                        <p className="text-[10px] font-bold text-navy-900 leading-tight">{sexo}</p>
                      </div>
                      <div>
                        <FieldLabel>Nacionalidad / Nationality</FieldLabel>
                        <p className="text-[10px] font-bold text-navy-900 leading-tight">
                          {MOCK_USER.nationality.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1" />

                {/* Document number + flag */}
                <div className="flex items-end justify-between">
                  <div>
                    <FieldLabel>Documento / Document</FieldLabel>
                    <p className="text-[15px] font-extrabold text-navy-900 leading-none tracking-wide">
                      {MOCK_USER.dni}
                    </p>
                  </div>
                  <ArgentinaFlag className="w-6 h-4" />
                </div>

                {/* Dates */}
                <div className="flex items-end justify-between mt-1.5">
                  <div>
                    <FieldLabel>Fecha de emisión</FieldLabel>
                    <p className="text-[9px] font-bold text-navy-900 leading-tight">15.03.2015</p>
                  </div>
                  <div>
                    <FieldLabel>Fecha de vencimiento</FieldLabel>
                    <p className="text-[9px] font-bold text-navy-900 leading-tight">15.03.2030</p>
                  </div>
                  <p className="text-[7px] font-semibold text-navy-900/50">Ejemplar A</p>
                </div>
              </div>
            </div>

            {/* ─── Back ─── */}
            <div
              className="absolute inset-0 rounded-2xl border border-[#B8D4E8] shadow-card overflow-hidden text-left"
              style={{ ...cardBackground, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- local static SVG watermark */}
              <img
                src="/images/escudo-nacional.svg"
                alt=""
                aria-hidden="true"
                className="absolute -left-5 -top-6 h-32 w-auto opacity-[0.07] pointer-events-none"
              />
              <div className="relative h-full p-3.5 flex flex-col">
                <div className="space-y-1.5">
                  <div>
                    <FieldLabel>Domicilio</FieldLabel>
                    <p className="text-[10px] font-bold text-navy-900 leading-tight">{MOCK_USER.address}</p>
                  </div>
                  <div>
                    <FieldLabel>Lugar de nacimiento</FieldLabel>
                    <p className="text-[10px] font-bold text-navy-900 leading-tight">
                      Ciudad Autónoma de Buenos Aires
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <FieldLabel>CUIL</FieldLabel>
                      <p className="text-[10px] font-bold text-navy-900 leading-tight">{MOCK_USER.cuil}</p>
                    </div>
                    <div>
                      <FieldLabel>Trámite N°</FieldLabel>
                      <p className="text-[10px] font-bold text-navy-900 leading-tight">0089203447</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1" />

                <div className="flex items-end justify-between gap-3">
                  <div className="font-mono text-[6.5px] text-navy-900/70 leading-[1.5] tracking-wider break-all">
                    <p>{'REPUBLICA<ARGENTINA<<<<<<<<<<<<<<<<<<<<<<'}</p>
                    <p>{`${apellido.toUpperCase()}<<${nombre.toUpperCase()}<<<<<<<<<<<<<`}</p>
                    <p>{`${dniDigits}<0ARG<${sexo}<<<<<<<<<<<<<0`}</p>
                  </div>
                  <QRCode size={62} label="Código QR del DNI digital" className="shrink-0" />
                </div>
              </div>
            </div>
          </motion.button>
        </div>

        <button
          type="button"
          onClick={() => setFlipped((prev) => !prev)}
          className="inline-flex items-center gap-2 font-sans font-semibold text-body-sm text-navy-900"
        >
          <RotateCw size={16} strokeWidth={2} />
          {flipped ? 'Ver frente' : 'Ver dorso'}
        </button>

        <p className="font-sans text-caption text-text-secondary text-center max-w-[280px]">
          Este documento digital tiene la misma validez que tu DNI físico, según la
          Disposición 55/2026.
        </p>
      </PageContainer>
    </motion.div>
  )
}
