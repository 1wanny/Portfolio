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
    name: 'Finance Tracker',
    description: "I got tired of paid features in expense tracking apps, so I built my own full-featured finance web app for personal use.",
    status: 'IN PROGRESS',
    focus: ['Data analysis', 'Web development'],
    link: '',
  },
  {
    name: 'Self Made Spotify Wrapped',
    description: "I was curious about my Spotify Wrapped data, so I used their free API to build a tool that tracks my listening stats in real time.",
    status: 'PROTOTYPING',
    focus: ['Statistics/Data analysis', 'Web development', 'Dashboard'],
  },
  {
    name: 'Predictive Model for Football Matches',
    description: "I love watching football and playing Fantasy Premier League(FPL), where points are based on real-world player stats. I want to build a predictive model that forecasts player performances and picks high-scoring assets.(NEVER USE FOR ILLEGAL ACTIVITIES)",
    status: 'PLANNING',
    focus: ['Machine Learning', 'Web development'],
  },
]
