import { useId, useState, type FormEvent } from 'react'
import { AlertTriangle, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, type IconComponent } from './ui/BrandIcons'
import { copy, site } from '@/data/site'
import { cn, isPlaceholder, mailto, prettyUrl } from '@/lib/utils'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

export function Contact() {
  return (
    <Section id="contact" index="07" title={copy.contactHeading} subtitle={copy.contactBody}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <ContactDetails />
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}

function ContactDetails() {
  const emailHref = mailto(site.links.email)

  const entries: Array<{
    label: string
    value: string
    href: string | null
    Icon: IconComponent
    external: boolean
  }> = [
    {
      label: 'Email',
      value: site.links.email,
      href: emailHref,
      Icon: Mail,
      external: false,
    },
    {
      label: 'GitHub',
      value: prettyUrl(site.links.github),
      href: isPlaceholder(site.links.github) ? null : site.links.github,
      Icon: GithubIcon,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: prettyUrl(site.links.linkedin),
      href: isPlaceholder(site.links.linkedin) ? null : site.links.linkedin,
      Icon: LinkedinIcon,
      external: true,
    },
  ]

  return (
    <ul className="divide-y divide-border border-y border-border">
      {entries.map(({ label, value, href, Icon, external }) => (
        <li key={label}>
          {href ? (
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center gap-4 py-4 transition-colors"
            >
              <Icon className="size-4 shrink-0 text-fg-subtle" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs text-fg-subtle">{label}</span>
                <span className="block truncate text-sm text-fg transition-colors group-hover:text-accent">
                  {value}
                </span>
              </span>
            </a>
          ) : (
            <div className="flex items-center gap-4 py-4">
              <Icon className="size-4 shrink-0 text-fg-subtle" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs text-fg-subtle">{label}</span>
                <span className="block truncate font-mono text-sm text-fg-subtle">{value}</span>
              </span>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

/**
 * Contact form — UI only.
 *
 * There is deliberately no backend: submitting shows a notice rather than
 * pretending to send. Wire it to a form service (Formspree, Web3Forms, a small
 * API route) and replace `handleSubmit` when you are ready.
 */
function ContactForm() {
  const id = useId()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const fieldClass =
    'w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg ' +
    'placeholder:text-fg-subtle/70 transition-colors hover:border-border-strong ' +
    'focus:border-accent focus:outline-none'

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-surface p-6 sm:p-7">
      <p className="mb-6 flex items-start gap-2.5 rounded-md border border-dashed border-warning/40 px-3.5 py-3 text-xs leading-relaxed text-fg-muted">
        <AlertTriangle className="mt-px size-4 shrink-0 text-warning" aria-hidden="true" />
        <span>
          <strong className="font-medium text-fg">Placeholder form.</strong> This is UI only and
          does not send messages yet — please use the email link for now.
        </span>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="block text-sm font-medium text-fg">
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={cn(fieldClass, 'mt-2')}
          />
        </div>

        <div>
          <label htmlFor={`${id}-email`} className="block text-sm font-medium text-fg">
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={cn(fieldClass, 'mt-2')}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={`${id}-message`} className="block text-sm font-medium text-fg">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={5}
          placeholder="What would you like to talk about?"
          className={cn(fieldClass, 'mt-2 resize-y')}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit">Send message</Button>
        <p role="status" aria-live="polite" className="text-sm text-fg-muted">
          {submitted ? 'Not sent — this form has no backend connected yet.' : ''}
        </p>
      </div>
    </form>
  )
}
