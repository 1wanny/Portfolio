import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TagProps = {
  children: ReactNode
  className?: string
  /** 'solid' reads slightly stronger — use it sparingly for emphasis. */
  variant?: 'default' | 'solid'
}

/** Small monospace badge used for technologies and metadata. */
export function Tag({ children, className, variant = 'default' }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border px-2 py-1 font-mono text-[0.7rem] leading-none tracking-tight',
        variant === 'default'
          ? 'border-border bg-surface-2 text-fg-muted'
          : 'border-accent/30 bg-accent/10 text-accent',
        className,
      )}
    >
      {children}
    </span>
  )
}

type TagListProps = {
  items: readonly string[]
  className?: string
  label?: string
}

export function TagList({ items, className, label }: TagListProps) {
  if (items.length === 0) return null

  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)} aria-label={label}>
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  )
}
