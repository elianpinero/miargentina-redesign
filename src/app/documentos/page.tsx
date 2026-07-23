'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { AccordionItem } from '@/components/composite/AccordionItem'
import { Button } from '@/components/primitives'
import { PageContainer } from '@/layouts/PageContainer'

export default function DocumentosPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Documentos" subtitle="Tu documentación oficial" />
      <PageContainer className="space-y-2.5">

        {/* DNI */}
        <AccordionItem
          title="Documento Nacional de Identidad (DNI)"
          iconEmoji="🪪"
          iconBg="#E8F0FE"
          defaultOpen
        >
          <div className="space-y-3">
            <Button variant="primary" fullWidth>
              Ver DNI Digital
            </Button>
            <p className="font-sans text-caption text-text-secondary text-center">
              Datos suministrados por RENAPER
            </p>
            <Button variant="outline" fullWidth>
              Solicitar DNI Digital
            </Button>
          </div>
        </AccordionItem>

        {/* Licencia */}
        <AccordionItem
          title="Licencia Nacional de Conducir"
          iconEmoji="🚗"
          iconBg="#E3F9E5"
        >
          <div className="space-y-3">
            <p className="font-sans text-body-sm text-text-secondary leading-relaxed">
              Tu licencia de conducir se encuentra registrada en el sistema nacional.
              Para ver el detalle completo, accedé al módulo de Vehículos.
            </p>
            <Button variant="outline" fullWidth onClick={() => (window.location.href = '/vehiculos')}>
              Ir a Vehículos
            </Button>
          </div>
        </AccordionItem>

        {/* Antecedentes */}
        <AccordionItem
          title="Antecedentes Penales"
          iconEmoji="📋"
          iconBg="#F3F0FF"
        >
          <div className="space-y-3">
            <p className="font-sans text-body-sm text-text-secondary leading-relaxed">
              Solicitá tu certificado de antecedentes penales en línea a través del
              Registro Nacional de Reincidencia.
            </p>
            <Button variant="primary" fullWidth>
              Solicitar certificado
            </Button>
          </div>
        </AccordionItem>
      </PageContainer>
    </motion.div>
  )
}
