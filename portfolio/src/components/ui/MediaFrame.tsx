import { ImageIcon } from 'lucide-react'
import type { ImageSlot } from '@/data/types'
import { cn } from '@/lib/utils'

type MediaFrameProps = {
  image: ImageSlot
  className?: string
  /** Tailwind aspect ratio class. */
  ratio?: string
  /** Text shown inside the placeholder box while no image is set. */
  placeholderLabel?: string
  /** Above-the-fold images should load eagerly; everything else lazy-loads. */
  priority?: boolean
}

/**
 * An image slot that degrades gracefully: with `src` set it renders the image,
 * without one it renders a labelled placeholder frame of the same shape, so the
 * layout is identical before and after you drop real screenshots in.
 */
export function MediaFrame({
  image,
  className,
  ratio = 'aspect-16/10',
  placeholderLabel = '[PROJECT IMAGE / SCREENSHOT PLACEHOLDER]',
  priority = false,
}: MediaFrameProps) {
  if (image.src) {
    return (
      <div
        className={cn(
          'overflow-hidden rounded-lg border border-border bg-surface-2',
          ratio,
          className,
        )}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'bg-grid flex items-center justify-center rounded-lg border border-dashed border-border-strong bg-surface-2/60 p-6',
        ratio,
        className,
      )}
      role="img"
      aria-label={image.alt}
    >
      <div className="flex max-w-xs flex-col items-center gap-2 text-center">
        <ImageIcon className="size-5 text-fg-subtle" aria-hidden="true" />
        <span className="font-mono text-[0.7rem] leading-relaxed text-fg-subtle">
          {placeholderLabel}
        </span>
      </div>
    </div>
  )
}
