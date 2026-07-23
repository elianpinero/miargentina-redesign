'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Calendar } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { EmptyState } from '@/components/composite/EmptyState'
import { Card } from '@/components/primitives/Card'
import { Button } from '@/components/primitives/Button'
import { PageContainer } from '@/layouts/PageContainer'

const organismos = ['ANSES','RENAPER','AFIP','Ministerio de Salud','Registro Civil','Correo Argentino']

export default function TurnosPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Turnos" subtitle="Tus turnos agendados" />
      <PageContainer className="space-y-4">
        <EmptyState
          icon={Calendar}
          iconLabel="Sin turnos programados"
          title="Sin turnos programados"
          description="Agendá un turno en organismos del Estado de forma rápida y segura"
          action={<Button size="sm" variant="primary" className="!w-auto px-6">Solicitar turno</Button>}
        />

        <div>
          <p className="section-label mb-3">Organismos disponibles</p>
          <div className="space-y-2">
            {organismos.map((org) => (
              <Card key={org} noPadding interactive className="px-4 py-3.5 flex items-center justify-between">
                <span className="font-sans font-semibold text-body-sm text-text-primary">{org}</span>
                <ChevronRight size={16} color="#9CA3AF" />
              </Card>
            ))}
          </div>
        </div>
      </PageContainer>
    </motion.div>
  )
}
