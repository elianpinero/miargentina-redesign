'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { pageVariants } from '@/design-system/motion'
import { Button } from '@/components/primitives'

export default function LoginWelcomePage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen flex flex-col header-gradient"
    >
      {/* Branding */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element -- local static SVG, no image optimization needed */}
        <img
          src="/images/escudo-nacional.svg"
          alt="Escudo Nacional Argentino"
          className="h-24 w-auto mb-6"
          style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))' }}
        />
        <h1 className="font-serif font-bold text-[32px] leading-tight">
          <span className="text-gold-500">Mi</span>{' '}
          <span className="text-white">Argentina</span>
        </h1>
        <p className="font-sans text-body-sm text-white/55 mt-2 max-w-[280px]">
          Tu acceso a los servicios digitales del Estado Nacional
        </p>
      </div>

      {/* Actions */}
      <div className="px-6 pb-10 space-y-3">
        <Link href="/login/ingresar" className="block">
          <Button variant="gold" fullWidth size="lg">
            Ingresar
          </Button>
        </Link>
        <Link href="/login/registro" className="block">
          <Button variant="outline" fullWidth size="lg" className="border-white text-white hover:bg-white/10">
            Crear cuenta
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
