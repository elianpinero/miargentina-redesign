'use client'

import { useRouter } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronLeft, Menu } from 'lucide-react'
import { Avatar } from '@/components/primitives'
import { MOCK_USER } from '@/utils/constants'
import { formatTodayLong } from '@/utils/feriados'
import { cn } from '@/utils/cn'

// ─── Dashboard Header ─────────────────────────────────────────────────────────
interface DashboardHeaderProps {
  onMenuOpen: () => void
}

export function DashboardHeader({ onMenuOpen }: DashboardHeaderProps) {
  // On scroll, the icon row compacts and turns into a frosted glass bar —
  // menu icon and avatar shrink/float together, matching the tab bar's glass look.
  const { scrollY } = useScroll()
  const blur = useTransform(scrollY, [0, 70], [0, 22])
  const bgAlpha = useTransform(scrollY, [0, 70], [1, 0.68])
  const scale = useTransform(scrollY, [0, 70], [1, 0.92])
  const backdropFilter = useTransform(blur, (v) => `blur(${v}px) saturate(180%)`)
  const backgroundColor = useTransform(bgAlpha, (a) => `rgba(11, 23, 66, ${a})`)

  return (
    <motion.header
      className="px-5 pt-12 pb-3 -mb-px sticky top-0 z-40"
      style={{ backgroundColor, backdropFilter, WebkitBackdropFilter: backdropFilter }}
      role="banner"
    >
      <motion.div
        className="flex items-center justify-between"
        style={{ scale, transformOrigin: 'top center' }}
      >
        {/* Hamburger menu */}
        <button
          onClick={onMenuOpen}
          aria-label="Abrir menú de navegación"
          aria-haspopup="dialog"
          className={cn(
            'touch-target flex items-center justify-center',
            'w-10 h-10 rounded-ios',
            'bg-white/10 transition-opacity active:opacity-60'
          )}
        >
          <Menu size={20} color="white" strokeWidth={1.8} />
        </button>

        {/* Logo */}
        <div className="flex items-baseline gap-0.5" aria-label="Mi Argentina">
          <span className="logo-mi text-[22px]">Mi</span>
          <span className="logo-argentina text-[22px]"> Argentina</span>
        </div>

        {/* Avatar */}
        <Avatar
          initials={MOCK_USER.initials}
          size="md"
          aria-label={`Perfil de ${MOCK_USER.name}`}
        />
      </motion.div>
    </motion.header>
  )
}

// ─── Dashboard Greeting ───────────────────────────────────────────────────────
// Rendered as part of the same header-gradient block as the status cards, so
// the gradient runs continuously instead of restarting on a separate element.
export function DashboardGreeting() {
  return (
    <div className="px-1 pb-4">
      <p className="font-sans font-semibold text-body-lg text-white/90">
        ¡Hola {MOCK_USER.name}!
      </p>
      <p className="mt-0.5 font-sans text-caption text-white/55">
        {formatTodayLong()}
      </p>
    </div>
  )
}

// ─── Module Header (back navigation) ─────────────────────────────────────────
interface ModuleHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function ModuleHeader({ title, subtitle, className }: ModuleHeaderProps) {
  const router = useRouter()

  return (
    <header
      className={cn('header-gradient px-5 pt-12 pb-5 sticky top-0 z-40', className)}
      role="banner"
    >
      {/* Back button */}
      <button
        onClick={() => router.back()}
        aria-label="Volver atrás"
        className={cn(
          'touch-target flex items-center justify-center',
          'w-9 h-9 rounded-ios mb-3.5',
          'bg-white/12 transition-all active:scale-90'
        )}
      >
        <ChevronLeft size={20} color="white" strokeWidth={2} />
      </button>

      <h1 className="font-sans font-extrabold text-headline text-white">{title}</h1>
      {subtitle && (
        <p className="mt-1 font-sans text-caption text-white/55">{subtitle}</p>
      )}
    </header>
  )
}
