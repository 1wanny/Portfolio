import type { Education } from './types'

/**
 * EDUCATION
 * ---------------------------------------------------------------------------
 * Most recent first. Leave `achievements` out (or empty) to hide that block.
 *
 * `coursework` is a list of labelled groups. The labels are free text, so you
 * can split by year, by semester, or use a single group to show a flat list.
 */

export const education: Education[] = [
  {
    institution: 'Nanyang Polytechnic',
    program: 'Applied AI & Analytics',
    start: '2025',
    end: '2028',
    // Full course structure from the NYP course page for the
    // Diploma in Applied AI & Analytics (C43).
    // (WIU) marks a Work Immersion Unit, as labelled by NYP.
    coursework: [
      {
        label: 'Year 1',
        modules: [
          'AI & Data Analytics',
          'Applied Mathematics in Computing',
          'Business Innovation & Enterprise',
          'Cybersecurity Technologies & Ethics',
          'Database Design & Administration',
          'Network Technologies',
          'Programming',
          'Statistical Research Methods',
          'UX Design in Web Development',
          'Web Development Project (WIU)',
        ],
      },
      {
        label: 'Year 2',
        modules: [
          'AI Innovation with Deep Learning Project (WIU)',
          'AI Innovation with MLOps Project (WIU)',
          'Applied Deep Learning',
          'Applied Machine Learning',
          'Data Processing on Big Data',
          'Data Structures & Algorithms',
          'Data Wrangling',
          'Full Stack Application Development',
          'Machine Learning Operations',
          'Predictive Analytics & Forecasting',
          'Responsible AI for Sustainability',
        ],
      },
      {
        label: 'Year 3',
        modules: ['Final Year Project (WIU)', 'Internship Programme (WIU)'],
      },
    ],
    achievements: ['WIU: Work-Integrated Unit, this can be an internship or project that simulates real-world work, where students can demonstrate their skills and competencies.'],
  },
]
