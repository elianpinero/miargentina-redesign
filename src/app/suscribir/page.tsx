'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { AccordionItem } from '@/components/composite/AccordionItem'
import { PageContainer } from '@/layouts/PageContainer'

const sections = [
  {
    emoji: '📄', iconBg: '#E8F0FE', title: 'Documentos',
    items: [
      'Antecedentes penales','Título secundario/terciario','Certificado de discapacidad (CUD)',
      'Pase Libre Multimodal','Matrícula profesional','Credenciales ANMAC',
      'Licencia aeronáutica','Certificación médica aeronáutica','Certificado náutico deportivo',
    ],
  },
  {
    emoji: '🚗', iconBg: '#E3F9E5', title: 'Vehículos',
    items: ['Licencia de conducir','Cédulas automotor','Símbolo automotor digital'],
  },
  {
    emoji: '❤️', iconBg: '#FFE3E3', title: 'Salud',
    items: [
      'Certificado vacuna COVID19','Credencial cannabis medicinal','Credencial trasplantado',
      'Credencial donante de órganos','Credencial médica','Cobertura de salud','Recetas electrónicas',
    ],
  },
  {
    emoji: '💼', iconBg: '#FFF3BF', title: 'Trabajo',
    items: ['Credencial de ART','Aportes empleadores'],
  },
]

export default function SuscribirPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Suscribir servicios" subtitle="Agregá credenciales a tu perfil" />
      <PageContainer className="space-y-2.5">
        {sections.map(({ emoji, iconBg, title, items }) => (
          <AccordionItem key={title} title={title} iconEmoji={emoji} iconBg={iconBg}>
            <ul className="divide-y divide-surface-tertiary/60">
              {items.map((item) => (
                <li key={item} className="flex items-center justify-between py-2.5">
                  <span className="font-sans text-body-sm text-text-primary">{item}</span>
                  <button className="bg-[#EEF2FF] text-navy-900 text-[11px] font-bold rounded-ios-sm px-3 py-1.5 transition-opacity active:opacity-70">
                    Agregar
                  </button>
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </PageContainer>
    </motion.div>
  )
}
