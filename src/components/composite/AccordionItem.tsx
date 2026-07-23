'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'
import { accordionVariants, transitions } from '@/design-system/motion'

// ─── Types ────────────────────────────────────────────────────────────────────
interface AccordionItemProps {
  title: string
  children: React.ReactNode
  iconEmoji?: string
  iconBg?: string
  defaultOpen?: boolean
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────────
export function AccordionItem({
  title,
  children,
  iconEmoji,
  iconBg = '#EEF2FF',
  defaultOpen = false,
  className,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className={cn('card-surface overflow-hidden', className)}
      aria-expanded={isOpen}
    >
      {/* Header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'w-full flex items-center justify-between',
          'px-4 py-3.5 text-left',
          'border-b border-surface-tertiary/60 transition-colors',
          'hover:bg-surface-secondary active:bg-surface-secondary',
          'touch-target'
        )}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {iconEmoji && (
            <div
              className="w-9 h-9 rounded-ios-sm flex items-center justify-center text-lg shrink-0"
              style={{ background: iconBg }}
              aria-hidden="true"
            >
              {iconEmoji}
            </div>
          )}
          <span className="font-sans font-bold text-body text-text-primary">{title}</span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={transitions.fast}
          className="shrink-0 ml-2"
        >
          <ChevronDown size={18} color="#6B7280" strokeWidth={2} />
        </motion.div>
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={accordionVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ overflow: 'hidden' }}
          >
            <div className="p-4 border-t border-surface-tertiary/40">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
