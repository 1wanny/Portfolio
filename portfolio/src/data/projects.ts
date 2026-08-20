import type { CaseStudySection, Project } from './types'

/**
 * PROJECTS
 * ---------------------------------------------------------------------------
 * Everything on the Projects section and on every /projects/<slug> case-study
 * page comes from this file.
 *
 * TO ADD A PROJECT: copy one entry in the `projects` array below, give it a
 * unique `slug`, and fill it in. The card, the route and the case-study page
 * are generated automatically — no component changes needed.
 *
 * TO WRITE A CASE STUDY: replace `caseStudy: caseStudyTemplate()` with your own
 * array of sections. Sections render in the order you list them, so you can add,
 * remove or reorder them freely per project.
 */

/**
 * The standard case-study skeleton, pre-filled with placeholders.
 * Use it as a starting point, then replace it with real content per project.
 */
export function caseStudyTemplate(): CaseStudySection[] {
  return [
    {
      title: 'Overview',
      body: ['[PROJECT OVERVIEW PLACEHOLDER]'],
    },
    {
      title: 'The Problem',
      body: ['[PROBLEM PLACEHOLDER]'],
    },
    {
      title: 'My Role',
      body: ['[MY CONTRIBUTION PLACEHOLDER]'],
    },
    {
      title: 'Key Features',
      bullets: ['[FEATURE 1]', '[FEATURE 2]', '[FEATURE 3]', '[FEATURE 4]'],
    },
    {
      title: 'How It Works',
      body: ['[ARCHITECTURE / WORKFLOW PLACEHOLDER]'],
      image: {
        src: null,
        alt: '[ARCHITECTURE DIAGRAM ALT TEXT]',
        caption: '[ARCHITECTURE DIAGRAM PLACEHOLDER]',
      },
    },
    {
      title: 'Technical Challenges',
      body: ['[CHALLENGE PLACEHOLDER]', '[CHALLENGE PLACEHOLDER]'],
    },
    {
      title: 'Results',
      bullets: ['[RESULT / METRIC PLACEHOLDER]', '[RESULT / METRIC PLACEHOLDER]'],
    },
    {
      title: 'What I Learned',
      body: ['[LESSON PLACEHOLDER]'],
    },
  ]
}

export const projects: Project[] = [
  {
    slug: 'project-01',
    name: '[PROJECT NAME]',
    tagline: '[ONE-LINE DESCRIPTION]',
    summary: '[SHORT PROJECT DESCRIPTION]',
    role: '[ROLE]',
    timeframe: '[YEAR]',
    tech: ['[TECH]', '[TECH]', '[TECH]', '[TECH]'],
    image: {
      src: null,
      alt: '[PROJECT IMAGE ALT TEXT]',
    },
    links: {
      github: '[GITHUB URL]',
      demo: '[LIVE DEMO URL]',
      docs: '[DOCUMENTATION URL]',
    },
    featured: true,
    caseStudy: caseStudyTemplate(),
  },
  {
    slug: 'project-02',
    name: '[PROJECT NAME]',
    tagline: '[ONE-LINE DESCRIPTION]',
    summary: '[SHORT PROJECT DESCRIPTION]',
    role: '[ROLE]',
    timeframe: '[YEAR]',
    tech: ['[TECH]', '[TECH]', '[TECH]', '[TECH]'],
    image: {
      src: null,
      alt: '[PROJECT IMAGE ALT TEXT]',
    },
    links: {
      github: '[GITHUB URL]',
      demo: '[LIVE DEMO URL]',
    },
    featured: true,
    caseStudy: caseStudyTemplate(),
  },
  {
    slug: 'project-03',
    name: '[PROJECT NAME]',
    tagline: '[ONE-LINE DESCRIPTION]',
    summary: '[SHORT PROJECT DESCRIPTION]',
    role: '[ROLE]',
    timeframe: '[YEAR]',
    tech: ['[TECH]', '[TECH]', '[TECH]', '[TECH]'],
    image: {
      src: null,
      alt: '[PROJECT IMAGE ALT TEXT]',
    },
    links: {
      github: '[GITHUB URL]',
    },
    featured: true,
    caseStudy: caseStudyTemplate(),
  },
]

export const featuredProjects = projects.filter((project) => project.featured !== false)

export function getProjectBySlug(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/** Used by the case-study page for prev/next navigation. */
export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  }
}
