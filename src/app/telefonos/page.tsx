'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { pageVariants, staggerContainer, staggerItem } from '@/design-system/motion'
import { EMERGENCY_PHONES } from '@/utils/constants'

export default function TelefonosPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <header className="header-gradient px-5 pt-12 pb-5">
        <h1 className="font-serif font-bold text-[22px] text-white">Teléfonos de emergencia</h1>
        <p className="font-sans text-caption text-white/55 mt-1">Organismos del Estado Nacional</p>
      </header>

      <motion.ul
        className="bg-surface-secondary px-4 py-4 space-y-2.5 pb-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        aria-label="Teléfonos de emergencia"
      >
        {EMERGENCY_PHONES.map(({ number, label, emoji, bgColor }) => (
          <motion.li key={number} variants={staggerItem}>
            <div className="card-surface p-0 overflow-hidden">
              <div className="flex items-center gap-3.5 px-4 py-3.5">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-[13px] flex items-center justify-center text-xl shrink-0"
                  style={{ background: bgColor }}
                  aria-hidden="true"
                >
                  {emoji}
                </div>

                {/* Label */}
                <p className="font-sans font-semibold text-body-sm text-text-primary flex-1">
                  {label}
                </p>

                {/* Number + Call */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="font-sans font-extrabold text-[20px] text-navy-900">
                    {number}
                  </span>
                  <a
                    href={`tel:${number}`}
                    aria-label={`Llamar al ${number} — ${label}`}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity active:opacity-70"
                    style={{ background: bgColor }}
                  >
                    <Phone size={15} strokeWidth={2} className="text-navy-900" />
                  </a>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
