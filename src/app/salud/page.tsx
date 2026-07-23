'use client'

import { motion } from 'framer-motion'
import { Hospital, Syringe, Heart, ClipboardList } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { AccordionItem } from '@/components/composite/AccordionItem'
import { Card } from '@/components/primitives/Card'
import { Button } from '@/components/primitives/Button'
import { PageContainer } from '@/layouts/PageContainer'

export default function SaludPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Salud" subtitle="Tu información médica" />
      <PageContainer className="space-y-3">

        {/* Cobertura */}
        <div>
          <p className="section-label mb-2">Cobertura de salud</p>
          <Card className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-ios bg-danger-soft flex items-center justify-center shrink-0" aria-hidden="true">
              <Hospital size={18} color="#C92A2A" strokeWidth={1.8} />
            </div>
            <p className="font-sans font-semibold text-body-sm text-text-secondary">
              No se registra cobertura actualmente
            </p>
          </Card>
        </div>

        {/* Credenciales */}
        <div>
          <p className="section-label mb-2">Credenciales</p>
          <div className="space-y-2.5">
            <AccordionItem title="Certificado de vacunación COVID 19" icon={Syringe} iconBg="#E3F9E5" iconColor="#2B8A3E" defaultOpen>
              <div className="space-y-3">
                <p className="font-sans text-body-sm text-text-secondary leading-relaxed">
                  Tu esquema de vacunación contra COVID-19 está completo.
                </p>
                <Button variant="primary" fullWidth>Ver certificado</Button>
              </div>
            </AccordionItem>

            <AccordionItem title="Donación de órganos" icon={Heart} iconBg="#FFE3E3" iconColor="#C92A2A">
              <div className="space-y-3">
                <p className="font-sans text-body-sm text-text-secondary leading-relaxed">
                  En Argentina, toda persona es donante de órganos salvo que haya expresado en vida su voluntad de no serlo.
                </p>
                <Button variant="outline" fullWidth>Registrar voluntad</Button>
              </div>
            </AccordionItem>
          </div>
        </div>

        {/* Más información */}
        <div>
          <p className="section-label mb-2">Más información de salud</p>
          <Card noPadding className="p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-ios bg-success-soft flex items-center justify-center shrink-0" aria-hidden="true">
                <ClipboardList size={18} color="#16A34A" strokeWidth={1.8} />
              </div>
              <p className="font-sans font-bold text-body text-text-primary">Vacunas de calendario</p>
            </div>
            <Button size="sm" variant="primary" className="!w-auto">Ver vacunas</Button>
          </Card>
        </div>
      </PageContainer>
    </motion.div>
  )
}
