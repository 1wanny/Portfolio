import { useEffect, useRef } from 'react'

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

/**
 * Reveals an element once it scrolls into view by flipping `data-reveal` to
 * "shown" (the transition itself lives in index.css).
 *
 * Under `prefers-reduced-motion: reduce` the element is shown immediately and
 * no observer is created.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia(REDUCED_MOTION).matches) {
      element.setAttribute('data-reveal', 'shown')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.setAttribute('data-reveal', 'shown')
            observer.disconnect()
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}
