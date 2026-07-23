'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { Card } from '@/components/primitives/Card'
import { Button } from '@/components/primitives/Button'
import { PageContainer } from '@/layouts/PageContainer'
import { TINA_URL } from '@/utils/constants'

export default function CobrosPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Cobros" subtitle="Programas y beneficios" />
      <PageContainer className="space-y-3">

        {/* PAS Card */}
        <Card className="space-y-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-ios-lg bg-info-soft flex items-center justify-center text-2xl shrink-0" aria-hidden="true">💰</div>
            <div>
              <p className="font-sans font-bold text-body text-text-primary">Actualización de datos — PAS</p>
              <span className="inline-block mt-1 text-[10px] font-bold bg-warning-soft text-warning-text rounded-pill px-2.5 py-0.5">
                Acción requerida
              </span>
            </div>
          </div>
          <p className="font-sans text-body-sm text-text-secondary leading-relaxed">
            Si sos beneficiario del Programa de Acompañamiento Social, actualizá tus datos para continuar recibiendo el beneficio.
          </p>
          <Button variant="gold" fullWidth>Ingresar</Button>
        </Card>

        {/* Ayuda card */}
        <Card className="space-y-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-ios-lg bg-[#EEF2FF] flex items-center justify-center text-2xl shrink-0" aria-hidden="true">🤝</div>
            <p className="font-sans font-bold text-body text-text-primary">¿Necesitás ayuda?</p>
          </div>
          <p className="font-sans text-body-sm text-text-secondary leading-relaxed">
            Nuestro equipo está disponible para responder tus consultas sobre cobros y beneficios.
          </p>
          <a href={TINA_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" fullWidth>Contactanos</Button>
          </a>
        </Card>
      </PageContainer>
    </motion.div>
  )
}
