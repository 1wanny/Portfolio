/**
 * Site-wide identity, links and copy.
 * ---------------------------------------------------------------------------
 * START HERE. Replace every [BRACKETED] value below with your own details.
 * These values feed the navbar, hero, about, CTA, contact and footer.
 */

export const site = {
  /** Full name, used in the hero, footer and page titles. */
  name: 'Ridzwan Yusri',
  /**
   * Navbar wordmark. Two files so the mark stays readable in both themes:
   * `light` is used on the light background, `dark` on the dark one.
   */
  logo: {
    light: '/logo.png',
    dark: '/logo-dark.png',
    /** Empty on purpose — the adjacent text already names the site. */
    alt: '',
  },
  /** Small label above the hero heading, e.g. your field. */
  role: 'Aspiring Data Analyst / AI Engineer',
  /** Large supporting headline under your name. Keep it under ~12 words. */
  headline: "Always exploring beyond the code I'm assigned",
  /** 2–3 sentence hero introduction. */
  intro: "I'm an 18yo Singaporean student, studying Applied AI & Analytics at Nanyang Polytechnic",
  /** Where you are based. Set to null to hide. */
  location: 'Singapore',
  /** Availability line shown in the hero status pill. Set to null to hide. */
  availability: 'Seeking internships',

  links: {
    email: 'ridzwan.yusri@gmail.com',
    github: 'https://github.com/1wanny',
    linkedin: 'https://www.linkedin.com/in/ridzwan-yusri',
    /** Put your PDF in `public/` and point here, e.g. '/resume.pdf'. */
    resume: '/Resume.pdf',
    /**
     * Optional endpoint the contact form POSTs to, e.g. a Formspree
     * ('https://formspree.io/f/xxxxxxxx') or Web3Forms URL. Sign up, paste the
     * URL here, and messages arrive in your inbox without leaving the page.
     * Leave it empty and the form instead opens the visitor's email client
     * with the message pre-filled — which still works, just less smoothly.
     */
    contactForm: '',
  },
} as const

/** About section copy. */
export const about = {
  paragraphs: [
    "Hello! I'm Ridzwan, a curious and driven student who is always eager to learn and understand how things work. Challenges motivate me to persist until I find solutions, which led me to coding and exploring ideas in greater depth.",
    '',
    'I also enjoy building my own free, personal versions of paid subscription tools.(FOR PERSONAL USE ONLY)',
  ],
  /** The "Currently" list. Labels are yours to change. */
  currently: [
    { label: 'Studying', value: 'Applied AI & Analytics' },
    { label: 'Focused on', value: 'Data Analysis' },
    { label: 'Working toward', value: 'Data Scientist' },
  ],
  /** Set `src` to an image path to show a photo. Leave null to hide the frame. */
  photo: {
    src: '/images/WhatsApp Image 2026-10-29 at 18.47.56.jpeg',
    alt: 'This is me',
  },
} as const

/** Section intros used across the page. */
export const copy = {
  projectsSubheading: "",
  ctaHeading: 'Interested in working together?',
  ctaBody: "Let's Connect",
  contactHeading: "Let's Connect",
  contactBody: '',
} as const
