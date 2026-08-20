import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GithubIcon } from './ui/BrandIcons'
import type { Project } from '@/data/types'
import { cn } from '@/lib/utils'
import { Button } from './ui/Button'
import { MediaFrame } from './ui/MediaFrame'
import { TagList } from './ui/Tag'

type ProjectCardProps = {
  project: Project
  /** Zero-based position, used for the PROJECT 0n label and the alternating layout. */
  index: number
}

/**
 * A full-width featured project row: screenshot on one side, substance on the
 * other, alternating sides down the page. Stacks to image-then-content on
 * mobile so the visual still leads.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, '0')
  const flipped = index % 2 === 1
  const headingId = `project-${project.slug}-heading`

  return (
    <article
      aria-labelledby={headingId}
      className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
    >
      <div className={cn('lg:col-span-6', flipped && 'lg:order-2')}>
        <Link
          to={`/projects/${project.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="block overflow-hidden rounded-lg"
        >
          <MediaFrame image={project.image} ratio="aspect-16/10" />
        </Link>
      </div>

      <div className={cn('lg:col-span-6', flipped && 'lg:order-1')}>
        <p className="font-mono text-xs tracking-widest text-accent">PROJECT {number}</p>

        <h3 id={headingId} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent focus-visible:text-accent"
          >
            {project.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-fg-subtle">{project.tagline}</p>

        <p className="mt-4 max-w-[58ch] leading-relaxed text-fg-muted">{project.summary}</p>

        <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            <dt className="w-20 shrink-0 text-fg-subtle">Role</dt>
            <dd className="text-fg">{project.role}</dd>
          </div>
          {project.timeframe ? (
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <dt className="w-20 shrink-0 text-fg-subtle">Year</dt>
              <dd className="text-fg">{project.timeframe}</dd>
            </div>
          ) : null}
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            <dt className="w-20 shrink-0 pt-0.5 text-fg-subtle">Stack</dt>
            <dd className="min-w-0 flex-1">
              <TagList items={project.tech} label={`${project.name} tech stack`} />
            </dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap gap-2.5">
          <Button
            to={`/projects/${project.slug}`}
            size="sm"
            iconAfter={<ArrowUpRight className="size-4" />}
          >
            View case study
            <span className="sr-only"> for {project.name}</span>
          </Button>

          {project.links?.github !== undefined ? (
            <Button
              href={project.links.github}
              variant="secondary"
              size="sm"
              icon={<GithubIcon className="size-4" />}
            >
              GitHub
              <span className="sr-only"> repository for {project.name}</span>
            </Button>
          ) : null}

          {project.links?.demo !== undefined ? (
            <Button
              href={project.links.demo}
              variant="secondary"
              size="sm"
              icon={<ExternalLink className="size-4" />}
            >
              Live demo
              <span className="sr-only"> of {project.name}</span>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  )
}
