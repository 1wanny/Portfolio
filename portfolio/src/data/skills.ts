import type { SkillGroup } from './types'

/**
 * TECHNICAL SKILLS
 * ---------------------------------------------------------------------------
 * Grouped by domain — deliberately no ratings, bars or percentages.
 * Only list technologies you have actually used; the `note` is a good place to
 * say how you used them.
 *
 * Add, remove or rename groups freely — the grid adapts.
 */

export const skillGroups: SkillGroup[] = [
  {
    category: 'AI / Machine Learning',
    note: '[HOW YOU USE THESE]',
    items: ['Python', 'Scikit-learn', '[TECHNOLOGY]'],
  },
  {
    category: 'Data / Analytics',
    note: '[HOW YOU USE THESE]',
    items: ['Pandas', 'Numpy', 'SQL'],
  },
  {
    category: 'Frontend',
    note: '[HOW YOU USE THESE]',
    items: ['HTML/CSS', 'Javascript', 'Typescript', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    note: '[HOW YOU USE THESE]',
    items: ['Node.js', 'REST API', 'Flask', 'Jinja2'],
  },
  {
    category: 'Cloud / Infrastructure',
    note: '[HOW YOU USE THESE]',
    items: ['[TECHNOLOGY]', '[TECHNOLOGY]', '[TECHNOLOGY]'],
  },
  {
    category: 'Tools',
    note: '[HOW YOU USE THESE]',
    items: ['Power BI', 'Github', 'Figma', 'KNIME', 'SAS Viya'],
  },
]
