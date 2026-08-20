import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { activities } from '@/data/hackathons'
import type { Activity } from '@/data/types'
import { isPlaceholder } from '@/lib/utils'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { TagList } from './ui/Tag'

export function Hackathons() {
  return (
    <Section
      id="hackathons"
      index="04"
      title="Hackathons & Activities"
      subtitle="Work done outside of coursework — events, competitions and self-directed learning."
    >
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <Reveal as="li" key={`${activity.name}-${index}`} delay={Math.min(index * 60, 240)}>
            <ActivityCard activity={activity} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[0.65rem] tracking-wide text-accent">
              {activity.kind}
            </span>
          </div>
          <h3 className="mt-2.5 text-lg font-semibold tracking-tight">{activity.name}</h3>
        </div>

        <p className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-fg-subtle">
          <CalendarDays className="size-3.5" aria-hidden="true" />
          {activity.date}
        </p>
      </div>

      <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-fg-muted">
        {activity.description}
      </p>

      <dl className="mt-5 grid gap-4 border-t border-border pt-5 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-xs text-fg-subtle">Role</dt>
          <dd className="mt-1 text-fg">{activity.role}</dd>
        </div>
        <div>
          <dt className="text-xs text-fg-subtle">Outcome</dt>
          <dd className="mt-1 text-fg">{activity.outcome}</dd>
        </div>
        <div>
          <dt className="text-xs text-fg-subtle">Technologies</dt>
          <dd className="mt-1.5">
            <TagList items={activity.tech} label={`${activity.name} technologies`} />
          </dd>
        </div>
      </dl>

      {activity.links && activity.links.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {activity.links.map((link) => (
            <li key={link.label}>
              {isPlaceholder(link.href) ? (
                <span
                  aria-disabled="true"
                  title="Placeholder link — add the URL in src/data/hackathons.ts"
                  className="inline-flex cursor-not-allowed items-center gap-1 text-fg-subtle line-through decoration-dotted"
                >
                  {link.label}
                  <span className="sr-only">(placeholder link, not yet set)</span>
                </span>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-hover"
                >
                  {link.label}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
