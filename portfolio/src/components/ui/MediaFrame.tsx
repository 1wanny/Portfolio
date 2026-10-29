import { ImageIcon } from 'lucide-react'
import type { ImageSlot } from '@/data/types'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/lib/utils'

type MediaFrameProps = {
  image: ImageSlot
  className?: string
  /** Tailwind aspect ratio class. */
  ratio?: string
  /** Text shown inside the placeholder box while no media is set. */
  placeholderLabel?: string
  /** Above-the-fold media should load eagerly; everything else lazy-loads. */
  priority?: boolean
}

const VIDEO_EXTENSIONS = /\.(mp4|webm|mov|m4v)$/i

function isVideo(src: string) {
  return VIDEO_EXTENSIONS.test(src)
}

/**
 * A media slot that degrades gracefully: with `src` set it renders the image or
 * video, without one it renders a labelled placeholder frame of the same shape,
 * so the layout is identical before and after you drop real assets in.
 */
export function MediaFrame({
  image,
  className,
  ratio = 'aspect-16/10',
  placeholderLabel = '[PROJECT IMAGE / SCREENSHOT PLACEHOLDER]',
  priority = false,
}: MediaFrameProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  const frame = cn('overflow-hidden rounded-lg border border-border bg-surface-2', ratio, className)

  if (image.src && isVideo(image.src)) {
    return (
      <div className={frame}>
        {/*
          Controls are always available. Looping autoplay only kicks in when the
          visitor has not asked for reduced motion; otherwise it waits for a
          click. `preload="metadata"` keeps the page light either way.
        */}
        <video
          src={image.src}
          poster={image.poster}
          aria-label={image.alt}
          controls
          muted
          playsInline
          autoPlay={!prefersReducedMotion}
          loop={!prefersReducedMotion}
          preload="metadata"
          className="h-full w-full bg-black object-contain"
        />
      </div>
    )
  }

  if (image.src) {
    return (
      <div className={frame}>
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={cn(
            'h-full w-full transition-transform duration-500 ease-out',
            image.fit === 'contain'
              ? 'object-contain'
              : 'object-cover group-hover:scale-[1.02]',
          )}
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
