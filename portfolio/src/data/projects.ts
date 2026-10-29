import { PROJECT_CATEGORIES } from './types'
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
    slug: 'prophet',
    name: 'Prophet (Full Stack Application Project)',
    tagline: 'A full-stack stock screening platform that helps users evaluate stocks and manage investment watchlists.',
    summary: 'Developed a full-stack stock screening platform that enables users to explore stocks, evaluate financial indicators, and manage watchlists.',
    role: 'Developed a Watchlist Management Platform with AI recommendation and Historical Timeline',
    timeframe: '2026',
    tech: ['Typescript', '[TECH]', '[TECH]', '[TECH]'],
    categories: ['Web Development'],
    image: {
      src: '/projects/Prophet/watchlist.png',
      alt: 'Watchlist',
    },
    featured: true,
    caseStudy: caseStudyTemplate(),
  },
  {
    slug: 'calories-burned-prediction',
    name: 'Calories Burned Prediction (Predictive Analytics Project)',
    tagline: '[ONE-LINE DESCRIPTION]',
    summary: '[SHORT PROJECT DESCRIPTION]',
    role: '[ROLE]',
    timeframe: '[YEAR]',
    tech: ['[TECH]', '[TECH]', '[TECH]', '[TECH]'],
    categories: ['AI', 'Data Analysis'],
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
    slug: 'hospital-er-analysis',
    name: 'Hospital ER Analysis',
    tagline: 'An interactive Power BI dashboard for hospital emergency-room operations.',
    summary:
      'A six-page Power BI report covering emergency-room operations end to end: patient ' +
      'admission flow, staff scheduling and workload, equipment usage, wait-time bottlenecks, ' +
      'and a predictive view that forecasts arrivals and recommends staffing.',
    role: 'Patient Flow & Healthcare Data Analyst',
    timeframe: 'AY2025/26',
    tech: ['Power BI'],
    image: {
      src: '/projects/hospital-er/patient-flow.png',
      alt: 'Power BI page showing total, daily average and peak patient counts as KPI cards, a day-of-week by hour matrix heatmap, a donut chart of patients by age group, and bar and line charts of patients by month and year.',
    },
    categories: ['Data Analysis'],
    featured: false,
    caseStudy: [
      {
        title: 'Overview',
        body: [
          'An interactive Power BI dashboard built to analyse hospital emergency-room data. ' +
            'The report spans descriptive analysis of patient admissions, resource utilisation ' +
            'across staff and equipment, identification of wait-time bottlenecks, and a ' +
            'predictive page combining all three datasets.',
          'It draws on four datasets: hospital ER records, staff scheduling, equipment usage ' +
            'and ER wait times.',
        ],
      },
      {
        title: 'The Problem',
        body: ['Leverage data analysis and visualization to identify bottlenecks in hospital operations, optimize resource allocation, and improve patient throughput and satisfaction.'],
      },
      {
        title: 'My Role',
        body: ['It was a group project and I contributed by working on the focus area of Descriptive Analytics such as analyzing patient flow from arrival to discharge, calculating average wait times, treatment times and length of stay. Lastly, visualize hourly and daily patient arrivals using line and heatmap charts'],
      },
      {
        title: 'Key Features',
        bullets: [
          'Descriptive analysis of patient admission flow by year, month, day and age group',
          'Resource utilisation views for staff scheduling, staff workload and equipment downtime',
          'Bottleneck analysis of ER wait times and time spent in the ER',
          'Predictive page with arrival forecasting, staffing recommendations and a wait-time heatmap',
          'Slicers synced across visuals so every page can be filtered together',
        ],
      },
      {
        title: 'Patient Admission Flow',
        body: [
          'The descriptive analysis of the Hospital ER dataset, showing patient admission flow ' +
            'each year. It uses KPI cards, area charts, slicers, a donut chart, a matrix heatmap, ' +
            'a clustered bar chart and a line chart.',
        ],
        image: {
          src: '/projects/hospital-er/patient-flow.png',
          alt: 'KPI cards for total, daily average and peak patients, a day-of-week by hour matrix heatmap, a donut chart of patients by age group, and bar and line charts by month and year.',
          caption: 'Descriptive analysis — patient admission flow.',
        },
      },
      {
        title: 'Staff Scheduling',
        body: [
          'Part of the resource-utilisation analysis of the staff scheduling dataset, showing how ' +
            'staff are scheduled and how they could be better managed to reduce workload and cost. ' +
            'It uses KPI cards, a clustered bar chart, a gauge, a matrix and a scatter chart.',
        ],
        image: {
          src: '/projects/hospital-er/staff-scheduling.png',
          alt: 'Power BI page with KPI cards, a clustered bar chart, a gauge, a matrix and a scatter chart covering staff scheduling.',
          caption: 'Resource utilisation — staff scheduling.',
        },
      },
      {
        title: 'Staff Workload',
        body: [
          'Also part of the staff scheduling dataset, this page shows staff workload and how many ' +
            'hours each person is scheduled to work. It uses clustered bar charts and a donut chart.',
        ],
        image: {
          src: '/projects/hospital-er/staff-workload.png',
          alt: 'Power BI page with clustered bar charts and a donut chart showing scheduled hours and workload per staff member.',
          caption: 'Resource utilisation — staff workload.',
        },
      },
      {
        title: 'Equipment Usage',
        body: [
          'The equipment usage dataset, showing how equipment is used and the downtime of each ' +
            'item. It uses a gauge, a matrix, a line chart, a clustered column chart and a donut chart.',
        ],
        image: {
          src: '/projects/hospital-er/equipment-usage.png',
          alt: 'Power BI page with a gauge, a matrix, a line chart, a clustered column chart and a donut chart showing equipment usage and downtime.',
          caption: 'Resource utilisation — equipment usage and downtime.',
        },
      },
      {
        title: 'Wait-Time Bottlenecks',
        body: [
          'Bottleneck identification on the ER wait-time dataset, covering overall wait-time ' +
            'detail such as average wait time and average time spent in the ER. It uses a matrix ' +
            'heatmap, a scatter chart, a key influencers visual, a waterfall chart and a clustered ' +
            'bar chart.',
        ],
        image: {
          src: '/projects/hospital-er/wait-times.png',
          alt: 'Power BI page with a matrix heatmap, scatter chart, key influencers visual, waterfall chart and clustered bar chart analysing ER wait times.',
          caption: 'Identifying bottlenecks — ER wait times.',
        },
      },
      {
        title: 'Predictive Analysis',
        body: [
          'The predictive page, combining the hospital ER, staff scheduling and wait-time datasets. ' +
            'It covers predicted ER wait times, staff scheduling and patient admission flow, with an ' +
            'interactive slicer that syncs with the visuals on the page, staffing recommendations, ' +
            'arrival forecasting and a wait-time heatmap. It uses slicers, matrices and a line chart.',
        ],
        image: {
          src: '/projects/hospital-er/predictive.png',
          alt: 'Power BI page with synced slicers, matrices and a line chart showing arrival forecasting, staffing recommendations and a wait-time heatmap.',
          caption: 'Predictive analysis across all three datasets.',
        },
      },
      {
        title: 'How It Works',
        body: [
          'The dataset was cleaned and transformed inside PowerBI itself as they have their own feature in transforming data. The forecasting was also done in Power BI with a built in feature which allows us to select and create a forecasting analysis based on the historical data.' +
            '',
        ],
      },
      {
        title: 'Technical Challenges',
        body: ['For the datasets, we had to do our own research in finding relevant hospital datasets to use in this assignment. That was the most challenging part because we had to really ensure that the datasets would cover everything we need for this assignment.'],
      },
      {
        title: 'What I Learned',
        body: ['I learnt how to clean and transform data for the first time using Power BI through this project and how to find our own datasets online with kaggle or data.gov.sg. This was our first data analysis project and where I realized I liked doing data analysis'],
      },
    ],
  },
  {
    slug: 'genlink',
    name: 'GenLink',
    tagline: 'A web application connecting the elderly and the youth.',
    summary:
      'A web application designed to connect the elderly and the youth to improve ' +
      'intergenerational interactions. ',
    role: 'Building a Real-Time Messaging platform',
    timeframe: 'AY2025/26',
    tech: ['HTML', 'CSS', 'Python', 'Javascript'],
    image: {
      src: '/projects/GenLink/Contacts page.jpg',
      alt: '[GENLINK SCREENSHOT ALT TEXT]',
    },
    links: {
      github: 'https://github.com/PhilenaWu/WDP_PROJECT_FINAL',
    },
    categories: ['Web Development'],
    featured: true,
    caseStudy: [
      {
        title: 'Overview',
        body: [
          'GenLink — Intergenerational Community Platform. Developed a web-based platform that connects youths, adults, and seniors in Singapore to foster sustained intergenerational engagement and reduce social isolation.'
        ],
      },
      {
        title: 'The Problem',
        body: ['Nowadays as technology advances and improves, seniors find it hard to use and navigate around devices especially when everything is digital such as community events or community club meetups. Hence, we created a website to help assist the youth and adults who are more tech savvy to help with seniors through active block meetups or communication such as chat groups or individual chats.'],
      },
      {
        title: 'My Role',
        body: ['Designed and implemented the real-time messaging module to enable continuous, private communication.'],
        image: {
            src: '/projects/GenLink/Chat message.jpg',
        alt: 'GenLink chat screen showing a contact list, messages and the message composer.',
        fit: 'contain',
    }
      },
      {
        title: 'Key Features',
        bullets: ['Built video bubble messaging and instant audio recording features', 'Implemented media sharing (images & videos) for richer interaction', 'Developed online/offline presence indicators', 'Integrated swearword filtering to ensure safe conversations', 'Added favourite contacts for quick access'],
      },
      {
        title: 'Technical Challenge',
        body: ['The challenging mistake we faced was not standardizing everything first before working on our parts. This led to all of us having different databases, different base htmls and different UI'],
      },
      {
        title: 'Results',
        bullets: ['Enables ongoing communication beyond scheduled activities', 'Encourages meaningful, sustained intergenerational relationships', 'Supports inclusive digital interaction across age groups'],
      },
      {
        title: 'What I Learned',
        body: ['To always discuss the tech stack we are using before coding and standardizing everything so that we will never face any integration issues in future.'],
      },
    ],
  },
  {
    slug: 'nyp-volleyball-website',
    name: 'NYP Volleyball CCA Website',
    tagline: "A website for the school's volleyball club, built for a UI/UX module.",
    summary:
      "A website created for our school's volleyball club as part of a UI/UX module. It covers " +
      'the club itself, tryouts, how to play — rules and fundamental techniques — and contact ' +
      'details, with a sign-up call to action on the landing page.',
    role: '',
    timeframe: '2025',
    tech: ['HTML', 'CSS', 'Javascript'],
    image: {
      src: '/projects/volleyball/home.png',
      alt: 'The NYP Volleyball homepage: a full-width photo of the team in Nanyang Polytechnic kit, with the site title and a "Want to try something new? Sign up now!" call to action.',
    },
    categories: ['Web Development'],
    featured: false,
    caseStudy: [
      {
        title: 'Overview',
        body: [
          "A website created for our school's volleyball club as part of a UI/UX module.",
          'The site is organised around four areas — About Us, Tryouts, How to Play (with Rules ' +
            'and Fundamental Techniques under it) and Contact — with the landing page pushing ' +
            'visitors towards signing up for tryouts.',
        ],
      },
      {
        title: 'The Problem',
        body: ['This project challenged us to design a clean, accessible experience for student users while navigating our first real team coding project and collaborative development setup.'],
      },
      {
        title: 'My Role',
        body: ['I worked on making the About Us, How To Play and Tryouts pages which included a form that allows users to apply for the tryouts if they are interested.'],
      },
      {
        title: 'Key Features',
        bullets: [
          'Landing page with a full-bleed team photo and a sign-up call to action',
          'Dropdown navigation grouping Rules and Fundamental Techniques under "How to Play"',
          'Reference pages covering volleyball rules and rule violations',
          '[FEATURE — e.g. the tryouts or contact flow]',
        ],
      },
      {
        title: 'Landing Page',
        body: [
          'The homepage leads with a full-width photo of the team and a direct call to action ' +
            'for new members.',
        ],
        image: {
          src: '/projects/volleyball/home.png',
          alt: 'NYP Volleyball homepage with the navigation bar, a full-width team photo and the "Want to try something new? Sign up now!" call to action.',
          caption: 'Landing page.',
        },
      },
      {
        title: 'Rules Reference',
        body: [
          'The How to Play section holds reference content for newcomers — the fundamental rules ' +
            'of a game and the violations that concede a point — reached through a dropdown in the ' +
            'main navigation.',
        ],
        image: {
          src: '/projects/volleyball/rules.png',
          alt: 'The Volleyball Rules page listing fundamental rules and rule violations, with the "How to Play" dropdown open showing Rules and Fundamental Techniques.',
          caption: 'How to Play — rules and rule violations.',
        },
      },
      {
        // A `.mp4`, `.webm` or `.mov` src renders as a video player instead of
        // an image. Optionally add `poster: '/path/to/still.png'`.
        title: 'About Us page',
        body: ['This About Us page is quite special to me as I wanted to work on something unique so I added a title scrolling feature.'],
        image: {
          src: '/projects/volleyball/ScreenRecording1.mp4',
          alt: '[DESCRIBE WHAT IS SHOWN IN THIS RECORDING]',
          caption: 'It starts with an NYP Volleyball title scrolling feature, as users scroll down it slides to the side and out of the frame then the page will scroll down once the title is fully out of the screen. Below it shows the main About Us and the Excos of the CCA',
        },
      },
      {
        title: 'How To Play page',
        body: ['Shows the fundamental foundations of the sport with examples shown.'],
        image: {
          src: '/projects/volleyball/ScreenRecording2.mp4',
          alt: '[DESCRIBE WHAT IS SHOWN IN THIS RECORDING]',
          caption: 'Shows the fundamental foundations of the sport with examples shown and also informing users common errors when executing the move',
        },
      },
      {
        title: 'What I Learned',
        body: ["This was my first coding project working with a partner and it went well as bpth my partner and I managed to collaborate together easily."],
      },
    ],
  },
]

export const featuredProjects = projects.filter((project) => project.featured !== false)

/**
 * Categories that at least one project actually uses, in PROJECT_CATEGORIES
 * order. The filter controls on /projects are built from this, so an unused
 * category never shows up as a dead filter.
 */
export const usedCategories = PROJECT_CATEGORIES.filter((category) =>
  projects.some((project) => project.categories.includes(category)),
)

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
