'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { Button } from '@/components/primitives/Button'
import { PageContainer } from '@/layouts/PageContainer'

export default function AcercaDePage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Acerca de" />
      <PageContainer className="flex flex-col items-center gap-6">
        {/* App icon + info */}
        <div className="text-center mt-4">
          <div
            className="w-20 h-20 rounded-[22px] header-gradient flex items-center justify-center mx-auto mb-4"
            style={{ boxShadow: '0 8px 24px rgba(11,23,66,0.25)' }}
            aria-hidden="true"
          >
            <span className="font-serif font-bold text-[22px] text-gold-500">Mi</span>
          </div>
          <p className="font-serif font-bold text-[20px] text-text-primary">Mi Argentina</p>
          <p className="font-sans text-body-sm text-text-secondary mt-1.5">Versión 7.6.4</p>
          <p className="font-sans text-caption text-text-secondary mt-0.5">
            Argentina Presidencia de la Nación
          </p>
        </div>

        {/* Actions */}
        <div className="w-full space-y-2.5">
          <Button variant="outline" fullWidth>
            ⭐ Calificar aplicación
          </Button>
          <Button variant="outline" fullWidth>
            📲 Descargar más aplicaciones
          </Button>
          <button className="w-full py-3 font-sans font-semibold text-body text-navy-900 underline underline-offset-2">
            Términos y condiciones
          </button>
        </div>
      </PageContainer>
    </motion.div>
  )
}
