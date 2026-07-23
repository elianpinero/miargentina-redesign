'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
      className="tabbar-glass fixed bottom-0 left-0 right-0 z-50 max-w-[390px] sm:max-w-[480px] md:max-w-[640px] mx-auto"
      style={{ height: 83 }}
      role="tablist"
      aria-label="Navegación principal"
    >
      <div className="flex items-start pt-2.5 h-full">
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
                className="flex-1 flex flex-col items-center gap-1 pt-1.5 pb-1 min-h-[44px] touch-target"
              >
                <Icon
                  size={24}
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
              className="flex-1 flex flex-col items-center gap-1 pt-1.5 pb-1 min-h-[44px] touch-target"
            >
              <Icon
                size={24}
                strokeWidth={active ? 2 : 1.8}
                className={cn(
                  'transition-colors duration-150',
                  active ? 'text-navy-900' : 'text-[#8E8E93]'
                )}
              />
              <span
                className={cn(
                  'text-tab transition-colors duration-150',
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
