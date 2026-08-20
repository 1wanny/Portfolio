import type { CurrentProject } from './types'

/**
 * CURRENTLY BUILDING
 * ---------------------------------------------------------------------------
 * Work in flight. Keep this short and keep it current — an out-of-date
 * "currently" list is worse than none at all.
 *
 * `status` must be one of the BuildStatus values in types.ts.
 */

export const currentlyBuilding: CurrentProject[] = [
  {
    name: '[CURRENT PROJECT]',
    description: '[SHORT DESCRIPTION]',
    status: 'IN PROGRESS',
    focus: ['[TECHNOLOGY / CONCEPT]', '[TECHNOLOGY / CONCEPT]'],
    link: '[PROJECT URL]',
  },
  {
    name: '[CURRENT PROJECT]',
    description: '[SHORT DESCRIPTION]',
    status: 'PROTOTYPING',
    focus: ['[TECHNOLOGY / CONCEPT]', '[TECHNOLOGY / CONCEPT]'],
  },
  {
    name: '[CURRENT PROJECT]',
    description: '[SHORT DESCRIPTION]',
    status: 'PLANNING',
    focus: ['[TECHNOLOGY / CONCEPT]', '[TECHNOLOGY / CONCEPT]'],
  },
]
