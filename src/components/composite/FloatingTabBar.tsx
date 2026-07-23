'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, Bell, Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/utils/cn'
import { TINA_URL } from '@/utils/constants'

// ─── Tab config ───────────────────────────────────────────────────────────────
const tabs = [
  { id: 'inicio',    label: 'Inicio',    href: '/',          Icon: Home,          ariaLabel: 'Ir al inicio' },
  { id: 'novedades', label: 'Novedades', href: '/novedades', Icon: Bell,          ariaLabel: 'Ver novedades' },
  { id: 'telefonos', label: 'Teléfonos', href: '/telefonos', Icon: Phone,         ariaLabel: 'Ver teléfonos de emergencia' },
  { id: 'tina',      label: 'Tina',      href: null,         Icon: MessageCircle, ariaLabel: 'Abrir chat con Tina en WhatsApp' },
] as const

// ─── Helpers ──────────────────────────────────────────────────────────────────
function isActiveTab(href: string | null, pathname: string): boolean {
  if (!href) return false
  if (href === '/') return pathname === '/'
  return pathname.startsWith(href)
}

// ─── Component ────────────────────────────────────────────────────────────────
export function FloatingTabBar() {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        'tabbar-glass fixed bottom-3 left-3 right-3 z-50 mx-auto',
        'max-w-[366px] sm:max-w-[456px] md:max-w-[616px]',
        'rounded-[28px]'
      )}
      style={{ height: 'var(--tabbar-height)' }}
      role="tablist"
      aria-label="Navegación principal"
    >
      <div className="relative flex items-center h-full px-1.5">
        {tabs.map(({ id, label, href, Icon, ariaLabel }) => {
          const active = isActiveTab(href, pathname)

          // Tina — external WhatsApp link
          if (!href) {
            return (
              <a
                key={id}
                href={TINA_URL}
                target="_blank"
                rel="noopener noreferrer"
                role="tab"
                aria-selected={false}
                aria-label={ariaLabel}
                className="relative flex-1 flex flex-col items-center justify-center gap-0.5 h-full min-h-[44px] touch-target"
              >
                <Icon
                  size={22}
                  strokeWidth={1.8}
                  className="transition-colors duration-150"
                  color="#8E8E93"
                />
                <span className="text-tab font-medium text-[#8E8E93] transition-colors duration-150">
                  {label}
                </span>
              </a>
            )
          }

          return (
            <Link
              key={id}
              href={href}
              role="tab"
              aria-selected={active}
              aria-label={ariaLabel}
              className="relative flex-1 flex flex-col items-center justify-center gap-0.5 h-full min-h-[44px] touch-target"
            >
              {active && (
                <motion.div
                  layoutId="tabbar-active-indicator"
                  className="tabbar-indicator absolute inset-1 rounded-[20px]"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <Icon
                size={22}
                strokeWidth={active ? 2 : 1.8}
                className={cn(
                  'relative transition-colors duration-150',
                  active ? 'text-navy-900' : 'text-[#8E8E93]'
                )}
              />
              <span
                className={cn(
                  'relative text-tab transition-colors duration-150',
                  active ? 'font-semibold text-navy-900' : 'font-medium text-[#8E8E93]'
                )}
              >
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
