import { Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/BrandIcons'
import { copy, site } from '@/data/site'
import { Button } from './ui/Button'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

export function ResumeCTA() {
  return (
    <section aria-labelledby="cta-heading" className="border-t border-border py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="bg-grid relative overflow-hidden rounded-xl border border-border bg-surface px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2
              id="cta-heading"
              className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
            >
              {copy.ctaHeading}
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-fg-muted">{copy.ctaBody}</p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button href={site.links.resume} icon={<Download className="size-4" />}>
                Download resume
              </Button>
              <Button
                href={site.links.github}
                variant="secondary"
                icon={<GithubIcon className="size-4" />}
              >
                View GitHub
              </Button>
              <Button
                href={site.links.linkedin}
                variant="secondary"
                icon={<LinkedinIcon className="size-4" />}
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
