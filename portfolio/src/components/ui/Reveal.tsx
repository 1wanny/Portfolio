import type { ElementType, ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger in milliseconds, for lists of cards. Keep it small (≤200ms). */
  delay?: number
  /** Render as something other than a div, e.g. 'li' or 'article'. */
  as?: ElementType
}

/**
 * Fades and lifts its children into view on scroll.
 * No-ops entirely under prefers-reduced-motion.
 */
export function Reveal({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </Tag>
  )
}
