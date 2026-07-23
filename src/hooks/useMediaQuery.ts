'use client'

import { useState, useEffect } from 'react'

/**
 * useMediaQuery — reactive CSS media query hook.
 * SSR-safe: returns false on server, updates after hydration.
 *
 * Usage:
 *   const isMobile = useMediaQuery('(max-width: 390px)')
 *   const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(query)
    setMatches(mq.matches)

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [query])

  return matches
}

// ── Preset hooks ──────────────────────────────────────────────────────────────
export const usePrefersReducedMotion = () =>
  useMediaQuery('(prefers-reduced-motion: reduce)')

export const useIsMobile = () =>
  useMediaQuery('(max-width: 390px)')
