'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/design-system/motion'
import { MODULES } from '@/utils/constants'
import { cn } from '@/utils/cn'

export function ServiceGrid() {
  return (
    <motion.div
      className="grid grid-cols-4 gap-[9px]"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      role="list"
      aria-label="Accesos rápidos a servicios"
    >
      {MODULES.map((mod) => (
        <motion.div
          key={mod.id}
          variants={staggerItem}
          role="listitem"
        >
          <Link
            href={mod.href}
            aria-label={`Ir a ${mod.label}`}
            className="block"
          >
            <motion.div
              whileTap={{ scale: 0.93 }}
              transition={{ duration: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
              className={cn(
                'bg-white rounded-ios-lg',
                'flex flex-col items-center gap-[7px]',
                'pt-3 pb-2.5 px-1.5',
                'shadow-card',
                'cursor-pointer'
              )}
            >
              {/* Icon */}
              <div
                className="w-[46px] h-[46px] rounded-[13px] flex items-center justify-center text-[22px]"
                style={{ background: mod.iconBg }}
                aria-hidden="true"
              >
                {mod.emoji}
              </div>

              {/* Label */}
              <span className="text-[10px] font-bold text-text-primary text-center leading-tight">
                {mod.label}
              </span>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
