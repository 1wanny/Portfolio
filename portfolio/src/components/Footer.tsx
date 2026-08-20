import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, type IconComponent } from './ui/BrandIcons'
import { site } from '@/data/site'
import { isPlaceholder, mailto } from '@/lib/utils'
import { Container } from './ui/Container'

export function Footer() {
  const year = new Date().getFullYear()

  const links: Array<{
    label: string
    href: string | null
    Icon: IconComponent
    external: boolean
  }> = [
    { label: 'GitHub', href: site.links.github, Icon: GithubIcon, external: true },
    { label: 'LinkedIn', href: site.links.linkedin, Icon: LinkedinIcon, external: true },
    { label: 'Email', href: mailto(site.links.email), Icon: Mail, external: false },
  ]

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-semibold tracking-tight">{site.name}</p>
            <p className="mt-1 text-sm text-fg-muted">{site.tagline}</p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {links.map(({ label, href, Icon, external }) => (
              <li key={label}>
                {href && !isPlaceholder(href) ? (
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-accent"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {label}
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center gap-2 text-fg-subtle line-through decoration-dotted"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {label}
                    <span className="sr-only">(placeholder link, not yet set)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 border-t border-border pt-6 font-mono text-xs text-fg-subtle">
          © {year} {site.name}
        </p>
      </Container>
    </footer>
  )
}
