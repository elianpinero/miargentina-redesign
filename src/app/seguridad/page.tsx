'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Key, Trash2, Lock } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { ModuleHeader } from '@/components/composite/AppHeader'
import { Card, CardRow } from '@/components/primitives/Card'
import { Button } from '@/components/primitives/Button'
import { PageContainer } from '@/layouts/PageContainer'

export default function SeguridadPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <ModuleHeader title="Seguridad y privacidad" />
      <PageContainer className="space-y-3">

        <Card noPadding>
          <CardRow>
            <div className="w-9 h-9 rounded-ios-sm bg-[#EEF2FF] flex items-center justify-center shrink-0">
              <Key size={18} color="#0B1742" strokeWidth={1.8} />
            </div>
            <p className="font-sans font-semibold text-body text-text-primary flex-1">Cambiar contraseña</p>
            <ChevronRight size={16} color="#9CA3AF" />
          </CardRow>
          <CardRow last>
            <div className="w-9 h-9 rounded-ios-sm bg-danger-soft flex items-center justify-center shrink-0">
              <Trash2 size={18} color="#C92A2A" strokeWidth={1.8} />
            </div>
            <p className="font-sans font-semibold text-body text-danger flex-1">Eliminar cuenta</p>
            <ChevronRight size={16} color="#9CA3AF" />
          </CardRow>
        </Card>

        {/* Face ID */}
        <Card className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-ios bg-[#EEF2FF] flex items-center justify-center shrink-0">
              <Lock size={20} color="#0B1742" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-sans font-bold text-body text-text-primary">Face ID</p>
              <p className="font-sans text-caption text-text-secondary mt-0.5">
                Usá Face ID para desbloquear la app
              </p>
            </div>
          </div>
          <Button size="sm" variant="ghost" className="shrink-0 !w-auto">
            Desactivar
          </Button>
        </Card>
      </PageContainer>
    </motion.div>
  )
}
