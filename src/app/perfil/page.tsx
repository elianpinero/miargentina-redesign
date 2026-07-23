'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, CreditCard, Cake, Globe, Check } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { Avatar, Badge, Card, CardRow } from '@/components/primitives'
import { PageContainer } from '@/layouts/PageContainer'
import { MOCK_USER } from '@/utils/constants'

const personalFields = [
  { Icon: Mail,       label: 'Email',        value: MOCK_USER.email },
  { Icon: Phone,      label: 'Teléfono',     value: MOCK_USER.phone },
  { Icon: MapPin,     label: 'Domicilio',    value: MOCK_USER.address },
  { Icon: CreditCard, label: 'DNI',          value: MOCK_USER.dni },
  { Icon: Cake,       label: 'Nacimiento',   value: `${MOCK_USER.birthdate} - ${MOCK_USER.gender}` },
  { Icon: Globe,      label: 'Nacionalidad', value: MOCK_USER.nationality },
] as const

export default function PerfilPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Mi perfil" subtitle="Tus datos personales" />
      <PageContainer className="space-y-3">

        {/* Identity header */}
        <Card className="flex items-center gap-3.5">
          <Avatar initials={MOCK_USER.initials} size="xl" />
          <div>
            <p className="font-sans font-extrabold text-title-lg text-text-primary leading-tight">
              {MOCK_USER.name}
            </p>
            <p className="font-sans text-caption text-text-secondary mt-0.5">
              CUIL {MOCK_USER.cuil}
            </p>
            <Badge variant="green" className="mt-1.5">
              <Check size={10} strokeWidth={3} />
              Identidad validada
            </Badge>
          </div>
        </Card>

        {/* Personal data */}
        <Card noPadding>
          {personalFields.map(({ Icon, label, value }, i) => (
            <CardRow key={label} last={i === personalFields.length - 1}>
              <div className="w-9 h-9 rounded-ios-sm bg-surface-secondary flex items-center justify-center shrink-0">
                <Icon size={17} color="#0B1742" strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                  {label}
                </p>
                <p className="font-sans font-semibold text-body-sm text-text-primary truncate">
                  {value}
                </p>
              </div>
            </CardRow>
          ))}
        </Card>
      </PageContainer>
    </motion.div>
  )
}
