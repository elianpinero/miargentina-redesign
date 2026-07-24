'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { UserPlus } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { Button } from '@/components/primitives'

export default function RegistroPage() {
  const router = useRouter()

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen flex flex-col items-center justify-center bg-surface-secondary px-8 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-5">
        <UserPlus size={28} color="#3B5BDB" strokeWidth={1.8} />
      </div>
      <h1 className="font-serif font-bold text-[22px] text-text-primary">Crear cuenta</h1>
      <p className="font-sans text-body-sm text-text-secondary mt-2 max-w-[260px]">
        Este flujo todavía no está disponible en esta demo. Volvé a la pantalla de ingreso
        para probar con el usuario de prueba.
      </p>
      <Button variant="primary" className="mt-6 !w-auto px-8" onClick={() => router.push('/login/ingresar')}>
        Ir a Ingresar
      </Button>
    </motion.div>
  )
}
