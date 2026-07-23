import { cn } from '@/utils/cn'

interface AvatarProps {
  initials: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
}

const sizeStyles = {
  sm:  'w-8 h-8 text-xs',
  md:  'w-10 h-10 text-sm',
  lg:  'w-14 h-14 text-lg',
  xl:  'w-16 h-16 text-xl',
}

export function Avatar({ initials, size = 'md', className, onClick }: AvatarProps) {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? 'Editar foto de perfil' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        'rounded-full',
        'bg-gradient-to-br from-gold-500 to-gold-400',
        'flex items-center justify-center',
        'font-sans font-extrabold text-navy-900',
        'select-none shrink-0',
        'shadow-avatar',
        sizeStyles[size],
        onClick && 'cursor-pointer',
        className
      )}
    >
      {initials}
    </div>
  )
}
