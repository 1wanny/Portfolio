import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function currentTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/**
 * Light/dark toggle. The initial class is applied by the inline script in
 * index.html so the correct theme paints on first frame with no flash; this
 * hook only reads and updates it.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* storage unavailable (private mode) — the toggle still works in-session */
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((previous) => (previous === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}
