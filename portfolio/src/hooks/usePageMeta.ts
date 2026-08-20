import { useEffect } from 'react'

/**
 * Keeps the document title and meta description in sync per route.
 * A small stand-in for a head manager — enough for a site this size, and one
 * less dependency.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = tag?.content

    if (tag && description) tag.content = description

    return () => {
      document.title = previousTitle
      if (tag && previousDescription !== undefined) tag.content = previousDescription
    }
  }, [title, description])
}
