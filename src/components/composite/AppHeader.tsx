'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft, Menu } from 'lucide-react'
import { Avatar } from '@/components/primitives'
import { MOCK_USER } from '@/utils/constants'
import { cn } from '@/utils/cn'

// ─── Dashboard Header ─────────────────────────────────────────────────────────
interface DashboardHeaderProps {
  onMenuOpen: () => void
}

export function DashboardHeader({ onMenuOpen }: DashboardHeaderProps) {
  return (
    <header
      className="header-gradient px-5 pt-12 pb-5 sticky top-0 z-40"
      role="banner"
    >
      <div className="flex items-center justify-between">
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
      </div>

      {/* Greeting */}
      <p className="mt-3.5 font-sans font-semibold text-body-lg text-white/90">
        ¡Hola {MOCK_USER.name}!
      </p>
    </header>
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
