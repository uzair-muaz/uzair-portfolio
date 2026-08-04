export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  metrics: string[];
  description: string;
  highlights: string[];
  techStack: string[];
  role: string;
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  imageUrl?: string;
  domain: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Lead';
  achievements: string[];
  technologies: string[];
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export const UZAIR_INFO = {
  name: "Uzair Muaz",
  title: "Sr. Software Engineer | System Architect",
  stackFocus: "Full Stack · Next.js & Nest.js",
  experienceYears: "4+",
  teamSize: 5,
  location: "Islamabad, Pakistan",
  email: "uzair.muaz3k@gmail.com",
  phone: "+92 310 2222330",
  whatsappUrl: "https://wa.me/923102222330",
  linkedin: "https://linkedin.com/in/uzairmuaz",
  github: "https://github.com/uzairmuaz",
  cvUrl: "/cv.pdf",
  availability: "Open for Next.js / Nest.js Roles",
  summary:
    "Senior Full Stack Software Engineer focused on building modern web applications, scalable backend services, and production systems that perform under real-world usage. Comfortable owning features end-to-end and delivering software that is reliable, maintainable, and user-focused.",
  education: {
    degree: "Bachelor of Science in Software Engineering",
    institution: "COMSATS Institute of Information Technology, Islamabad",
    graduated: "2022"
  }
};

