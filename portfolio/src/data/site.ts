/**
 * Site-wide identity, links and copy.
 * ---------------------------------------------------------------------------
 * START HERE. Replace every [BRACKETED] value below with your own details.
 * These values feed the navbar, hero, about, CTA, contact and footer.
 */

export const site = {
  /** Full name, used in the hero, footer and page titles. */
  name: 'Ridzwan Yusri',
  /** 2–3 characters for the navbar mark, e.g. initials. */
  initials: '[RY]',
  /** Small label above the hero heading, e.g. your field. */
  role: 'Aspiring Data Analyst / AI Engineer',
  /** Large supporting headline under your name. Keep it under ~12 words. */
  headline: "Always exploring beyond the code I'm assigned",
  /** 2–3 sentence hero introduction. */
  intro: "I'm an 18yo Singaporean student, studying Applied AI & Analytics at Nanyang Polytechnic",
  /** One-line tagline used in the footer. */
  tagline: '[SHORT TAGLINE]',
  /** Where you are based. Set to null to hide. */
  location: 'Singapore',
  /** Availability line shown in the hero status pill. Set to null to hide. */
  availability: 'Seeking internships',

  links: {
    email: 'ridzwan.yusri@gmail.com',
    github: 'https://github.com/1wanny',
    linkedin: 'https://www.linkedin.com/in/ridzwan-yusri-0a5ab833b/',
    /** Put your PDF in `public/` and point here, e.g. '/resume.pdf'. */
    resume: 'public/Resume.pdf',
  },
} as const

/** About section copy. */
export const about = {
  paragraphs: [
    "Hello! I'm Ridzwan, a curious and driven student who is always eager to learn and understand how things work. Challenges motivate me to persist until I find solutions, which led me to coding and exploring ideas in greater depth.",
    '[BACKGROUND / INTERESTS PLACEHOLDER]',
    '[WHAT I ENJOY BUILDING / LEARNING PLACEHOLDER]',
  ],
  /** The "Currently" list. Labels are yours to change. */
  currently: [
    { label: 'Studying', value: 'Applied AI & Analytics' },
    { label: 'Focused on', value: 'Data Analysis' },
    { label: 'Learning', value: 'nil' },
    { label: 'Working toward', value: '[CURRENT GOAL]' },
  ],
  /** Set `src` to an image path to show a photo. Leave null to hide the frame. */
  photo: {
    src: null as string | null,
    alt: 'This is me',
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
