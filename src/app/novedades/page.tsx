'use client'

import { motion } from 'framer-motion'
import { pageVariants, staggerContainer, staggerItem } from '@/design-system/motion'
import { Divider } from '@/components/primitives'
import { VACUNAS_URL, RECETA_ELECTRONICA_URL } from '@/utils/constants'

const novedades = [
  {
    title: '¿Completaste tu esquema de vacunación?',
    body: 'El Calendario Nacional de Vacunación incluye vacunas para todas las etapas de la vida. Están probadas, son seguras y previenen enfermedades graves. Consultá cuáles te corresponden en argentina.gob.ar/vacunas',
    href: VACUNAS_URL,
  },
  {
    title: 'Tu receta electrónica, en tu celular',
    body: 'Ahora tus recetas médicas están disponibles en Mi Argentina. Consultá todas las prescripciones emitidas a tu nombre en los últimos 60 días. Conocé más en arg.gob.ar/receta-electronica',
    href: RECETA_ELECTRONICA_URL,
  },
]

export default function NovedadesPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      <header className="header-gradient px-5 pt-12 pb-5">
        <h1 className="font-serif font-bold text-[22px] text-white">Novedades</h1>
        <p className="font-sans text-caption text-white/55 mt-1">Últimas noticias del Estado Nacional</p>
      </header>

      <motion.div
        className="bg-surface-primary"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {novedades.map(({ title, body, href }, i) => (
          <motion.div key={title} variants={staggerItem}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-5 transition-colors hover:bg-surface-secondary active:bg-surface-tertiary"
            >
              <p className="font-sans font-bold text-body text-text-primary">{title}</p>
              <p className="font-sans text-body-sm text-text-secondary mt-1.5 leading-relaxed">
                {body}
              </p>
            </a>
            {i < novedades.length - 1 && <Divider />}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
