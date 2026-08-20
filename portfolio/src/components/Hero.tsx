import { ArrowRight, Download, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { site } from '@/data/site'
import { isPlaceholder, mailto } from '@/lib/utils'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  const email = mailto(site.links.email)

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {site.availability && !isPlaceholder(site.availability) ? (
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-fg-muted">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-success" />
                </span>
                {site.availability}
              </p>
            ) : (
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-dashed border-border-strong px-3 py-1 font-mono text-xs text-fg-subtle">
                {site.availability}
              </p>
            )}

            <p className="font-mono text-sm tracking-tight text-accent">{site.role}</p>

            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              {site.name}
            </h1>

            <p className="mt-5 max-w-2xl text-xl leading-snug font-medium text-fg-muted sm:text-2xl">
              {site.headline}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted">{site.intro}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="#projects" iconAfter={<ArrowRight className="size-4" />}>
                View projects
              </Button>
              <Button
                href={site.links.resume}
                variant="secondary"
                icon={<Download className="size-4" />}
              >
                Download resume
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <SecondaryLink
                href={site.links.github}
                label="GitHub"
                icon={<GithubIcon className="size-4" aria-hidden="true" />}
              />
              <SecondaryLink
                href={site.links.linkedin}
                label="LinkedIn"
                icon={<LinkedinIcon className="size-4" aria-hidden="true" />}
              />
              {email ? (
                <a
                  href={email}
                  className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-accent"
                >
                  {site.links.email}
                </a>
              ) : null}
              {site.location ? (
                <span className="inline-flex items-center gap-2 text-fg-subtle">
                  <MapPin className="size-4" aria-hidden="true" />
                  {site.location}
                </span>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  )
}

function SecondaryLink({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: React.ReactNode
}) {
  if (isPlaceholder(href)) {
    return (
      <span
        aria-disabled="true"
        title="Placeholder link — add the URL in src/data/site.ts"
        className="inline-flex cursor-not-allowed items-center gap-2 text-fg-subtle line-through decoration-dotted"
      >
        {icon}
        {label}
        <span className="sr-only">(placeholder link, not yet set)</span>
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-accent"
    >
      {icon}
      {label}
    </a>
  )
}
