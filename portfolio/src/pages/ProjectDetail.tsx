import { ArrowLeft, ArrowRight, BookText, ExternalLink } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { GithubIcon, type IconComponent } from '@/components/ui/BrandIcons'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { Reveal } from '@/components/ui/Reveal'
import { TagList } from '@/components/ui/Tag'
import { getAdjacentProjects, getProjectBySlug } from '@/data/projects'
import type { CaseStudySection, Project } from '@/data/types'
import { site } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'

/** 'The Problem' -> 'the-problem', used for the in-page contents links. */
function slugifySection(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug)

  // Unknown slug — send it to the 404 page rather than rendering an empty shell.
  if (!project) return <Navigate to="/404" replace />

  return <CaseStudy project={project} />
}

function CaseStudy({ project }: { project: Project }) {
  const { previous, next } = getAdjacentProjects(project.slug)
  usePageMeta(`${project.name} — ${site.name}`, project.tagline)

  const externalLinks = (
    [
      { label: 'GitHub', href: project.links?.github, Icon: GithubIcon },
      { label: 'Live demo', href: project.links?.demo, Icon: ExternalLink },
      { label: 'Documentation', href: project.links?.docs, Icon: BookText },
    ] as Array<{ label: string; href?: string; Icon: IconComponent }>
  ).filter((link): link is { label: string; href: string; Icon: IconComponent } =>
    Boolean(link.href),
  )

  return (
    <article className="pt-28 pb-20 sm:pt-32">
      {/* ---------- Header ---------- */}
      <Container>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All projects
        </Link>

        <header className="mt-8 border-b border-border pb-10">
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">{project.tagline}</p>

          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs text-fg-subtle">Role</dt>
              <dd className="mt-1 text-sm text-fg">{project.role}</dd>
            </div>
            {project.timeframe ? (
              <div>
                <dt className="text-xs text-fg-subtle">Year</dt>
                <dd className="mt-1 text-sm text-fg">{project.timeframe}</dd>
              </div>
            ) : null}
            <div className="sm:col-span-1">
              <dt className="text-xs text-fg-subtle">Stack</dt>
              <dd className="mt-2">
                <TagList items={project.tech} label="Tech stack" />
              </dd>
            </div>
          </dl>

          {externalLinks.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-2.5">
              {externalLinks.map(({ label, href, Icon }) => (
                <Button
                  key={label}
                  href={href}
                  variant="secondary"
                  size="sm"
                  icon={<Icon className="size-4" />}
                >
                  {label}
                </Button>
              ))}
            </div>
          ) : null}
        </header>
      </Container>

      {/* ---------- Hero image ---------- */}
      <Container className="mt-10">
        <MediaFrame image={project.image} ratio="aspect-16/9" priority />
        {project.image.caption ? (
          <p className="mt-3 text-center text-xs text-fg-subtle">{project.image.caption}</p>
        ) : null}
      </Container>

      {/* ---------- Body + contents ---------- */}
      <Container className="mt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* On-page contents — sticky on large screens, hidden on small */}
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="On this page" className="sticky top-24">
              <h2 className="font-mono text-xs tracking-wide text-fg-subtle uppercase">
                On this page
              </h2>
              <ul className="mt-4 space-y-2 border-l border-border">
                {project.caseStudy.map((section) => (
                  <li key={section.title}>
                    <a
                      href={`#${slugifySection(section.title)}`}
                      className="-ml-px block border-l border-transparent pl-4 text-sm text-fg-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-9">
            <div className="space-y-14">
              {project.caseStudy.map((section) => (
                <Reveal key={section.title}>
                  <CaseStudyBlock section={section} />
                </Reveal>
              ))}
            </div>

            {/* ---------- Links ---------- */}
            {externalLinks.length > 0 ? (
              <Reveal>
                <section
                  aria-labelledby="links-heading"
                  className="mt-14 border-t border-border pt-10"
                >
                  <h2 id="links-heading" className="text-xl font-semibold tracking-tight">
                    Links
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {externalLinks.map(({ label, href, Icon }) => (
                      <Button
                        key={label}
                        href={href}
                        variant="secondary"
                        size="sm"
                        icon={<Icon className="size-4" />}
                      >
                        {label}
                      </Button>
                    ))}
                  </div>
                </section>
              </Reveal>
            ) : null}
          </div>
        </div>
      </Container>

      {/* ---------- Prev / next ---------- */}
      <Container className="mt-20">
        <nav
          aria-label="More projects"
          className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              to={`/projects/${previous.slug}`}
              className="group rounded-lg border border-border p-5 transition-colors hover:border-accent"
            >
              <span className="inline-flex items-center gap-2 text-xs text-fg-subtle">
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                Previous
              </span>
              <span className="mt-2 block font-medium transition-colors group-hover:text-accent">
                {previous.name}
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}

          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="group rounded-lg border border-border p-5 text-right transition-colors hover:border-accent sm:col-start-2"
            >
              <span className="inline-flex items-center gap-2 text-xs text-fg-subtle">
                Next
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
              <span className="mt-2 block font-medium transition-colors group-hover:text-accent">
                {next.name}
              </span>
            </Link>
          ) : null}
        </nav>
      </Container>
    </article>
  )
}

/** Renders one case-study section: paragraphs, optional bullets, optional image. */
function CaseStudyBlock({ section }: { section: CaseStudySection }) {
  const id = slugifySection(section.title)

  return (
    <section aria-labelledby={id} className="scroll-mt-24">
      <h2 id={id} className="text-xl font-semibold tracking-tight sm:text-2xl">
        {section.title}
      </h2>

      {section.body?.length ? (
        <div className="mt-4 space-y-4">
          {section.body.map((paragraph, index) => (
            <p key={index} className="max-w-[68ch] leading-relaxed text-fg-muted">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {section.bullets?.length ? (
        <ul className="mt-5 max-w-[68ch] space-y-2.5">
          {section.bullets.map((bullet, index) => (
            <li key={index} className="flex gap-3 leading-relaxed text-fg-muted">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}

      {section.image ? (
        <figure className="mt-7">
          <MediaFrame
            image={section.image}
            ratio="aspect-16/9"
            placeholderLabel={section.image.caption ?? '[IMAGE PLACEHOLDER]'}
          />
          {section.image.src && section.image.caption ? (
            <figcaption className="mt-3 text-xs text-fg-subtle">{section.image.caption}</figcaption>
          ) : null}
        </figure>
      ) : null}
    </section>
  )
}
