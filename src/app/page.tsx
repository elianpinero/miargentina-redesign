'use client'

import { motion } from 'framer-motion'
import { Calendar, IdCard, CheckCircle2, PartyPopper } from 'lucide-react'
import { DashboardHeader, DashboardGreeting } from '@/components/composite/AppHeader'
import { ServiceGrid } from '@/components/composite/ServiceGrid'
import { InfoBanner } from '@/components/composite/InfoBanner'
import { StatusCard } from '@/components/composite/StatusCard'
import { Card } from '@/components/primitives/Card'
import { Button } from '@/components/primitives/Button'
import { pageVariants, staggerContainer, staggerItem } from '@/design-system/motion'
import { getNextFeriado, formatFeriadoDate } from '@/utils/feriados'

export default function DashboardPage() {
  const handleMenuOpen = () => { window.__openDrawer?.() }
  const nextFeriado = getNextFeriado()

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <DashboardHeader onMenuOpen={handleMenuOpen} />

      {/* Greeting + status cards — one continuous header gradient */}
      <div className="header-gradient px-4 pb-5">
        <DashboardGreeting />
        <motion.div className="grid grid-cols-2 gap-3" variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={staggerItem}>
            <StatusCard label="PRÓXIMO TURNO" value="Sin turnos" sub="Solicitá un turno" icon={Calendar} />
          </motion.div>
          <motion.div variants={staggerItem}>
            <StatusCard label="CREDENCIALES" value="Al día" sub="DNI · Vence 2030" icon={IdCard} verified />
          </motion.div>
        </motion.div>
      </div>

      {/* Body */}
      <div className="px-4 pt-4 pb-6 bg-surface-secondary space-y-4">
        {/* Turnos card */}
        <Card noPadding className="p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-ios bg-[#EEF2FF] flex items-center justify-center shrink-0" aria-hidden="true">
              <Calendar size={18} color="#3B5BDB" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-sans font-bold text-body-sm text-text-primary leading-tight">No tenés turnos programados</p>
              <p className="font-sans text-caption text-text-secondary mt-0.5">Agendá tu próximo turno</p>
            </div>
          </div>
          <Button size="sm" variant="primary" className="shrink-0 !w-auto" onClick={() => (window.location.href = '/turnos')}>
            Solicitá acá
          </Button>
        </Card>

        {/* Credenciales card */}
        <Card noPadding className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-ios bg-success-soft flex items-center justify-center shrink-0" aria-hidden="true">
            <CheckCircle2 size={18} color="#16A34A" strokeWidth={1.8} />
          </div>
          <p className="font-sans font-bold text-body-sm text-success-text">¡Todas tus credenciales están al día!</p>
        </Card>

        {/* Service Grid 4×2 */}
        <div>
          <p className="section-label mb-3">Accesos rápidos</p>
          <ServiceGrid />
        </div>

        {/* Feriado banner */}
        {nextFeriado && (
          <InfoBanner
            icon={PartyPopper}
            iconAriaLabel="Feriado nacional"
            title="Próximo feriado"
            body={`${formatFeriadoDate(nextFeriado.date)} - ${nextFeriado.label}`}
            variant="info"
          />
        )}
      </div>
    </motion.div>
  )
}
