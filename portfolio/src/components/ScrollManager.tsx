import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Route-change scroll behaviour:
 *  - navigating to a new page starts at the top
 *  - navigating to /#section jumps to that section (e.g. "All projects" from a
 *    case study, where the target element does not exist until Home mounts)
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so the destination page has rendered its sections.
      const frame = requestAnimationFrame(() => {
        const target = document.getElementById(hash.slice(1))
        target?.scrollIntoView({ behavior: 'auto', block: 'start' })
      })
      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
