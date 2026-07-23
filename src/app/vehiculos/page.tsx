'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, IdCard, Car } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { AccordionItem } from '@/components/composite/AccordionItem'
import { Badge } from '@/components/primitives'
import { InfoBanner } from '@/components/composite/InfoBanner'
import { PageContainer } from '@/layouts/PageContainer'

export default function VehiculosPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Vehículos" subtitle="Habilitaciones y licencias" />
      <PageContainer className="space-y-3">

        {/* Warning banner */}
        <InfoBanner
          icon={AlertTriangle}
          variant="warning"
          title="Viajes al exterior"
          body="Si viajás al exterior y no contás con cédula física y/o patente, comunicate con la DNRPA para asesorarte"
        />

        {/* Licencia accordion */}
        <AccordionItem
          title="Licencia Nacional de Conducir"
          icon={IdCard}
          iconBg="#E8F0FE"
          iconColor="#3B5BDB"
          defaultOpen
        >
          <ul className="divide-y divide-surface-tertiary/60">
            {[
              { label: 'Categoría', value: 'B - Automóviles', badge: null },
              { label: 'Vence',    value: null,               badge: <Badge variant="gold">18/09/2025</Badge> },
              { label: 'Estado',  value: null,               badge: <Badge variant="green">Vigente</Badge> },
            ].map(({ label, value, badge }) => (
              <li key={label} className="flex items-center justify-between py-2.5">
                <span className="font-sans text-caption text-text-secondary">{label}</span>
                {badge ?? <span className="font-sans font-bold text-caption text-text-primary">{value}</span>}
              </li>
            ))}
          </ul>
        </AccordionItem>

        {/* Vehículos accordion */}
        <AccordionItem
          title="Vehículos habilitados a conducir"
          icon={Car}
          iconBg="#E3F9E5"
          iconColor="#2B8A3E"
        >
          <div className="border border-surface-tertiary/60 rounded-ios-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-sans font-bold text-body text-text-primary">Ford EcoSport 2021</p>
              <Badge variant="green">Al día</Badge>
            </div>

            {/* Patente plate */}
            <div
              className="inline-flex items-center justify-center rounded-[10px] bg-navy-900 px-4 py-2"
              aria-label="Patente AB240SC"
            >
              <span className="font-sans font-extrabold text-[20px] text-gold-500 tracking-[3px]">
                AB240SC
              </span>
            </div>

            <p className="font-sans text-caption text-text-secondary">VTV: 11/2025</p>
          </div>
        </AccordionItem>
      </PageContainer>
    </motion.div>
  )
}
