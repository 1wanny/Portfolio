import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { site } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'

export function NotFound() {
  usePageMeta(`Page not found — ${site.name}`)

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md leading-relaxed text-fg-muted">
        That page doesn’t exist — it may have been moved or renamed.
      </p>
      <Button to="/" className="mt-8" icon={<ArrowLeft className="size-4" />}>
        Back to home
      </Button>
    </Container>
  )
}
