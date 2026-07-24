// ─── Auth State ───────────────────────────────────────────────────────────────
// Mock authentication for the portfolio demo — no real backend/RENAPER.
// Ready to wrap with Zustand: `import { create } from 'zustand'` and replace.
// Currently uses React context pattern, same as appState.tsx.

'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────
export interface AuthUser {
  cuil: string
}

interface AuthStateValue {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (cuil: string, password: string) => Promise<boolean>
  logout: () => void
}

// ── Demo credentials ─────────────────────────────────────────────────────────
// Real Mi Argentina logs in with CUIL, not email — matches MOCK_USER.cuil.
const DEMO_CUIL = '20-34567890-1'
const DEMO_PASSWORD = 'demo123'
const LOGIN_DELAY_MS = 800
const SESSION_KEY = 'mi-argentina-auth-user'

const onlyDigits = (value: string) => value.replace(/\D/g, '')

// ── Context ───────────────────────────────────────────────────────────────────
const AuthContext = createContext<AuthStateValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Restore session from sessionStorage so a refresh doesn't log the user out.
  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(SESSION_KEY)
      if (stored) setUser(JSON.parse(stored) as AuthUser)
    } catch {
      // Corrupted or blocked storage — treat as logged out.
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = async (cuil: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, LOGIN_DELAY_MS))

    const isValid = onlyDigits(cuil) === onlyDigits(DEMO_CUIL) && password === DEMO_PASSWORD
    if (isValid) {
      const loggedInUser: AuthUser = { cuil: DEMO_CUIL }
      setUser(loggedInUser)
      window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(loggedInUser))
    }

    setIsLoading(false)
    return isValid
  }

  const logout = () => {
    setUser(null)
    window.sessionStorage.removeItem(SESSION_KEY)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useAuth(): AuthStateValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

// ── Zustand migration template ────────────────────────────────────────────────
/*
  When scaling to Zustand, replace with:

  import { create } from 'zustand'
  import { persist } from 'zustand/middleware'

  interface AuthStore {
    user: AuthUser | null
    isLoading: boolean
    login: (cuil: string, password: string) => Promise<boolean>
    logout: () => void
  }

  export const useAuthStore = create<AuthStore>()(
    persist(
      (set) => ({
        user: null,
        isLoading: false,
        login: async (cuil, password) => { ... },
        logout: () => set({ user: null }),
      }),
      { name: 'mi-argentina-auth-user', storage: sessionStorage }
    )
  )
*/