/** All shipped projects — featured flag marks primary case studies. */
export const PROJECTS: Project[] = [
  {
    id: "travel-best-bets",
    title: "Travel Best Bets",
    subtitle: "Canadian travel agency — packages, cruises & air",
    category: "Travel",
    metrics: ["Packages · Cruises · Air+Hotel", "Multi-city departures", "Deal CMS"],
    description:
      "High-traffic Canadian travel agency where travelers shop packaged vacations, cruises, and air+hotel by departure city. Rebuilt the public site and booking journeys off legacy WordPress so specialists can publish deals without engineering, and holiday peaks stay fast.",
    highlights: [
      "Migrated the consumer site off WordPress onto a modern Next.js stack with zero downtime.",
      "Connected package, cruise, and air+hotel search to the agency's booking partners.",
      "Built CMS workflows so travel specialists publish destinations and deals independently.",
      "Added Redis caching and SSR tuning for seasonal traffic spikes."
    ],
    techStack: ["Next.js", "Nest.js", "React", "Redis", "Tailwind CSS", "REST API"],
    role: "Next.js Engineer",
    liveUrl: "https://travelbestbets.com/",
    domain: "travelbestbets.com",
    featured: true,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftravelbestbets.com?w=800&h=500"
  },
  {
    id: "kaampar",
    title: "KaamPar",
    subtitle: "Pakistan → global freelance network (pre-launch)",
    category: "Marketplace",
    metrics: ["Elevate 2026", "Verified freelancers", "Waitlist live"],
    description:
      "KaamPar connects Pakistani engineers, designers, and digital talent with international freelance work — verified profiles, secure payouts, and low platform fees. Shipped the Next.js waitlist/launch site and Nest.js marketplace services ahead of the Elevate 2026 public launch.",
    highlights: [
      "Built the public waitlist, countdown, and early-access registration funnel.",
      "Architected Nest.js microservices for auth, RBAC, messaging, and payments.",
      "Designed skill-verification and trusted-profile flows for freelancer onboarding."
    ],
    techStack: ["Next.js", "Nest.js", "PostgreSQL", "Tailwind CSS"],
    role: "Next.js / Nest.js Engineer",
    liveUrl: "https://www.kaampar.com/",
    domain: "kaampar.com",
    featured: true,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.kaampar.com?w=800&h=500"
  },
  {
    id: "cync-global",
    title: "Cync Global",
    subtitle: "Asset-based lending & risk analytics UI",
    category: "FinTech",
    metrics: ["Borrowing base", "Risk dashboards", "RBAC"],
    description:
      "Analyst-facing frontend for Cync's asset-based lending platform used by banks and credit unions. Delivers dense collateral tables, borrowing-base workflows, and portfolio risk charts so lending teams can move faster without losing auditability.",
    highlights: [
      "Built high-density financial tables and interactive risk/portfolio charts.",
      "Implemented role-based access patterns suited to regulated lending teams.",
      "Optimized complex multi-step lending screens for everyday analyst speed."
    ],
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "Recharts", "Tailwind CSS"],
    role: "Frontend Engineer",
    liveUrl: "https://cync-global-frontend.vercel.app/",
    domain: "cync-global-frontend.vercel.app",
    featured: true,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcync-global-frontend.vercel.app?w=800&h=500"
  },
  {
    id: "hotel-sol",
    title: "Hotel Sol",
    subtitle: "Boutique hotel booking — Haifa, German Colony",
    category: "Hospitality",
    metrics: ["17 rooms", "EN / HE", "Direct booking"],
    description:
      "Direct booking experience for Hotel Sol (Sol Stay & More) in Haifa's German Colony — a restored Templar building with 17 rooms. Guests pick dates and occupancy, apply coupons, browse Classic/Superior/Vibe rooms, and manage or cancel reservations in English or Hebrew.",
    highlights: [
      "Shipped date/guest booking UI with coupons and reservation change/cancel.",
      "Localized the full guest journey for English and Hebrew.",
      "Presented room types, gallery, neighborhood context, and inquiry forms."
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    role: "Next.js Developer",
    liveUrl: "https://www.solstay.co.il/en",
    domain: "solstay.co.il",
    featured: true,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.solstay.co.il%2Fen?w=800&h=500"
  },
  {
    id: "ibex-sports-complex",
    title: "Ibex Sports Complex",
    subtitle: "Paddle, pickleball & futsal booking — Islamabad",
    category: "Sports",
    metrics: ["3 court sports", "Hourly + memberships", "12PM–4AM"],
    description:
      "Booking and marketing site for Ibex Sports Complex in Islamabad — paddle tennis, pickleball, and futsal. Players browse facilities, book hourly slots or monthly memberships, and get clear hours, location, and advance-booking rules for weekday vs weekend play.",
    highlights: [
      "Built facility pages and booking CTAs for paddle, pickleball, and futsal.",
      "Supported hourly rentals and membership packages with lead-time rules.",
      "Wired maps, contact, and late-night operating hours into the conversion path."
    ],
    techStack: ["Next.js", "TypeScript", "Nest.js", "PostgreSQL", "Stripe API", "Tailwind CSS"],
    role: "Next.js Engineer",
    liveUrl: "https://www.ibexsportscomplex.com/",
    domain: "ibexsportscomplex.com",
    featured: true,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.ibexsportscomplex.com?w=800&h=500"
  },
  {
    id: "indus-consulting",
    title: "Indus Consulting",
    subtitle: "CPA practice site — Langley & Surrey, BC",
    category: "Accounting",
    metrics: ["Accounting · Tax · Advisory", "Client testimonials", "Meeting booking"],
    description:
      "Marketing site for Indus Consulting Ltd, a Chartered Professional Accountant practice in British Columbia. Presents corporate and personal accounting, taxation, bookkeeping, and advisory services with clear CTAs to message the firm or schedule a meeting.",
    highlights: [
      "Structured service pages for accounting, tax, advisory, and systems work.",
      "Surfaced social proof with client testimonials and founder story.",
      "Built contact and meeting-request flows for local Lower Mainland clients."
    ],
    techStack: ["Next.js", "React.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    role: "Next.js Engineer",
    liveUrl: "https://www.indusconsulting.ca/",
    domain: "indusconsulting.ca",
    featured: false,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.indusconsulting.ca?w=800&h=500"
  },
  {
    id: "code-world-east",
    title: "Code World East",
    subtitle: "Saudi IT consultancy & digital product studio",
    category: "IT Services",
    metrics: ["Consultancy", "Product development", "Staff augmentation"],
    description:
      "Corporate site for Code World East, a Riyadh-based technology company offering digital consultancy, end-to-end product design/development, staff augmentation, and AI/ML solutions for businesses across the Kingdom.",
    highlights: [
      "Built a marketing shell for services and company story.",
      "Organized consultancy, development, and staff-aug offerings into clear funnels.",
      "Shipped portfolio and contact paths aimed at KSA enterprise buyers."
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Next.js Engineer",
    liveUrl: "https://code-world-east.vercel.app/",
    domain: "code-world-east.vercel.app",
    featured: false,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcode-world-east.vercel.app?w=800&h=500"
  },
  {
    id: "swift-suite",
    title: "Swift Suite",
    subtitle: "Ops SaaS — invoices, inventory & dashboards",
    category: "SaaS",
    metrics: ["Invoicing", "Inventory", "Role dashboards"],
    description:
      "Next.js business-operations suite that consolidates invoicing, inventory tracking, and role-based dashboards so small teams can run billing and stock from one place instead of scattered spreadsheets.",
    highlights: [
      "Invoice creation with PDF export and payment-link hooks.",
      "Inventory views with stock alerts and order tracking.",
      "Role-aware dashboard widgets for operators vs owners."
    ],
    techStack: ["Next.js", "React", "Nest.js", "Tailwind CSS", "Chart.js"],
    role: "Next.js / Nest.js Engineer",
    liveUrl: "https://swift-suite.vercel.app/",
    domain: "swift-suite.vercel.app",
    featured: false,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fswift-suite.vercel.app?w=800&h=500"
  },
  {
    id: "shining-tours",
    title: "Shining Tours",
    subtitle: "Holiday packages & guided excursion portal",
    category: "Tourism",
    metrics: ["Package filters", "Itineraries", "Lead capture"],
    description:
      "Tour-operator marketing site for curated holiday packages and guided trips. Travelers filter by destination, duration, and budget, review day-by-day itineraries, and submit booking consultations that route to agents.",
    highlights: [
      "Destination/duration/budget filters for package discovery.",
      "Itinerary layouts with schedule and map-friendly structure.",
      "Lead forms that hand off inquiries to travel agents."
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    role: "Next.js Developer",
    liveUrl: "https://shinning-tours.vercel.app/",
    domain: "shinning-tours.vercel.app",
    featured: false,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fshinning-tours.vercel.app?w=800&h=500"
  },
  {
    id: "absco",
    title: "ABSCO",
    subtitle: "Saudi company formation & licensing (Vision 2030)",
    category: "Business Services",
    metrics: ["650+ companies", "MISA / CR licensing", "Riyadh-based"],
    description:
      "ABSCO helps foreign and local founders expand into Saudi Arabia — company formation, MISA licensing, commercial registration, visas, and post-setup incorporation. Built the Next.js marketing and service site for a Riyadh consulting practice.",
    highlights: [
      "Mapped pre-licensing, formation, and post-setup service journeys.",
      "Structured license types and FAQ content for Vision 2030 expansion buyers.",
      "Shipped appointment and contact funnels for KSA market entry clients."
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    role: "Next.js Engineer",
    liveUrl: "https://absco.vercel.app/",
    domain: "absco.vercel.app",
    featured: false,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fabsco.vercel.app?w=800&h=500"
  },
  {
    id: "ema-accounting",
    title: "EMA Accounting",
    subtitle: "Tax, bookkeeping & payroll firm site",
    category: "Accounting",
    metrics: ["Tax · Accounting · Payroll", "Appointment booking", "Client reviews"],
    description:
      "Client-facing site for EMA Accounting — tax preparation, bookkeeping, payroll, and advisory for small businesses. Emphasizes trust with testimonials and makes it easy to book an appointment or call for a short consultation.",
    highlights: [
      "Clear service blocks for tax, accounting, and payroll.",
      "Appointment and contact forms for consultation intake.",
      "Testimonial layout aimed at small-business owners."
    ],
    techStack: ["Next.js", "React", "Nest.js", "Tailwind CSS"],
    role: "Next.js Developer",
    liveUrl: "https://www.emaacct.com/",
    domain: "emaacct.com",
    featured: false,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.emaacct.com?w=800&h=500"
  },
  {
    id: "sirat-e-mustaqeem",
    title: "Sirat-e-Mustaqeem Community",
    subtitle: "Community foundation — events, programs & giving",
    category: "Community",
    metrics: ["Events", "Donations", "Programs"],
    description:
      "Non-profit community platform for Sirat-e-Mustaqeem — event registration, educational program enrollment, and donor support so organizers can run outreach without spreadsheet chaos.",
    highlights: [
      "Event registration with attendance-friendly workflows.",
      "Donation path with receipt-ready structure.",
      "Content layout suited for bilingual community managers."
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Nest.js"],
    role: "Next.js Engineer",
    liveUrl: "https://sirat-al-mustaqeem-website-v2.vercel.app/",
    domain: "sirat-al-mustaqeem-website-v2.vercel.app",
    featured: false,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsirat-al-mustaqeem-website-v2.vercel.app?w=800&h=500"
  },
  {
    id: "zk-crypt-ai-portal",
    title: "ZKCryptAI",
    subtitle: "Privacy firewall for AI agents & LLMs",
    category: "Web3 / AI",
    metrics: ["AI Firewall", "SecureGPT", "ZK proofs"],
    description:
      "Product marketing site for ZKCryptAI — an AI firewall that uses zero-knowledge protocols and decentralized ML ideas to reduce data exposure when people use autonomous agents and general-purpose AI. Covers SecureGPT, EdgeAI, agentic utilities, and roadmap storytelling.",
    highlights: [
      "Communicated problem to feature narrative for AI privacy risks.",
      "Built sections for SecureGPT, EdgeAI, and agent utilities.",
      "Shipped roadmap, team, and whitepaper-oriented content structure."
    ],
    techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    role: "Next.js Engineer",
    liveUrl: "https://zkcryptai.com/",
    domain: "zkcryptai.com",
    featured: false,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fzkcryptai.com?w=800&h=500"
  },
  {
    id: "metaverse-madness",
    title: "Metaversus",
    subtitle: "Immersive metaverse marketing experience",
    category: "Web3",
    metrics: ["Motion-led UX", "World gallery", "Scroll storytelling"],
    description:
      "Motion-heavy Next.js landing that sells the idea of exploring virtual worlds — cinematic scroll, world cards, and futuristic UI patterns built as a polished Web3/metaverse marketing demo.",
    highlights: [
      "Framer Motion scroll sequences tuned for smooth desktop playback.",
      "Card gallery presenting virtual-world concepts.",
      "Responsive layout and asset loading for a demo-grade first impression."
    ],
    techStack: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "Vercel"],
    role: "Next.js Developer",
    liveUrl: "https://metaverse-madness-steel.vercel.app/",
    domain: "metaverse-madness-steel.vercel.app",
    featured: false,
    imageUrl: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmetaverse-madness-steel.vercel.app?w=800&h=500"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "arcana-info",
    company: "Arcana Info",
    role: "Senior Engineer · Next.js / Nest.js Lead",
    location: "Islamabad, Pakistan",
    period: "Dec 2024 – Present",
    type: "Lead",
    achievements: [
      "Lead a team of 5 across sprint planning, interviews, estimation, and delivery.",
      "Migrated Travel Best Bets off legacy WordPress to a modern stack serving 100K+ daily users (peaks 300K+) with zero downtime over ~4 months.",
      "Cut premium booking from 3 steps to 1; specialists can publish packages without engineering.",
      "Shipped KaamPar’s marketplace services (gateway, auth, RBAC, messaging, payments) for Pakistani freelancers going global.",
      "Launched an AWS AI support assistant that deflects ~40% of repetitive inquiries."
    ],
    technologies: ["Next.js", "Nest.js", "React.js", "Node.js", "Microservices", "AWS", "RAG/LLMs", "PostgreSQL", "Redis", "Docker"]
  },
  {
    id: "freelance-international",
    company: "Freelance — International Clients",
    role: "Senior Frontend Engineer",
    location: "Remote",
    period: "Jul 2024 – Dec 2025 · Part-time",
    type: "Contract",
    achievements: [
      "Frontend for a privacy-focused Web3 AI portal (wallet auth, token-gated access).",
      "Robotics simulation UI for running and validating robot code in virtual and live environments."
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Web3 Auth", "Solana / EVM", "WebGL", "Framer Motion", "Tailwind CSS"]
  },
  {
    id: "jmm-tech",
    company: "JMM Technologies",
    role: "Frontend Engineer",
    location: "Saudi Arabia (Remote)",
    period: "Jan 2023 – Dec 2024",
    type: "Full-time",
    achievements: [
      "Multi-tenant HRMS with GraphQL, per-org subdomains, and branding — 3 enterprise clients at launch.",
      "LLM document proofreading tool with inline suggestions and collaborative editing."
    ],
    technologies: ["React.js", "GraphQL", "LLM Integrations", "TypeScript", "Material UI", "Ant Design", "Tailwind CSS"]
  },
  {
    id: "devgate",
    company: "Devgate Consultancy",
    role: "Software Engineer",
    location: "Islamabad, Pakistan",
    period: "Jan 2022 – Dec 2022",
    type: "Full-time",
    achievements: [
      "Co-working SaaS from scratch: scheduling, booking, and RBAC.",
      "Shopify-connected dispatch platform automating fulfillment for 5,000+ monthly orders.",
      "Mentored 3 interns over 12 weeks — 2 received full-time offers."
    ],
    technologies: ["React.js", "Node.js", "Shopify API", "Redux", "PostgreSQL", "REST APIs", "Tailwind CSS"]
  }
];

export const AWARDS: Award[] = [
  {
    title: "Employee of the Month",
    organization: "JMM Technologies",
    year: "2024",
    description: "Enterprise delivery recognition."
  },
  {
    title: "Star Performer of the Year",
    organization: "Devgate Consultancy",
    year: "2023",
    description: "Awarded in 2023 for 2022 platform delivery and mentorship."
  },
  {
    title: "Saudi Incubation Center Recognition",
    organization: "Saudi Incubation Program",
    year: "2023",
    description: "SaaS product selected for the Saudi Incubation Center."
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Languages",
    icon: "IconCode",
    color: "#00E699",
    skills: ["JavaScript", "TypeScript"]
  },
  {
    name: "Frontend",
    icon: "IconStack2",
    color: "#00E699",
    skills: ["React.js", "Next.js", "Material UI", "Ant Design", "Shadcn", "Tailwind CSS", "Framer Motion"]
  },
  {
    name: "Backend",
    icon: "IconServer",
    color: "#3B82F6",
    skills: ["Node.js", "Nest.js", "Microservices", "REST APIs", "WebSockets", "Event-Driven Architecture"]
  },
  {
    name: "Databases",
    icon: "IconDatabase",
    color: "#8B5CF6",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
  },
  {
    name: "Cloud & DevOps",
    icon: "IconCpu",
    color: "#EC4899",
    skills: ["AWS", "Docker", "CI/CD", "Git", "GitHub Actions"]
  },
  {
    name: "Other",
    icon: "IconRobot",
    color: "#10B981",
    skills: ["RAG / LLM Integration", "Blockchain Wallet Auth", "RBAC", "API Gateway", "System Design"]
  }
];
