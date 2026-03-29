export const personalInfo = {
  name: "Anastasios Krikonis",
  firstName: "Anastasios",
  lastName: "Krikonis",
  title: "Senior Software Engineer",
  subtitle:
    "Scalable Fintech & IoT Platforms | React, React Native, Node.js | Driving Revenue Growth through Technical Excellence",
  location: "Leiden, Netherlands",
  phone: "+31619591073",
  email: "tasos.krikonis@gmail.com",
  github: "https://github.com/taskrik",
  linkedin: "https://www.linkedin.com/in/tasoskrikonis/",
  medium: "https://medium.com/@tasos.krikonis",
  summary:
    "Senior Software Engineer with 7+ years of engineering experience and 13+ years in professional roles spanning tech and business operations. I build production-grade web and mobile applications that drive measurable business growth, specializing in the JavaScript and TypeScript ecosystems where reliability and scalability are non-negotiable.",
  extendedSummary:
    "What sets me apart is a rare combination: I've managed P&Ls, led teams, and optimized operations across multiple countries before writing my first line of production code. That business DNA means I don't just ship features — I understand unit economics, conversion funnels, and what makes a product succeed. I take full ownership from architecture to production, with automated CI/CD and end-to-end observability.",
  tagline: "Engineer with a business mind. Builder by nature.",
  coreImpact: [
    {
      label: "Fintech Excellence",
      text: "Owned Bitvavo's end-to-end onboarding journey, leading A/B experimentation that increased first-trade conversions by 4% — directly impacting revenue.",
    },
    {
      label: "Architectural Leadership",
      text: "Architected real-time communication layers at Gamgee and led development of IoT smart router control apps serving thousands of users.",
    },
    {
      label: "Full-Cycle Ownership",
      text: "From initial architecture to stable production — I bridge technical decisions with user needs, shipping systems backed by CI/CD and observability.",
    },
  ],
};

export const experience = [
  {
    role: "Lead Software Engineer",
    company: "The New Black",
    period: "05/2026 - Present",
    location: "Netherlands",
    type: "engineering" as const,
    bullets: [
      "Leading mobile development efforts, driving architecture decisions and team collaboration for a new product.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Bitvavo BV",
    period: "12/2024 - 05/2026",
    location: "Amsterdam, Netherlands",
    type: "engineering" as const,
    bullets: [
      "Owned the end-to-end onboarding journey (account creation \u2192 KYC \u2192 first trade) for a high-volume crypto exchange, balancing regulatory compliance with conversion-focused UX.",
      "Led A/B experimentation across onboarding flows, increasing first-trade conversion by 4% and driving measurable revenue uplift.",
      "Built onboarding observability dashboards and alerting systems, reducing incident response time and improving reliability.",
      "Partnered with compliance, product, and engineering to translate evolving regulatory requirements into scalable technical solutions without degrading UX.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Gamgee BV",
    period: "02/2019 - 12/2024",
    location: "Amsterdam",
    type: "engineering" as const,
    bullets: [
      "Led development of a React Native smart router control app, implementing scalable state management with Redux-Saga.",
      "Architected real-time communication layer using WebSockets and REST APIs, reducing device response latency and improving reliability of remote router management.",
      "Built internal Python services for router testing and automation, improving QA reliability and reducing manual testing overhead.",
      "Streamlined development process by implementing CI/CD pipelines using Jenkins.",
      "Developed and integrated a payment system for VPN and app subscriptions using Revenue Cat, facilitating seamless in-app purchases and subscription management.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Rebelslab BV",
    period: "09/2018 - 02/2019",
    location: "Leiden",
    type: "engineering" as const,
    bullets: [
      "Contributed to developing a MaaS (Mobility as a Service) solution app for a major public transportation company.",
      "Translated UX wireframes and mockups into interactive features using JavaScript and React Native, ensuring a superior user experience.",
      "Refactored and enhanced legacy React Native codebase, introducing Redux-based state management to improve scalability and maintainability.",
    ],
  },
  {
    role: "Operations & Store Manager",
    company: "Crepe Restaurants",
    period: "05/2013 - 01/2018",
    location: "Netherlands & Greece",
    type: "business" as const,
    bullets: [
      "Managed daily operations for multiple retail locations across Greece and the Netherlands, overseeing staff, inventory, suppliers, and financial performance.",
      "Developed strong skills in process optimization, team leadership, problem solving, and data-driven decision making — skills that later became the foundation of an engineering career.",
    ],
  },
];

export const education = [
  {
    title: "Linux Academy",
    institution: "Linux Academy",
    period: "01/2020",
    location: "Online",
    details: ["AWS Concepts (Jan 2020)", "Vagrant and VMs (Sep 2020)"],
  },
  {
    title: "Certificate for Full Stack Development",
    institution: "Cadaisseur Academy",
    period: "05/2018 - 08/2018",
    location: "Amsterdam",
    details: ["React, React Native, NodeJS, Redux"],
  },
  {
    title: "Civil Engineering",
    institution: "University of Patras",
    period: "10/2008 - 07/2012",
    location: "Greece",
    details: [],
  },
];

export const skills = {
  "Front-End": [
    "React",
    "React Native",
    "NextJS",
    "Tailwind CSS",
    "Typescript",
    "Redux",
    "Redux Sagas",
    "React Query",
  ],
  "Back-End & Testing": [
    "NodeJS",
    "Python",
    "Express",
    "Koa",
    "NestJS",
    "Bun",
    "Jest/Mocha",
    "PostgreSQL",
    "Firebase",
    "MongoDB",
    "Supabase",
  ],
  Infrastructure: ["AWS", "Docker", "Jenkins", "Git/GitHub", "Vagrant"],
};

export const languages = [
  { name: "Dutch", level: "Intermediate" },
  { name: "English", level: "Proficient" },
  { name: "Greek", level: "Native" },
];

export const projects = [
  {
    name: "CountryQuest",
    url: "https://www.countryquest.app/",
    description:
      "An interactive geography quiz app that challenges users to explore and learn about countries around the world.",
  },
  {
    name: "Voltchek",
    url: "https://www.voltchek.app/",
    description:
      "A utility app for monitoring and checking electrical voltage and power consumption metrics.",
  },
  {
    name: "TireSpy",
    url: "https://tirespy.app",
    description:
      "A smart tire monitoring application for tracking tire health, wear patterns, and maintenance schedules.",
  },
  {
    name: "Oros Ensemble",
    url: "https://orosensemble.com/",
    description:
      "A website for Oros Ensemble, a musical group showcasing their performances and events.",
  },
  {
    name: "Vaso's Kitchen",
    url: "https://www.vasoskitchen.com/",
    description:
      "A recipe blog featuring curated home-cooked dishes with step-by-step cooking instructions.",
  },
];
