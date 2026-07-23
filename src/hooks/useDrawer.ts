'use client'

import { useState, useCallback } from 'react'

/**
 * useDrawer — manage drawer open/close state.
 * Usage: const { isOpen, open, close, toggle } = useDrawer()
 */
export function useDrawer(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((v) => !v), [])

  return { isOpen, open, close, toggle }
}
