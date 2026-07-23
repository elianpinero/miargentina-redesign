'use client'

import { useState, useCallback } from 'react'

/**
 * useAccordion — manages open/closed state for a single accordion item.
 * Usage: const { isOpen, toggle } = useAccordion(defaultOpen)
 */
export function useAccordion(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const toggle = useCallback(() => setIsOpen((v) => !v), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  return { isOpen, toggle, open, close }
}

/**
 * useAccordionGroup — manages a group where only one item is open at a time.
 * Usage: const { activeId, toggle } = useAccordionGroup()
 */
export function useAccordionGroup(defaultId: string | null = null) {
  const [activeId, setActiveId] = useState<string | null>(defaultId)
  const toggle = useCallback((id: string) => {
    setActiveId((current) => (current === id ? null : id))
  }, [])
  return { activeId, toggle, isOpen: (id: string) => activeId === id }
}
