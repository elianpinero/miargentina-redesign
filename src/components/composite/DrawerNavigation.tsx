'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, LogOut, Home, User, Link2, PlusSquare, Lock, Info, FileText } from 'lucide-react'
import { Avatar, Badge } from '@/components/primitives'
import { MOCK_USER } from '@/utils/constants'
import { drawerVariants, drawerOverlayVariants } from '@/design-system/motion'

// ─── Types ────────────────────────────────────────────────────────────────────
interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

// ─── Menu items ───────────────────────────────────────────────────────────────
const menuItems = [
  { icon: User,      label: 'Mi perfil',              href: null },
  { icon: Link2,     label: 'Mis datos asociados',     href: null },
  { icon: PlusSquare,label: 'Suscribir servicios',     href: '/suscribir' },
  { icon: Lock,      label: 'Seguridad y privacidad',  href: '/seguridad' },
  { icon: Info,      label: 'Acerca de',               href: '/acercade' },
  { icon: FileText,  label: 'Términos y condiciones',  href: null },
] as const

const profileFields = [
  { emoji: '📧', value: MOCK_USER.email },
  { emoji: '📱', value: MOCK_USER.phone },
  { emoji: '📍', value: MOCK_USER.address },
  { emoji: '🪪', value: `DNI ${MOCK_USER.dni}` },
  { emoji: '🎂', value: `${MOCK_USER.birthdate} — ${MOCK_USER.gender}` },
  { emoji: '🌎', value: MOCK_USER.nationality },
]

// ─── Component ────────────────────────────────────────────────────────────────
export function DrawerNavigation({ isOpen, onClose }: DrawerProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[900] max-w-[390px] mx-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40"
            variants={drawerOverlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="absolute top-0 left-0 bottom-0 w-[285px] bg-white flex flex-col overflow-hidden"
            style={{ boxShadow: '4px 0 40px rgba(0,0,0,0.15)' }}
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Profile header */}
            <div className="header-gradient px-5 pt-14 pb-6">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative">
                  <Avatar initials={MOCK_USER.initials} size="lg" />
                  <button
                    aria-label="Editar foto de perfil"
                    className="absolute bottom-0 right-0 w-5 h-5 bg-gold-500 rounded-full border-2 border-navy-800 flex items-center justify-center text-[10px]"
                  >
                    ✏️
                  </button>
                </div>
                <div>
                  <p className="font-sans font-extrabold text-[17px] text-white leading-tight">
                    {MOCK_USER.name}
                  </p>
                  <p className="font-sans text-caption text-white/60 mt-0.5">
                    CUIL {MOCK_USER.cuil}
                  </p>
                  <Badge variant="green" className="mt-1.5">✓ Identidad validada</Badge>
                </div>
              </div>

              {/* Profile fields */}
              <ul className="space-y-1.5" aria-label="Datos personales">
                {profileFields.map(({ emoji, value }) => (
                  <li key={value} className="flex items-center gap-2 text-caption text-white/65">
                    <span aria-hidden="true">{emoji}</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu items */}
            <nav className="flex-1 overflow-y-auto py-2" aria-label="Menú principal">
              {menuItems.map(({ icon: Icon, label, href }) => {
                const content = (
                  <div className="flex items-center gap-3.5 px-5 py-[15px] w-full border-b border-surface-tertiary/60 transition-colors hover:bg-surface-secondary active:bg-surface-tertiary">
                    <div className="w-9 h-9 rounded-ios-sm bg-surface-secondary flex items-center justify-center shrink-0">
                      <Icon size={18} color="#0B1742" strokeWidth={1.8} />
                    </div>
                    <span className="font-sans font-medium text-body text-text-primary flex-1">
                      {label}
                    </span>
                    <ChevronRight size={16} color="#9CA3AF" strokeWidth={1.8} />
                  </div>
                )

                return href ? (
                  <Link key={label} href={href} onClick={onClose}>
                    {content}
                  </Link>
                ) : (
                  <button key={label} onClick={onClose} className="w-full text-left">
                    {content}
                  </button>
                )
              })}

              {/* Cerrar sesión */}
              <button
                onClick={onClose}
                className="flex items-center gap-3.5 px-5 py-[15px] w-full border-b border-surface-tertiary/60 transition-colors hover:bg-danger-soft/50"
              >
                <div className="w-9 h-9 rounded-ios-sm bg-danger-soft flex items-center justify-center shrink-0">
                  <LogOut size={18} color="#C92A2A" strokeWidth={1.8} />
                </div>
                <span className="font-sans font-semibold text-body text-danger">Cerrar sesión</span>
              </button>

              {/* Volver al inicio */}
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-3.5 px-5 py-[15px] w-full transition-colors hover:bg-surface-secondary"
              >
                <div className="w-9 h-9 rounded-ios-sm bg-surface-secondary flex items-center justify-center shrink-0">
                  <Home size={18} color="#0B1742" strokeWidth={1.8} />
                </div>
                <span className="font-sans font-medium text-body text-text-primary">Volver al inicio</span>
              </Link>
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
