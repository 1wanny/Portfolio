import { useMemo } from 'react'
import { ArrowLeft, Search, X } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { ProjectCard } from '@/components/ProjectCard'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { projects, usedCategories } from '@/data/projects'
import { site } from '@/data/site'
import type { Project, ProjectCategory } from '@/data/types'
import { usePageMeta } from '@/hooks/usePageMeta'
import { cn } from '@/lib/utils'

const ALL = 'All'

/** Everything a search query is matched against. */
function searchableText(project: Project) {
  return [
    project.name,
    project.tagline,
    project.summary,
    project.role,
    project.timeframe ?? '',
    ...project.tech,
    ...project.categories,
  ]
    .join(' ')
    .toLowerCase()
}

/** Featured projects first, otherwise the order they appear in projects.ts. */
const orderedProjects = [...projects].sort((a, b) => {
  const score = (project: Project) => (project.featured === false ? 1 : 0)
  return score(a) - score(b)
})

export function AllProjects() {
  usePageMeta(`Projects — ${site.name}`, 'Every project, searchable and filterable by category.')

  // Filters live in the URL so they survive a reload, a shared link and the
  // back button from a case study.
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const categoryParam = searchParams.get('category')
  const activeCategory: string =
    categoryParam && usedCategories.includes(categoryParam as ProjectCategory)
      ? categoryParam
      : ALL

  const setParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next, { replace: true })
  }

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()

    return orderedProjects.filter((project) => {
      const matchesCategory =
        activeCategory === ALL || project.categories.includes(activeCategory as ProjectCategory)
      const matchesQuery = needle === '' || searchableText(project).includes(needle)
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  const filters = [ALL, ...usedCategories]
  const isFiltered = query.trim() !== '' || activeCategory !== ALL

  return (
    <div className="pt-28 pb-24 sm:pt-32">
      <Container>
        <header className="border-b border-border pb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-tight text-accent"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Archive
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            All Projects
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
            Everything I&rsquo;ve built, coursework and self-directed alike. Search by name or
            technology, or filter by what kind of work it was.
          </p>
        </header>

        {/* ---------- Controls ---------- */}
        <section aria-label="Search and filter projects" className="mt-10">
          <div className="relative">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <Search
              className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-fg-subtle"
              aria-hidden="true"
            />
            <input
              id="project-search"
              type="search"
              value={query}
              onChange={(event) => setParam('q', event.target.value || null)}
              placeholder="Search by name, description or technology…"
              className="w-full rounded-md border border-border bg-surface py-2.5 pr-10 pl-10 text-sm text-fg transition-colors placeholder:text-fg-subtle/70 hover:border-border-strong focus:border-accent focus:outline-none"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setParam('q', null)}
                className="absolute top-1/2 right-2.5 grid size-7 -translate-y-1/2 place-items-center rounded text-fg-subtle transition-colors hover:bg-surface-2 hover:text-fg"
              >
                <X className="size-4" aria-hidden="true" />
                <span className="sr-only">Clear search</span>
              </button>
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by category">
            {filters.map((filter) => {
              const active = activeCategory === filter
              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setParam('category', filter === ALL ? null : filter)}
                  className={cn(
                    'rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                    active
                      ? 'border-accent bg-accent text-accent-fg'
                      : 'border-border-strong text-fg-muted hover:border-accent hover:text-accent',
                  )}
                >
                  {filter}
                </button>
              )
            })}

            {isFiltered ? (
              <button
                type="button"
                onClick={() => setSearchParams(new URLSearchParams(), { replace: true })}
                className="ml-1 text-sm text-fg-subtle underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                Reset
              </button>
            ) : null}
          </div>

          <p aria-live="polite" className="mt-5 font-mono text-xs text-fg-subtle">
            {results.length} {results.length === 1 ? 'project' : 'projects'}
            {isFiltered ? ` of ${projects.length}` : ''}
          </p>
        </section>

        {/* ---------- Results ---------- */}
        {results.length > 0 ? (
          <div className="mt-14 space-y-20 sm:space-y-24 lg:space-y-32">
            {results.map((project, index) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-14 rounded-lg border border-dashed border-border-strong px-6 py-16 text-center">
            <p className="font-medium text-fg">No projects match that search.</p>
            <p className="mt-2 text-sm text-fg-muted">
              Try a different term, or clear the filters to see everything.
            </p>
            <button
              type="button"
              onClick={() => setSearchParams(new URLSearchParams(), { replace: true })}
              className="mt-6 text-sm text-accent underline-offset-4 transition-colors hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </Container>
    </div>
  )
}
