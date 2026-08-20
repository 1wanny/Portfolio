/**
 * Navigation links.
 * `id` must match the `id` passed to the matching <Section> on the home page.
 */
export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const

export const navSectionIds = navSections.map((section) => section.id)
