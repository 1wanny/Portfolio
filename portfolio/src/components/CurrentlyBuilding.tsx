import { ArrowUpRight } from 'lucide-react'
import { currentlyBuilding } from '@/data/currentlyBuilding'
import type { BuildStatus } from '@/data/types'
import { cn, isPlaceholder } from '@/lib/utils'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { Tag } from './ui/Tag'

const STATUS_STYLES: Record<BuildStatus, string> = {
  'IN PROGRESS': 'border-success/40 text-success',
  PROTOTYPING: 'border-accent/40 text-accent',
  PLANNING: 'border-border-strong text-fg-subtle',
  'ON HOLD': 'border-warning/40 text-warning',
}

export function CurrentlyBuilding() {
  return (
    <Section
      id="currently-building"
      index="06"
      title="Currently Building"
      subtitle="Live work in progress — updated as things ship or change."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {currentlyBuilding.map((project, index) => (
          <Reveal
            as="li"
            key={`${project.name}-${index}`}
            delay={Math.min(index * 70, 210)}
            className="h-full"
          >
            <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-strong">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] tracking-wide',
                    STATUS_STYLES[project.status],
                  )}
                >
                  <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
                  {project.status}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold tracking-tight">{project.name}</h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                {project.description}
              </p>

              <div className="mt-5 border-t border-border pt-4">
                <h4 className="text-xs text-fg-subtle">Focus</h4>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {project.focus.map((item, itemIndex) => (
                    <li key={`${item}-${itemIndex}`}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </div>

              {project.link ? (
                isPlaceholder(project.link) ? (
                  <span
                    aria-disabled="true"
                    title="Placeholder link — add the URL in src/data/currentlyBuilding.ts"
                    className="mt-4 inline-flex cursor-not-allowed items-center gap-1 text-sm text-fg-subtle line-through decoration-dotted"
                  >
                    View project
                    <span className="sr-only">(placeholder link, not yet set)</span>
                  </span>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-hover"
                  >
                    View project
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    <span className="sr-only"> — {project.name}</span>
                  </a>
                )
              ) : null}
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
