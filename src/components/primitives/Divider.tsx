import { cn } from '@/utils/cn'

interface DividerProps {
  className?: string
  inset?: boolean
}

export function Divider({ className, inset = false }: DividerProps) {
  return (
    <hr
      className={cn(
        'divider border-none',
        inset && 'ml-16',
        className
      )}
      role="separator"
    />
  )
}
