'use client'

import { motion } from 'framer-motion'
import { Star, Smartphone } from 'lucide-react'
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
          {/* eslint-disable-next-line @next/next/no-img-element -- local static SVG, no image optimization needed */}
          <img
            src="/images/escudo-nacional.svg"
            alt="Escudo Nacional Argentino"
            className="h-20 w-auto mx-auto mb-4"
            style={{ filter: 'drop-shadow(0 8px 16px rgba(11,23,66,0.25))' }}
          />
          <p className="font-serif font-bold text-[20px] text-text-primary">Mi Argentina</p>
          <p className="font-sans text-body-sm text-text-secondary mt-1.5">Versión 8.0</p>
          <p className="font-sans text-caption text-text-secondary mt-0.5">
            Argentina Presidencia de la Nación
          </p>
        </div>

        {/* Actions */}
        <div className="w-full space-y-2.5">
          <Button variant="outline" fullWidth>
            <Star size={16} />
            Calificar aplicación
          </Button>
          <Button variant="outline" fullWidth>
            <Smartphone size={16} />
            Descargar más aplicaciones
          </Button>
        </div>
      </PageContainer>
    </motion.div>
  )
}
