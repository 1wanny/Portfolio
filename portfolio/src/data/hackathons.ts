import type { Activity } from './types'

/**
 * HACKATHONS & ACTIVITIES
 * ---------------------------------------------------------------------------
 * Anything outside coursework: hackathons, competitions, workshops, clubs,
 * volunteering, self-directed courses.
 *
 * `outcome` is free text — "Participant", "Finalist", "Completed", "1st place"
 * are all equally valid and all render identically. Delete `links` entirely if
 * an entry has none.
 */

export const activities: Activity[] = [
  {
    name: '[EVENT / HACKATHON NAME]',
    date: '[DATE / YEAR]',
    kind: '[HACKATHON]',
    description: '[SHORT DESCRIPTION]',
    role: '[ROLE]',
    tech: ['[TECHNOLOGY]', '[TECHNOLOGY]', '[TECHNOLOGY]'],
    outcome: '[OUTCOME / ACHIEVEMENT]',
    links: [
      { label: 'Project', href: '[PROJECT URL]' },
      { label: 'Repository', href: '[REPOSITORY URL]' },
      { label: 'Demo', href: '[DEMO URL]' },
    ],
  },
  {
    name: '[EVENT / HACKATHON NAME]',
    date: '[DATE / YEAR]',
    kind: '[COMPETITION]',
    description: '[SHORT DESCRIPTION]',
    role: '[ROLE]',
    tech: ['[TECHNOLOGY]', '[TECHNOLOGY]'],
    outcome: '[OUTCOME / ACHIEVEMENT]',
    links: [{ label: 'Repository', href: '[REPOSITORY URL]' }],
  },
  {
    name: '[EVENT / WORKSHOP NAME]',
    date: '[DATE / YEAR]',
    kind: '[WORKSHOP]',
    description: '[SHORT DESCRIPTION]',
    role: '[ROLE]',
    tech: ['[TECHNOLOGY]', '[TECHNOLOGY]'],
    outcome: '[OUTCOME / ACHIEVEMENT]',
  },
  {
    name: '[ACTIVITY NAME]',
    date: '[DATE / YEAR]',
    kind: '[ACTIVITY]',
    description: '[SHORT DESCRIPTION]',
    role: '[ROLE]',
    tech: ['[TECHNOLOGY]'],
    outcome: '[OUTCOME / ACHIEVEMENT]',
  },
]
