import { UserRound } from 'lucide-react'
import { about } from '@/data/site'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

export function About() {
  const hasPhoto = about.photo.src !== null

  return (
    <Section id="about" index="01" title="About Me">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-fg-muted">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="max-w-[65ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-5">
          <div className="space-y-8">
            {/* Optional profile image — the frame only renders when a photo is set */}
            {hasPhoto ? (
              <img
                src={about.photo.src ?? undefined}
                alt={about.photo.alt}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full max-w-xs rounded-lg border border-border object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label={about.photo.alt}
                className="bg-grid flex aspect-square w-full max-w-[13rem] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border-strong bg-surface-2/60 p-4 text-center"
              >
                <UserRound className="size-5 text-fg-subtle" aria-hidden="true" />
                <span className="font-mono text-[0.7rem] text-fg-subtle">[PROFILE IMAGE]</span>
                <span className="font-mono text-[0.6rem] text-fg-subtle/70">
                  optional — set about.photo.src
                </span>
              </div>
            )}

            <div>
              <h3 className="font-mono text-sm tracking-tight text-accent">Currently</h3>
              <dl className="mt-4 divide-y divide-border border-t border-border">
                {about.currently.map((entry) => (
                  <div key={entry.label} className="grid grid-cols-3 gap-3 py-3">
                    <dt className="col-span-1 text-sm text-fg-subtle">{entry.label}</dt>
                    <dd className="col-span-2 text-sm text-fg">{entry.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
