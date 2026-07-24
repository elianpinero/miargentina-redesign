'use client'

import { useEffect, type ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { AppStateProvider, useAppState } from '@/state/appState'
import { AuthProvider, useAuth } from '@/state/authState'
import { DrawerNavigation } from '@/components/composite/DrawerNavigation'
import { FloatingTabBar } from '@/components/composite/FloatingTabBar'

// ─── Global drawer bridge ───────────────────────────────────────────────────
// DashboardHeader (and other pages) call `window.__openDrawer?.()` directly
// instead of consuming context, so we expose the context action on `window`.
declare global {
  interface Window {
    __openDrawer?: () => void
  }
}

function ShellChrome({ children }: { children: ReactNode }) {
  const { drawerOpen, openDrawer, closeDrawer } = useAppState()

  useEffect(() => {
    window.__openDrawer = openDrawer
    return () => {
      delete window.__openDrawer
    }
  }, [openDrawer])

  return (
    <>
      <main id="main-content" className="pb-[112px]">
        {children}
      </main>

      <FloatingTabBar />

      <DrawerNavigation isOpen={drawerOpen} onClose={closeDrawer} />
    </>
  )
}

// ─── Auth gate ────────────────────────────────────────────────────────────────
// /login/* renders on its own, with no TabBar/Drawer chrome and no auth check.
// Everything else requires a session — while that's being resolved (reading
// sessionStorage on mount) or missing, show a loading screen instead of ever
// flashing protected content.
function AuthLoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center header-gradient">
      <div
        className="w-8 h-8 rounded-full border-[3px] border-white/25 border-t-white animate-spin"
        role="status"
        aria-label="Cargando"
      />
    </div>
  )
}

function AuthGate({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth()
  const pathname = usePathname()
  const router = useRouter()
  const isLoginRoute = pathname?.startsWith('/login') ?? false

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !isLoginRoute) {
      router.replace('/login')
    }
  }, [isLoading, isAuthenticated, isLoginRoute, router])

  if (isLoginRoute) {
    return <>{children}</>
  }

  if (isLoading || !isAuthenticated) {
    return <AuthLoadingScreen />
  }

  return (
    <AppStateProvider>
      <ShellChrome>{children}</ShellChrome>
    </AppStateProvider>
  )
}

// ─── Public component ────────────────────────────────────────────────────────
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <div className="relative max-w-[390px] sm:max-w-[480px] md:max-w-[640px] mx-auto min-h-screen bg-surface-secondary md:shadow-card">
        <AuthGate>{children}</AuthGate>
      </div>
    </AuthProvider>
  )
}
