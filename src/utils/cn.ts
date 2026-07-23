import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Custom font-size scale from tailwind.config.ts — without this, twMerge treats
// e.g. `text-body` and `text-navy-900` as the same "text color" group and drops
// one of them, silently stripping either the font size or the text color.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-tab', 'text-label', 'text-caption',
        'text-body-sm', 'text-body', 'text-body-lg',
        'text-title-sm', 'text-title', 'text-title-lg',
        'text-headline', 'text-display',
      ],
    },
  },
})

/**
 * Merges Tailwind classes safely, resolving conflicts.
 * Usage: cn('px-4 py-2', condition && 'bg-navy-900', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
