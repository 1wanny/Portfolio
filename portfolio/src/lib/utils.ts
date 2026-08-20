/** Tiny className joiner — avoids pulling in clsx for what is a five-line job. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * True when a content value is still an unreplaced placeholder, e.g. '[EMAIL]'.
 * The UI uses this to render placeholders as visibly inert rather than as
 * broken links that 404.
 */
export function isPlaceholder(value: string | null | undefined): boolean {
  if (!value) return true
  const trimmed = value.trim()
  return trimmed.startsWith('[') && trimmed.endsWith(']')
}

/** Builds a mailto: href, or null when the address is still a placeholder. */
export function mailto(email: string): string | null {
  return isPlaceholder(email) ? null : `mailto:${email}`
}

/** Strips the protocol for display purposes: 'https://github.com/x' -> 'github.com/x'. */
export function prettyUrl(url: string): string {
  if (isPlaceholder(url)) return url
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}
