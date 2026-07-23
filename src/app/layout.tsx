import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'
import { AppShell } from '@/layouts/AppShell'

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Mi Argentina',
  description: 'Plataforma digital de servicios del Estado Nacional Argentino',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Mi Argentina',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#0B1742',
}

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* Skip to content — a11y */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:px-4 focus:py-2 focus:bg-navy-900 focus:text-white focus:rounded-md focus:m-2"
        >
          Saltar al contenido
        </a>

        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
