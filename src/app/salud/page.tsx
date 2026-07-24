'use client'

import { motion } from 'framer-motion'
import { ShieldPlus, Syringe, Heart, FilePlus2, ClipboardList } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { Card, Button, Divider } from '@/components/primitives'
import { PageContainer } from '@/layouts/PageContainer'

export default function SaludPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Salud" subtitle="Tu información médica" />
      <PageContainer className="space-y-3">

        {/* Cobertura de Salud */}
        <Card noPadding>
          <div className="p-4">
            <p className="font-sans font-bold text-body text-text-primary">Cobertura de Salud</p>
          </div>
          <Divider />
          <div className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-ios bg-danger-soft flex items-center justify-center shrink-0" aria-hidden="true">
              <ShieldPlus size={18} color="#C92A2A" strokeWidth={1.8} />
            </div>
            <p className="font-sans text-body-sm text-text-primary">
              No se registra cobertura actualmente.
            </p>
          </div>
          <Divider />
          <div className="p-4">
            <p className="font-sans text-caption text-text-secondary">
              Datos suministrados por el <span className="font-semibold text-info">Ministerio de Salud.</span>
            </p>
          </div>
        </Card>

        {/* Certificado de vacunación COVID-19 */}
        <Card noPadding>
          <div className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-ios bg-success-soft flex items-center justify-center shrink-0" aria-hidden="true">
              <Syringe size={18} color="#2B8A3E" strokeWidth={1.8} />
            </div>
            <p className="font-sans font-bold text-body text-text-primary">Certificado de vacunación COVID 19</p>
          </div>
          <Divider />
          <div className="p-4 space-y-3">
            <p className="font-sans text-body-sm text-text-primary leading-relaxed">
              Tu esquema de vacunación contra COVID-19 está completo.
            </p>
            <Button variant="primary" fullWidth>Ver certificado</Button>
          </div>
        </Card>

        {/* Donación de órganos */}
        <Card noPadding>
          <div className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-ios bg-danger-soft flex items-center justify-center shrink-0" aria-hidden="true">
              <Heart size={18} color="#C92A2A" strokeWidth={1.8} />
            </div>
            <p className="font-sans font-bold text-body text-text-primary">Donación de órganos</p>
          </div>
          <Divider />
          <div className="p-4 space-y-3">
            <p className="font-sans text-body-sm text-text-primary leading-relaxed">
              En Argentina, toda persona es donante de órganos salvo que haya expresado en vida
              su voluntad de no serlo.
            </p>
            <Button variant="outline" fullWidth>Registrar voluntad</Button>
          </div>
        </Card>

        {/* Recetas electrónicas */}
        <Card noPadding>
          <div className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-ios bg-success-soft flex items-center justify-center shrink-0" aria-hidden="true">
              <FilePlus2 size={18} color="#16A34A" strokeWidth={1.8} />
            </div>
            <p className="font-sans font-bold text-body text-text-primary">Recetas electrónicas</p>
          </div>
          <Divider />
          <div className="p-4 space-y-3">
            <p className="font-sans text-body-sm text-text-primary leading-relaxed">
              Consultá la información de las órdenes y/o recetas que te prescribieron en los
              últimos 60 días.
            </p>
            <Button variant="primary" fullWidth>Ver recetas</Button>
          </div>
          <Divider />
          <div className="p-4">
            <p className="font-sans text-caption text-text-secondary">
              Datos suministrados por{' '}
              <span className="font-semibold text-info">Repositorios registrados en el ReNaPDiS</span>
            </p>
          </div>
        </Card>

        {/* Vacunas de calendario */}
        <Card noPadding className="p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-ios bg-success-soft flex items-center justify-center shrink-0" aria-hidden="true">
              <ClipboardList size={18} color="#16A34A" strokeWidth={1.8} />
            </div>
            <p className="font-sans font-bold text-body text-text-primary">Vacunas de calendario</p>
          </div>
          <Button size="sm" variant="primary" className="!w-auto">Ver vacunas</Button>
        </Card>
      </PageContainer>
    </motion.div>
  )
}
