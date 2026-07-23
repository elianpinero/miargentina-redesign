import { cn } from '@/utils/cn'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  /** Remove default padding */
  noPadding?: boolean
}

export function PageContainer({ children, className, noPadding = false }: PageContainerProps) {
  return (
    <div
      className={cn(
        'min-h-full bg-surface-secondary',
        !noPadding && 'px-4 py-4',
        className
      )}
    >
      {children}
    </div>
  )
}
