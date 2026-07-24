'use client'

import { useEffect, useState } from 'react'

/**
 * useToday — the current date, computed on the client only.
 * Static pages are prerendered at build time, so `new Date()` called directly
 * in a render body gets baked in at that moment; this hook instead resolves
 * after mount, guaranteeing it always reflects the real "today" the page is
 * viewed on, not whenever it was last built/deployed.
 */
export function useToday(): Date | null {
  const [today, setToday] = useState<Date | null>(null)

  useEffect(() => {
    setToday(new Date())
  }, [])

  return today
}
