/**
 * Shared content types.
 *
 * Every piece of site content is described here and supplied from the files in
 * `src/data/`. Components never hardcode content — edit the data, not the UI.
 */

export type Link = {
  label: string
  href: string
}

/** An image slot. `src` may be null — the UI then renders a labelled placeholder. */
export type ImageSlot = {
  /** Path to the image, e.g. '/projects/my-project.png'. Null renders a placeholder box. */
  src: string | null
  /** Always write real alt text describing the image once you add one. */
  alt: string
  /** Short caption shown under the image in case studies. Optional. */
  caption?: string
}

export type CaseStudySection = {
  /** Rendered as an <h2> in the case study and listed in the on-page contents. */
  title: string
  /** One or more paragraphs. */
  body?: string[]
  /** Optional bulleted list rendered under the paragraphs. */
  bullets?: string[]
  /** Optional image/diagram slot rendered at the end of the section. */
  image?: ImageSlot
}

export type Project = {
  /** URL segment: /projects/<slug>. Must be unique. */
  slug: string
  /** Display name. */
  name: string
  /** One line, shown on the card and under the case-study title. */
  tagline: string
  /** 2–3 sentences for the featured card. */
  summary: string
  /** Your role on the project, e.g. '[ROLE]'. */
  role: string
  /** Optional timeframe, e.g. '[YEAR]'. */
  timeframe?: string
  /** Technologies, rendered as badges. */
  tech: string[]
  /** Card / hero image. */
  image: ImageSlot
  /** Optional external links. Omit any that do not apply. */
  links?: {
    github?: string
    demo?: string
    docs?: string
  }
  /** Set false to keep a project in the list but off the home page. */
  featured?: boolean
  /**
   * The case study body. Sections render in order, so you can add, remove or
   * reorder them per project without touching any component.
   */
  caseStudy: CaseStudySection[]
}

export type SkillGroup = {
  category: string
  /** Optional one-line note about how you use this group. */
  note?: string
  items: string[]
}

export type Activity = {
  name: string
  /** e.g. '[DATE / YEAR]' */
  date: string
  /** Free-text label: Hackathon, Workshop, Competition, Club, … */
  kind: string
  description: string
  role: string
  tech: string[]
  /** Participation, finalist, award, completed — whatever is true. */
  outcome: string
  links?: Link[]
}

/**
 * One labelled block of modules, e.g. a year or a semester.
 * The label is free text — 'Year 1', 'Semester 2', 'Electives' all work.
 */
export type CourseworkGroup = {
  label: string
  modules: string[]
}

export type Education = {
  institution: string
  program: string
  start: string
  end: string
  /** Grouped coursework. Use a single group with any label if you don't want a split. */
  coursework: CourseworkGroup[]
  /** Optional. Leave the array empty to hide the block entirely. */
  achievements?: string[]
}

export type BuildStatus = 'IN PROGRESS' | 'PLANNING' | 'PROTOTYPING' | 'ON HOLD'

export type CurrentProject = {
  name: string
  description: string
  status: BuildStatus
  focus: string[]
  link?: string
}
