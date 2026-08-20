import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn, isPlaceholder } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

type BaseProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  /** Leading icon. Pass a Lucide icon element; it is hidden from screen readers. */
  icon?: ReactNode
  /** Trailing icon. */
  iconAfter?: ReactNode
}

type ButtonProps = BaseProps & {
  /** Internal route — renders a react-router <Link>. */
  to?: string
  /** External or same-page URL — renders an <a>. */
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  /** Force the link to open in a new tab. Auto-detected for http(s) URLs. */
  external?: boolean
  'aria-label'?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium ' +
  'transition-[color,background-color,border-color,transform] duration-200 ' +
  'active:translate-y-px disabled:pointer-events-none disabled:opacity-50'

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm sm:text-[0.9375rem]',
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-fg hover:bg-accent-hover',
  secondary:
    'border border-border-strong bg-transparent text-fg hover:border-accent hover:text-accent',
  ghost: 'text-fg-muted hover:text-accent hover:bg-surface-2',
}

/**
 * Anchor / Link / button in one place.
 *
 * If `href` is still a bracketed placeholder (e.g. '[GITHUB URL]') the control
 * renders as visibly inert instead of a dead link, so an unfinished portfolio
 * never ships a 404.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  iconAfter,
  to,
  href,
  onClick,
  type = 'button',
  external,
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className)

  const content = (
    <>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
      {iconAfter ? <span aria-hidden="true">{iconAfter}</span> : null}
    </>
  )

  if (href !== undefined && isPlaceholder(href)) {
    return (
      <span
        className={cn(
          base,
          sizes[size],
          'cursor-not-allowed border border-dashed border-border-strong text-fg-subtle',
          className,
        )}
        aria-disabled="true"
        title="Placeholder link — add the URL in src/data/"
      >
        {content}
        <span className="sr-only">(placeholder link, not yet set)</span>
      </span>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    const isExternal = external ?? /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}
