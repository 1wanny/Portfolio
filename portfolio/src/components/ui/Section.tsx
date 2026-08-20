import type { ReactNode } from 'react'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { cn } from '@/lib/utils'

type SectionProps = {
  /** Anchor target, must match the id used in nav.ts. */
  id: string
  /** Monospace index shown before the title, e.g. '01'. */
  index?: string
  title: string
  /** Optional supporting line under the title. */
  subtitle?: string
  children: ReactNode
  className?: string
  /** Draws a hairline at the top of the section. */
  bordered?: boolean
  /** Uses the tinted surface background — alternate it to separate sections. */
  tinted?: boolean
}

/**
 * The one place section rhythm is defined: vertical spacing, heading style and
 * the numbered eyebrow. Every section on the home page uses it, so the page
 * stays visually consistent by construction.
 */
export function Section({
  id,
  index,
  title,
  subtitle,
  children,
  className,
  bordered = true,
  tinted = false,
}: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        'scroll-mt-24 py-20 sm:py-24 lg:py-28',
        bordered && 'border-t border-border',
        tinted && 'bg-surface',
        className,
      )}
    >
      <Container>
        <Reveal className="mb-12 sm:mb-14">
          <div className="flex items-baseline gap-3">
            {index ? (
              <span className="font-mono text-sm text-accent" aria-hidden="true">
                {index}
              </span>
            ) : null}
            <h2 id={headingId} className="text-2xl font-semibold sm:text-3xl">
              {title}
            </h2>
          </div>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-muted">{subtitle}</p>
          ) : null}
        </Reveal>

        {children}
      </Container>
    </section>
  )
}
