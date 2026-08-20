import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = {
  children: ReactNode
  className?: string
  /** 'default' for page sections, 'prose' for long-form reading widths. */
  width?: 'default' | 'prose'
}

export function Container({ children, className, width = 'default' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-8',
        width === 'default' ? 'max-w-6xl' : 'max-w-3xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
