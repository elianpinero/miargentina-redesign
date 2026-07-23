'use client'

import { motion } from 'framer-motion'
import { Download, Briefcase } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { Card } from '@/components/primitives/Card'
import { Button } from '@/components/primitives/Button'
import { PageContainer } from '@/layouts/PageContainer'
import { MOCK_USER } from '@/utils/constants'

export default function TrabajoPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Trabajo" subtitle="Tu situación laboral" />
      <PageContainer className="space-y-3">

        {/* CUIL Card */}
        <Card className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-ios-lg bg-warning-soft flex items-center justify-center shrink-0" aria-hidden="true">
              <Briefcase size={24} color="#E67700" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-sans font-extrabold text-title-lg text-text-primary">{MOCK_USER.name}</p>
              <p className="font-sans text-caption text-text-secondary mt-0.5">Empleado registrado</p>
            </div>
          </div>

          {/* CUIL display */}
          <div className="bg-surface-secondary rounded-ios-lg p-3.5">
            <p className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
              Número de CUIL
            </p>
            <p className="font-sans font-extrabold text-[22px] text-navy-900 tracking-wide">
              {MOCK_USER.cuil}
            </p>
          </div>

          <Button variant="primary" fullWidth>
            <Download size={16} />
            Descargar constancia de CUIL
          </Button>

          <p className="font-sans text-caption text-text-secondary text-center">
            Datos suministrados por ANSES
          </p>
        </Card>

        {/* Aportes */}
        <Card>
          <p className="font-sans font-bold text-body text-text-primary mb-3">Aportes jubilatorios</p>
          <ul className="divide-y divide-surface-tertiary/60">
            {[
              { label: 'Empleador', value: 'Empresa ABC S.A.' },
              { label: 'Desde', value: 'Enero 2021' },
              { label: 'Meses aportados', value: '48' },
            ].map(({ label, value }) => (
              <li key={label} className="flex items-center justify-between py-2.5">
                <span className="font-sans text-caption text-text-secondary">{label}</span>
                <span className="font-sans font-bold text-caption text-text-primary">{value}</span>
              </li>
            ))}
          </ul>
        </Card>
      </PageContainer>
    </motion.div>
  )
}
