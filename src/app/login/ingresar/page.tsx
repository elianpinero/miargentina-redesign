'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronLeft, IdCard, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'
import { pageVariants } from '@/design-system/motion'
import { Button } from '@/components/primitives'
import { useAuth } from '@/state/authState'
import { cn } from '@/utils/cn'

const MIN_PASSWORD_LENGTH = 6

const inputClass =
  'w-full pl-11 pr-11 py-3.5 rounded-ios-lg border border-surface-tertiary bg-white ' +
  'font-sans text-body text-text-primary placeholder:text-text-secondary/60 ' +
  'focus:outline-none focus:border-navy-900 transition-colors'

// Auto-inserts dashes as the user types: 20-34567890-1
function formatCuilInput(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 10) return `${digits.slice(0, 2)}-${digits.slice(2)}`
  return `${digits.slice(0, 2)}-${digits.slice(2, 10)}-${digits.slice(10)}`
}

export default function IngresarPage() {
  const router = useRouter()
  const { login, isLoading } = useAuth()

  const [cuil, setCuil] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormError(null)

    if (cuil.replace(/\D/g, '').length !== 11) {
      setFormError('Ingresá un CUIL válido (11 dígitos)')
      return
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      setFormError(`La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres`)
      return
    }

    const success = await login(cuil, password)
    if (success) {
      router.replace('/')
    } else {
      setFormError('CUIL o contraseña incorrectos')
    }
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen flex flex-col bg-surface-secondary"
    >
      <header className="px-5 pt-12 pb-2">
        <button
          onClick={() => router.back()}
          aria-label="Volver atrás"
          className={cn(
            'touch-target flex items-center justify-center',
            'w-9 h-9 rounded-ios bg-surface-tertiary/60',
            'transition-all active:scale-90'
          )}
        >
          <ChevronLeft size={20} color="#0B1742" strokeWidth={2} />
        </button>
      </header>

      <div className="px-6 pt-4 pb-2">
        <h1 className="font-serif font-bold text-[26px] text-text-primary">Ingresar</h1>
        <p className="font-sans text-body-sm text-text-secondary mt-1">
          Accedé con tu CUIL y contraseña
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4 px-6 pt-4">
        {/* CUIL */}
        <div>
          <label
            htmlFor="cuil"
            className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1.5 block"
          >
            CUIL
          </label>
          <div className="relative">
            <IdCard
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none"
            />
            <input
              id="cuil"
              name="cuil"
              type="text"
              inputMode="numeric"
              autoComplete="username"
              value={cuil}
              onChange={(e) => setCuil(formatCuilInput(e.target.value))}
              placeholder="20-12345678-9"
              className={cn(inputClass, 'pr-4')}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-1.5 block"
          >
            Contraseña
          </label>
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none"
            />
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={inputClass}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button
          type="button"
          className="font-sans text-caption text-navy-900 font-semibold self-end -mt-1"
        >
          ¿Olvidaste tu contraseña?
        </button>

        {formError && (
          <div className="flex items-center gap-2 bg-danger-soft rounded-ios-lg px-3.5 py-3" role="alert">
            <AlertCircle size={16} className="text-danger shrink-0" />
            <p className="font-sans text-body-sm text-danger-text">{formError}</p>
          </div>
        )}

        <div className="flex-1" />

        <Button type="submit" variant="primary" fullWidth size="lg" loading={isLoading}>
          Ingresar
        </Button>

        <p className="font-sans text-[11px] text-text-secondary text-center mb-6">
          Demo: <span className="font-semibold text-text-primary">20-34567890-1</span>
          {' / '}
          <span className="font-semibold text-text-primary">demo123</span>
        </p>
      </form>
    </motion.div>
  )
}
