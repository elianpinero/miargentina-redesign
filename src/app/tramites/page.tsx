'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Flame, Route, Info } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { Card, Button, Divider } from '@/components/primitives'
import { PageContainer } from '@/layouts/PageContainer'

export default function TramitesPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Trámites" subtitle="Gestiones disponibles" />
      <PageContainer className="space-y-3">

        {/* Intro */}
        <Card className="space-y-3.5">
          <p className="font-sans text-body-sm text-text-primary leading-relaxed">
            Consultá más trámites en <span className="font-semibold text-info">TramitAR</span> o
            sacá un turno en <span className="font-semibold text-info">Turnos</span>
          </p>
          <Link href="/turnos"><Button variant="primary" fullWidth>Ir a Turnos</Button></Link>
        </Card>

        {/* Subsidios */}
        <Card noPadding>
          <div className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-ios bg-[#EEF2FF] flex items-center justify-center shrink-0" aria-hidden="true">
              <Flame size={18} color="#3B5BDB" strokeWidth={1.8} />
            </div>
            <p className="font-sans font-bold text-body text-text-primary">
              Subsidios a la luz, gas y garrafa
            </p>
          </div>
          <Divider />
          <div className="p-4 space-y-3">
            <p className="font-sans text-body-sm text-text-primary leading-relaxed">
              No existe un registro con tu DNI. Verificá si alguno de tus convivientes realizó
              la inscripción y sino, completá la solicitud
            </p>
            <Button variant="outline" fullWidth>Solicitar subsidios</Button>
          </div>
          <Divider />
          <div className="p-4 flex items-start gap-2.5">
            <Info size={17} color="#0B1742" strokeWidth={1.8} className="shrink-0 mt-0.5" />
            <p className="font-sans text-body-sm text-text-primary leading-relaxed">
              Para más información ingresá a{' '}
              <span className="font-semibold text-info">www.argentina.gob.ar/subsidios</span>
            </p>
          </div>
        </Card>

        {/* Peajes */}
        <Card noPadding>
          <div className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-ios bg-success-soft flex items-center justify-center shrink-0" aria-hidden="true">
              <Route size={18} color="#16A34A" strokeWidth={1.8} />
            </div>
            <p className="font-sans font-bold text-body text-text-primary leading-tight">
              Solicitá la exención de pago de peajes para personas con discapacidad.
            </p>
          </div>
          <Divider />
          <div className="p-4 space-y-3">
            <p className="font-sans text-body-sm text-text-primary leading-relaxed">
              Vialidad Nacional otorga, a través de las empresas concesionarias, la exención del
              pago de peajes de rutas nacionales concesionadas para personas con discapacidad.
            </p>
            <Button variant="primary" fullWidth>Solicitá tu pase libre</Button>
          </div>
          <Divider />
          <button type="button" className="w-full p-4 flex items-start gap-2.5 text-left">
            <Info size={17} color="#0B1742" strokeWidth={1.8} className="shrink-0 mt-0.5" />
            <p className="font-sans font-semibold text-body-sm text-info leading-relaxed">
              Conocé más sobre el trámite de exención del pago de peajes para personas con
              discapacidad
            </p>
          </button>
        </Card>
      </PageContainer>
    </motion.div>
  )
}
