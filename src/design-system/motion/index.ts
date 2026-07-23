// ─── Motion System ─────────────────────────────────────────────────────────────
// Framer Motion variants and transition configs.
// Easing: cubic-bezier(.22,.61,.36,1) — matches iOS spring curves.

import type { Variants, Transition } from 'framer-motion'

// ── Easings ──────────────────────────────────────────────────────────────────
export const easings = {
  ios: [0.22, 0.61, 0.36, 1] as [number, number, number, number],
  spring: { type: 'spring', stiffness: 400, damping: 30 },
  springGentle: { type: 'spring', stiffness: 260, damping: 26 },
} as const

// ── Base transitions ──────────────────────────────────────────────────────────
export const transitions = {
  fast: { duration: 0.15, ease: easings.ios },
  base: { duration: 0.2, ease: easings.ios },
  smooth: { duration: 0.3, ease: easings.ios },
  page: { duration: 0.32, ease: easings.ios },
} satisfies Record<string, Transition>

// ── Page variants ─────────────────────────────────────────────────────────────
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: transitions.page },
  exit: { opacity: 0, y: -8, transition: transitions.fast },
}

export const slideFromRight: Variants = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0, transition: transitions.page },
  exit: { opacity: 0, x: -16, transition: transitions.fast },
}

export const slideFromLeft: Variants = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0, transition: transitions.page },
  exit: { opacity: 0, x: 16, transition: transitions.fast },
}

// ── Card entrance ─────────────────────────────────────────────────────────────
export const cardVariants: Variants = {
  initial: { opacity: 0, y: 14, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: transitions.smooth },
  exit: { opacity: 0, scale: 0.96, transition: transitions.fast },
  tap: { scale: 0.96, transition: transitions.fast },
}

// ── Stagger container ────────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05, delayChildren: 0.08 },
  },
}

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: transitions.smooth },
}

// ── Drawer ────────────────────────────────────────────────────────────────────
export const drawerVariants: Variants = {
  closed: { x: '-100%' },
  open: { x: 0, transition: { duration: 0.28, ease: easings.ios } },
}

export const drawerOverlayVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.28 } },
}

// ── Accordion ────────────────────────────────────────────────────────────────
export const accordionVariants: Variants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: easings.ios },
  },
}

// ── Tab bar selection ─────────────────────────────────────────────────────────
export const tabLabelVariants: Variants = {
  inactive: { color: '#8E8E93' },
  active: { color: '#0B1742', transition: transitions.fast },
}

// ── Fade ─────────────────────────────────────────────────────────────────────
export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: transitions.base },
  exit: { opacity: 0, transition: transitions.fast },
}
