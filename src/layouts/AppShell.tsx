'use client'

import { useEffect, type ReactNode } from 'react'
import { AppStateProvider, useAppState } from '@/state/appState'
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

function ShellInner({ children }: { children: ReactNode }) {
  const { drawerOpen, openDrawer, closeDrawer } = useAppState()

  useEffect(() => {
    window.__openDrawer = openDrawer
    return () => {
      delete window.__openDrawer
    }
  }, [openDrawer])

  return (
    <div className="relative max-w-[390px] sm:max-w-[480px] md:max-w-[640px] mx-auto min-h-screen bg-surface-secondary md:shadow-card">
      <main id="main-content" className="pb-[112px]">
        {children}
      </main>

      <FloatingTabBar />

      <DrawerNavigation isOpen={drawerOpen} onClose={closeDrawer} />
    </div>
  )
}

// ─── Public component ────────────────────────────────────────────────────────
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <AppStateProvider>
      <ShellInner>{children}</ShellInner>
    </AppStateProvider>
  )
}
