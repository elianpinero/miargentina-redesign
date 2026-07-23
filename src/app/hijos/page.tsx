'use client'

import { motion } from 'framer-motion'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { EmptyState } from '@/components/composite/EmptyState'
import { Button } from '@/components/primitives/Button'
import { PageContainer } from '@/layouts/PageContainer'

export default function HijosPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Hijos" subtitle="Menores asociados" />
      <PageContainer>
        <EmptyState
          emoji="👶"
          emojiLabel="Sin hijos asociados"
          title="Sin hijos asociados"
          description="Asociá a tus hijos menores a tu perfil para acceder a sus documentos"
          action={
            <Button size="sm" variant="primary" className="!w-auto px-6">
              Asociar un hijo/a
            </Button>
          }
        />
      </PageContainer>
    </motion.div>
  )
}
