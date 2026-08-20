import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FileText, Menu, Moon, Sun, X } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { navSections, navSectionIds } from '@/data/nav'
import { site } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTheme } from '@/hooks/useTheme'
import { cn, isPlaceholder } from '@/lib/utils'
import { Container } from './ui/Container'

type SectionLinkProps = {
  id: string
  /** On the home page an in-page anchor is enough; elsewhere we need to route. */
  isHome: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
  'aria-current'?: 'true'
}

/**
 * A nav link to a home-page section. From a case-study page it becomes a
 * router <Link> to `/#section`, so navigation stays client-side and
 * ScrollManager handles the jump once Home has mounted.
 */
function SectionLink({ id, isHome, children, ...rest }: SectionLinkProps) {
  if (isHome) {
    return (
      <a href={`#${id}`} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={`/#${id}`} {...rest}>
      {children}
    </Link>
  )
}

export function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const toggleRef = useRef<HTMLButtonElement>(null)

  const activeSection = useActiveSection(isHome ? navSectionIds : [])

  // Solidify the bar once the page moves away from the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation. Adjusting state during render (rather
  // than in an effect) avoids the extra render pass a reset-effect would cause.
  const locationKey = `${location.pathname}${location.hash}`
  const [lastLocationKey, setLastLocationKey] = useState(locationKey)
  if (locationKey !== lastLocationKey) {
    setLastLocationKey(locationKey)
    setOpen(false)
  }

  // Escape closes the menu and returns focus to the toggle.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const iconLinks = [
    { href: site.links.github, label: 'GitHub', Icon: GithubIcon },
    { href: site.links.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-border bg-bg/85 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <Container>
        <nav aria-label="Primary" className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link
            to="/"
            className="font-mono text-sm font-semibold tracking-tight text-fg transition-colors hover:text-accent"
          >
            <span className="rounded border border-border-strong px-2 py-1">{site.initials}</span>
            <span className="sr-only">{site.name} — home</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navSections.map((section) => {
              const active = isHome && activeSection === section.id
              return (
                <li key={section.id}>
                  <SectionLink
                    id={section.id}
                    isHome={isHome}
                    aria-current={active ? 'true' : undefined}
                    className={cn(
                      'rounded px-3 py-2 text-sm transition-colors',
                      active ? 'text-accent' : 'text-fg-muted hover:text-fg',
                    )}
                  >
                    {section.label}
                  </SectionLink>
                </li>
              )
            })}
          </ul>

          {/* Right-hand actions */}
          <div className="flex items-center gap-1">
            <div className="hidden items-center gap-1 sm:flex">
              {iconLinks.map(({ href, label, Icon }) =>
                isPlaceholder(href) ? (
                  <span
                    key={label}
                    title={`${label} — placeholder link, add the URL in src/data/site.ts`}
                    aria-disabled="true"
                    className="grid size-9 place-items-center rounded text-fg-subtle/60"
                  >
                    <Icon className="size-4.5" aria-hidden="true" />
                    <span className="sr-only">{label} (placeholder link, not yet set)</span>
                  </span>
                ) : (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-9 place-items-center rounded text-fg-muted transition-colors hover:bg-surface-2 hover:text-accent"
                  >
                    <Icon className="size-4.5" aria-hidden="true" />
                    <span className="sr-only">{label}</span>
                  </a>
                ),
              )}
            </div>

            <button
              type="button"
              onClick={toggle}
              className="grid size-9 place-items-center rounded text-fg-muted transition-colors hover:bg-surface-2 hover:text-accent"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? (
                <Sun className="size-4.5" aria-hidden="true" />
              ) : (
                <Moon className="size-4.5" aria-hidden="true" />
              )}
            </button>

            {/* Résumé — inert while the URL is a placeholder */}
            {isPlaceholder(site.links.resume) ? (
              <span
                aria-disabled="true"
                title="Placeholder link — set links.resume in src/data/site.ts"
                className="ml-1 hidden h-9 cursor-not-allowed items-center gap-1.5 rounded-md border border-dashed border-border-strong px-3 text-sm text-fg-subtle sm:inline-flex"
              >
                <FileText className="size-4" aria-hidden="true" />
                Resume
                <span className="sr-only">(placeholder link, not yet set)</span>
              </span>
            ) : (
              <a
                href={site.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 hidden h-9 items-center gap-1.5 rounded-md border border-border-strong px-3 text-sm text-fg transition-colors hover:border-accent hover:text-accent sm:inline-flex"
              >
                <FileText className="size-4" aria-hidden="true" />
                Resume
              </a>
            )}

            {/* Mobile toggle */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid size-9 place-items-center rounded text-fg transition-colors hover:bg-surface-2 lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu — a full panel, not a squeezed desktop row */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-bg lg:hidden"
      >
        <Container className="py-4">
          <ul className="flex flex-col">
            {navSections.map((section, index) => (
              <li key={section.id}>
                <SectionLink
                  id={section.id}
                  isHome={isHome}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 border-b border-border py-3.5 text-base text-fg transition-colors hover:text-accent"
                >
                  <span className="font-mono text-xs text-fg-subtle" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.label}
                </SectionLink>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {iconLinks.map(({ href, label, Icon }) =>
              isPlaceholder(href) ? (
                <span
                  key={label}
                  aria-disabled="true"
                  className="inline-flex h-9 cursor-not-allowed items-center gap-2 rounded-md border border-dashed border-border-strong px-3 text-sm text-fg-subtle"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </span>
              ) : (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-border-strong px-3 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </a>
              ),
            )}
            {isPlaceholder(site.links.resume) ? (
              <span
                aria-disabled="true"
                className="inline-flex h-9 cursor-not-allowed items-center gap-2 rounded-md border border-dashed border-border-strong px-3 text-sm text-fg-subtle"
              >
                <FileText className="size-4" aria-hidden="true" />
                Resume
              </span>
            ) : (
              <a
                href={site.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-md bg-accent px-3 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover"
              >
                <FileText className="size-4" aria-hidden="true" />
                Resume
              </a>
            )}
          </div>
        </Container>
      </div>
    </header>
  )
}
