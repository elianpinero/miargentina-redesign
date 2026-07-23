// ─── App State ────────────────────────────────────────────────────────────────
// Minimal state slice definitions.
// Ready to wrap with Zustand: `import { create } from 'zustand'` and replace.
// Currently uses React context pattern; swap to Zustand when needed at scale.

'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import type { TabId } from '@/utils/constants'

// ── Types ─────────────────────────────────────────────────────────────────────
interface AppStateValue {
  activeTab: TabId
  setActiveTab: (tab: TabId) => void
  drawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

// ── Context ───────────────────────────────────────────────────────────────────
const AppStateContext = createContext<AppStateValue | null>(null)

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabId>('inicio')
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <AppStateContext.Provider
      value={{
        activeTab,
        setActiveTab,
        drawerOpen,
        openDrawer: () => setDrawerOpen(true),
        closeDrawer: () => setDrawerOpen(false),
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useAppState(): AppStateValue {
  const ctx = useContext(AppStateContext)
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider')
  return ctx
}

// ── User state slice (extendable) ─────────────────────────────────────────────
export interface UserState {
  name: string
  cuil: string
  initials: string
  isVerified: boolean
}

// ── Zustand migration template ────────────────────────────────────────────────
/*
  When scaling to Zustand, replace with:

  import { create } from 'zustand'
  import { devtools, persist } from 'zustand/middleware'

  interface AppStore {
    activeTab: TabId
    drawerOpen: boolean
    setActiveTab: (tab: TabId) => void
    openDrawer: () => void
    closeDrawer: () => void
  }

  export const useAppStore = create<AppStore>()(
    devtools(
      persist(
        (set) => ({
          activeTab: 'inicio',
          drawerOpen: false,
          setActiveTab: (tab) => set({ activeTab: tab }),
          openDrawer: () => set({ drawerOpen: true }),
          closeDrawer: () => set({ drawerOpen: false }),
        }),
        { name: 'mi-argentina-store' }
      )
    )
  )
*/
