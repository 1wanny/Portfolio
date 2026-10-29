import { useId, useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2, Mail } from 'lucide-react'
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
 * Contact form.
 *
 * Two ways to deliver a message, chosen by `site.links.contactForm`:
 *
 * - With an endpoint set, the message is POSTed in the background and the
 *   visitor never leaves the page.
 * - Without one, it opens their email client with everything pre-filled. Less
 *   smooth, but a real message either way — nothing is silently dropped.
 */
function ContactForm() {
  const id = useId()
  const endpoint: string = site.links.contactForm
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'handoff' | 'error'>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot: real people leave it empty, bots fill everything in. Pretend to
    // succeed so the bot has nothing to learn from.
    if (data.get('company')) {
      setStatus('sent')
      form.reset()
      return
    }

    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')

    if (!endpoint) {
      const subject = `Portfolio message from ${name}`
      const lines = [message, '', `— ${name}`, email]
      window.location.href =
        `mailto:${site.links.email}` +
        `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
      setStatus('handoff')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          subject: `Portfolio message from ${name}`,
        }),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  const fieldClass =
    'w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm text-fg ' +
    'placeholder:text-fg-subtle/70 transition-colors hover:border-border-strong ' +
    'focus:border-accent focus:outline-none disabled:opacity-60'

  if (status === 'sent') {
    return (
      <div className="rounded-lg border border-border bg-surface p-6 sm:p-7">
        <p className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
          <span>
            <strong className="block font-medium text-fg">Message sent.</strong>
            <span className="mt-1 block text-sm leading-relaxed text-fg-muted">
              Thanks for reaching out — I&apos;ll reply to the email address you gave.
            </span>
          </span>
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Send another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-surface p-6 sm:p-7">
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
            disabled={sending}
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
            disabled={sending}
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
          disabled={sending}
          placeholder="What would you like to talk about?"
          className={cn(fieldClass, 'mt-2 resize-y')}
        />
      </div>

      {/* Spam honeypot — hidden from people and from screen readers alike. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          icon={sending ? <Loader2 className="size-4 animate-spin" /> : undefined}
        >
          {sending ? 'Sending…' : 'Send message'}
        </Button>

        <p role="status" aria-live="polite" className="text-sm text-fg-muted">
          {status === 'handoff'
            ? 'Opening your email app with the message ready to send.'
            : status === 'error'
              ? `That didn’t go through. Please email ${site.links.email} instead.`
              : ''}
        </p>
      </div>
    </form>
  )
}
