'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, IdCard, Car, Bike } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { AccordionItem } from '@/components/composite/AccordionItem'
import { Badge } from '@/components/primitives'
import { InfoBanner } from '@/components/composite/InfoBanner'
import { LicensePlate } from '@/components/composite/LicensePlate'
import { PageContainer } from '@/layouts/PageContainer'

const vehiculosHabilitados = [
  {
    nombre: 'Ford EcoSport 2021',
    Icon: Car,
    patente: 'AB123DC',
    variant: 'car' as const,
    vtv: '11/2025',
  },
  {
    nombre: 'Honda Wave 110 2019',
    Icon: Bike,
    patente: 'A123BCD',
    variant: 'moto' as const,
    vtv: '03/2025',
  },
]

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
              { label: 'Categoría', value: 'A1.2 B1', badge: null },
              { label: 'Vence',    value: null,       badge: <Badge variant="gold">18/09/2029</Badge> },
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
          <div className="space-y-3">
            {vehiculosHabilitados.map(({ nombre, Icon, patente, variant, vtv }) => (
              <div key={patente} className="border border-surface-tertiary/60 rounded-ios-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon size={16} color="#6B7280" strokeWidth={1.8} />
                    <p className="font-sans font-bold text-body text-text-primary">{nombre}</p>
                  </div>
                  <Badge variant="green">Al día</Badge>
                </div>

                {/* Patente */}
                <LicensePlate plate={patente} variant={variant} />

                <p className="font-sans text-caption text-text-secondary">VTV: {vtv}</p>
              </div>
            ))}
          </div>
        </AccordionItem>
      </PageContainer>
    </motion.div>
  )
}
