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
    tech: ['Typescript', 'Node.JS', 'React.js', 'Express.js'],
    categories: ['Web Development'],
    image: {
      src: '/projects/Prophet/watchlist.png',
      alt: 'Watchlist',
    },
    featured: true,
    caseStudy: [
      {
        title: 'Overview',
        body: ['Prophet is a full-stack stock screening platform designed to help users evaluate investment opportunities using financial indicators such as revenue growth, profit growth, P/E ratio, and dividend yield. It helps users make more informed decisions when comparing stocks.'],
      },
      {
        title: 'The Problem',
        body: ['Investors may struggle to identify suitable stocks efficiently when faced with large amounts of financial data. Prophet aims to simplify stock discovery and monitoring by bringing relevant financial indicators and watchlist management into one platform.'],
      },
      {
        title: 'My Role',
        body: ['Developed the watchlist management feature, enabling users to organise and monitor stocks they are interested in through an interactive React interface and REST API integration.'],
      },
      {
        title: 'Key Features',
        bullets: ['Stock Search & Addition: Search for stocks and add them to a watchlist.', 'Watchlist Management: Rename watchlists, remove stocks and pin important stocks for easier access.', 'Undo Actions: Provide toast notifications that allow users to undo certain actions.', 'Backend API Integration: Built and integrated REST API endpoints using Node.js and Express.', 'Database Operations: Used PostgreSQL and Sequelize ORM to manage watchlist data.', 'Access Control: Implemented ownership checks to prevent users from accessing watchlists they do not own.'],
      },
      {
        title: 'How It Works',
        body: ['Frontend-to-backend watchlist workflow, connecting React interfaces to Express APIs and PostgreSQL while implementing stock-list management, data validation, and ownership checks.'],
        image: {
          src: '/projects/Prophet/Recommendation.mp4',
          alt: 'Watchlist',
          caption: "The video shows my watchlist the various stock markets, Top 5s of Gainers, Dividend and Low P/E ratio. The right side is where the user's watchlist is and below it is a suggested list of stocks in the general market. As shown, you can scroll down and come across a market summary of the specific market you're on. You're able to open a new tab to read the article or dive deeper with AI as it directs you to the recommendation page",
        },
      },
      {
        title: '',
        body: [''],
        image: {
          src: '/projects/Prophet/Watchlist.mp4',
          alt: 'Recommendations',
          caption: "This is the AI recommendation engine page where you're able to chat with an AI, where in this case we are using Openrouter's Deepseek model. As you can see, the chat will suggest questions if users are unsure of what to ask. This is based on the watchlist that the user currently has. Users are also able to refresh the page every second and also clear the chat history instantly. Below it are what the AI recommends based on the users watchlist. As you can see on the stock card, there's a low/medium/high with a percentage beside. That is the Expected Volatility + Confidence Score to help users assess potential investment opportunities.",
        },
      },
      {
        title: '',
        body: [''],
        image: {
          src: '/projects/Prophet/Historical timeline.mp4',
          alt: 'Historical Timeline',
          caption: "Lastly, there's the historical timeline page. When you come across this page, you're faced with the timeline of a selected stock where you're able to change the period at the top right. Just like any timelines, hovering over it shows the value, percentage gain/loss and date. Users are able to switch stocks by selecting the stocks on the user's watchlist located on the right. Below the timeline theres a AI timeline summary thats generated by the Deepseek model on the stock's timeline and events. Below it is the predictive outlook feature which visualises historical stock price movements alongside forecasted future trends, helping users understand past performance and assess potential price direction. As users scroll down, they will be able to view events and news of a stock which includes past AND upcoming ones as retrieved from a finance news API.",
        },
      },
      {
        title: 'Technical Challenges',
        body: ["We couldn't find a free live news market API but we managed to find an API that updates every 24 hours", 'Another challenge was actively trying to build what our client really wants. As this was our first time dealing with an actual client, we found it difficult trying to understand what they need.'],
      },
      {
        title: 'What I Learned',
        body: ["This project was heavily coded with Claude Code as instructed by lecturers, I learned to not actively depend on it to do the work entirely. I had to also ensure that what Claude Code was building would match what our ideas and intended outcome."],
      },
    ],
  },
  {
    slug: 'calories-burned-prediction',
    name: 'Calories Burned Prediction (Predictive Analytics Project)',
    tagline: 'Predicting calories burned during workouts using fitness and physiological data.',
    summary: 'Performed data preparation using KNIME, performed exploratory data analysis to identify key factors influencing calories burned, and compared machine learning models in SAS Viya.',
    role: 'Machine Learning Model Development and Evaluation',
    timeframe: '2026',
    tech: ['KNIME', 'SAS Viya'],
    categories: ['AI', 'Data Analysis'],
    image: {
      src: '/projects/Calories Burned/PAF.png',
      alt: '[PROJECT IMAGE ALT TEXT]',
    },
    links: {
      report: '/projects/Calories Burned/PAF report.pdf',
    },
    featured: true,
    caseStudy: [
      {
        title: 'Overview',
        body: ['Cleaned and analysed fitness data using KNIME, performed exploratory data analysis to identify key factors influencing calories burned, and compared Linear Regression, Decision Tree, and Gradient Boosting models in SAS Viya. Evaluated model performance and tuned decision tree hyperparameters to improve predictive results.'],
      },
      {
        title: 'The Problem',
        body: ['Estimating calories burned during workouts can be challenging because it depends on multiple fitness and physiological factors. This project explored how machine learning could use workout data to predict calorie expenditure and identify influential factors.'],
      },
      {
        title: 'My Role',
        body: ['Handled data cleaning, exploratory data analysis (EDA), feature analysis, model training, evaluation, and hyperparameter tuning using KNIME and SAS Viya.'],
      },
      {
        title: 'Key Features',
        bullets: ['Data Cleaning: Removed duplicate records to prevent redundant training data and potential data leakage.', 'Exploratory Data Analysis: Analysed correlations and visualised relationships between fitness variables and calories burned.', 'Machine Learning: Trained and compared Linear Regression, Decision Tree, and Gradient Boosting models.', 'Model Evaluation: Compared model performance using evaluation metrics to identify a suitable predictive model.'],
      },
      {
        title: 'How It Works',
        body: ['KNIME was used for data preparation and exploration, while SAS Viya was used to train, compare, and tune machine learning models to predict calories burned from fitness and physiological data.'],
        image: {
          src: '/projects/Calories Burned/Model.png',
          alt: 'Model Comparison',
          caption: 'This image shows the results of the model comparison node which shows that gradient boosting is the champion model of all models.',
        },
      },
      {
        title: 'Technical Challenges',
        body: ['I had trouble during the data preparation as I was unsure if certain steps in cleaning was needed. For example, I was unsure if keeping unique rows was needed as the gym dataset can have real human data where two people share the same height and weight.'],
      },
      {
        title: 'What I Learned',
        body: ['I learned to always double check my work and really think hard about certain variables when cleaning data. In the end, I decided to remove those duplicate rows as I found that the duplicate rows was duplicated 5 times across the dataset which seems intentional to distort the dataset.'],
      },
    ]
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
