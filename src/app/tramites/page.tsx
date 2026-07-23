'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { Card } from '@/components/primitives/Card'
import { Button } from '@/components/primitives/Button'
import { PageContainer } from '@/layouts/PageContainer'

export default function TramitesPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Trámites" subtitle="Gestiones disponibles" />
      <PageContainer className="space-y-3">

        {/* Turnos */}
        <Card className="space-y-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-ios-lg bg-warning-soft flex items-center justify-center text-2xl shrink-0" aria-hidden="true">📅</div>
            <div>
              <p className="font-sans font-bold text-body text-text-primary">Turnos</p>
              <p className="font-sans text-caption text-text-secondary mt-0.5">Agendá turnos en organismos del Estado</p>
            </div>
          </div>
          <Link href="/turnos"><Button variant="primary" fullWidth>Ir a Turnos</Button></Link>
        </Card>

        {/* Subsidios */}
        <Card className="space-y-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-ios-lg bg-[#EEF2FF] flex items-center justify-center text-2xl shrink-0" aria-hidden="true">⚡</div>
            <p className="font-sans font-bold text-body text-text-primary">Subsidios</p>
          </div>
          <div className="py-2.5 border-b border-surface-tertiary/60">
            <p className="font-sans text-body-sm text-text-primary">Subsidios a la luz, gas y garrafa</p>
          </div>
          <Button variant="outline" fullWidth>Solicitar subsidios</Button>
        </Card>

        {/* Peajes */}
        <Card className="space-y-3.5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-ios-lg bg-success-soft flex items-center justify-center text-2xl shrink-0" aria-hidden="true">🛣️</div>
            <div>
              <p className="font-sans font-bold text-body text-text-primary">Exención de peajes</p>
              <p className="font-sans text-caption text-text-secondary mt-0.5">Solicitá tu pase libre</p>
            </div>
          </div>
          <Button variant="primary" fullWidth>Solicitá tu pase libre</Button>
        </Card>
      </PageContainer>
    </motion.div>
  )
}
