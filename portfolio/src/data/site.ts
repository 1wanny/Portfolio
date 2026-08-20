/**
 * Site-wide identity, links and copy.
 * ---------------------------------------------------------------------------
 * START HERE. Replace every [BRACKETED] value below with your own details.
 * These values feed the navbar, hero, about, CTA, contact and footer.
 */

export const site = {
  /** Full name, used in the hero, footer and page titles. */
  name: '[YOUR NAME]',
  /** 2–3 characters for the navbar mark, e.g. initials. */
  initials: '[IN]',
  /** Small label above the hero heading, e.g. your field. */
  role: '[YOUR ROLE / FIELD]',
  /** Large supporting headline under your name. Keep it under ~12 words. */
  headline: '[SHORT VALUE PROPOSITION]',
  /** 2–3 sentence hero introduction. */
  intro: '[2–3 SENTENCE INTRODUCTION ABOUT YOURSELF AND WHAT YOU BUILD]',
  /** One-line tagline used in the footer. */
  tagline: '[SHORT TAGLINE]',
  /** Where you are based. Set to null to hide. */
  location: '[LOCATION]',
  /** Availability line shown in the hero status pill. Set to null to hide. */
  availability: '[AVAILABILITY — e.g. seeking internships]',

  links: {
    email: '[EMAIL]',
    github: '[GITHUB URL]',
    linkedin: '[LINKEDIN URL]',
    /** Put your PDF in `public/` and point here, e.g. '/resume.pdf'. */
    resume: '[RESUME URL]',
  },
} as const

/** About section copy. */
export const about = {
  paragraphs: [
    '[ABOUT ME PLACEHOLDER]',
    '[BACKGROUND / INTERESTS PLACEHOLDER]',
    '[WHAT I ENJOY BUILDING / LEARNING PLACEHOLDER]',
  ],
  /** The "Currently" list. Labels are yours to change. */
  currently: [
    { label: 'Studying', value: '[CURRENT EDUCATION]' },
    { label: 'Focused on', value: '[CURRENT AREA OF FOCUS]' },
    { label: 'Learning', value: '[CURRENT TECHNOLOGY / TOPIC LEARNING]' },
    { label: 'Working toward', value: '[CURRENT GOAL]' },
  ],
  /** Set `src` to an image path to show a photo. Leave null to hide the frame. */
  photo: {
    src: null as string | null,
    alt: '[PROFILE IMAGE ALT TEXT]',
  },
} as const

/** Section intros used across the page. */
export const copy = {
  projectsSubheading: '[SHORT DESCRIPTION OF WHAT THESE PROJECTS REPRESENT]',
  ctaHeading: 'Interested in working together?',
  ctaBody: '[SHORT CTA PLACEHOLDER]',
  contactHeading: "Let's Connect",
  contactBody: '[CONTACT MESSAGE PLACEHOLDER]',
} as const
