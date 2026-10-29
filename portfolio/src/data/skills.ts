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
    note: 'Core AI and ML concepts, including the CRISP-DM methodology, the shift from symbolic AI rules to statistical machine learning, and the distinctions between supervised and unsupervised learning',
    items: ['Python', 'Scikit-learn', 'Pytorch'],
  },
  {
    category: 'Data / Analytics',
    note: 'Foundational Array Operations, Numerical Computation, Dataset Exploration & Inspection, Data Cleaning & Missing Value Handling, Data Filtering/Selection/Sorting, Feature Engineering and Derived Column Creation',
    items: ['Pandas', 'Numpy', 'SQL'],
  },
  {
    category: 'Frontend',
    note: 'Frontend and UX development using HTML, CSS, JavaScript, TypeScript, and React to build responsive, interactive user interfaces, with Tailwind CSS for styling and consistent UI design.',
    items: ['HTML/CSS', 'Javascript', 'Typescript', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    note: 'Backend development using Node.js and Express.js, including REST API development, database management with Sequelize ORM, CRUD operations, JWT-based authentication.',
    items: ['Node.js', 'REST API', 'Flask', 'Jinja2'],
  },
  {
    category: 'Cloud / Infrastructure',
    note: 'Database management using PostgreSQL and MySQL, with experience using Supabase for cloud-hosted database services and backend integration.',
    items: ['Supabase', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Tools',
    note: 'GitHub for version control and collaborative development, Figma for UI/UX design, Power BI for data visualization, KNIME for data wrangling and workflow automation, and SAS Viya for machine learning model development and evaluation.',
    items: ['Power BI', 'Github', 'Figma', 'KNIME', 'SAS Viya'],
  },
]
