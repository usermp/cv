import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Senior Software Engineer",
  initials: "MY",
  fullName: "Mohammad Yeganeh",
  location: "Karaj, Iran",
  locationLink: "https://www.google.com/maps/place/karaj",
  about:
    "Senior Software Engineer specializing in backend development, system architecture, and open-source contributions with 8+ years of experience.",
  summary: (
    <>
      Senior Software Engineer with 8+ years of experience building scalable, high-performance applications. 
      Expert in PHP, Laravel, microservices architecture, and distributed systems. 
      Proven track record of leading technical teams, designing system architectures, 
      and contributing to open-source ecosystem. Passionate about clean code, performance optimization, 
      and mentoring junior developers.
    </>
  ),
  avatarUrl: "/cv/image.jpeg",
  personalWebsiteUrl: "https://mohammadyeganeh.ir",
  contact: {
    email: "mohammadyeganeh.dev@gmail.com",
    tel: "+989353150068",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/usermp",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammadyeganeh/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school:
        "University of Applied Science and Technology - Municipality of Karaj Center",
      degree: "Associate's Degree in Software Engineering",
      start: "2016",
      end: "2018",
      achievements: [
        "Graduated with honors",
        "Focus on software development methodologies"
      ]
    },
  ],
  work: [
    {
      company: "Lotous",
      link: "https://lotousitc.com/",
      badges: [
        "Laravel",
        "Go",
        "Microservices",
        "Redis",
        "PHP",
        "Docker",
        "RabbitMQ",
        "Blockchain",
        "Team Leadership"
      ],
      title: "Senior Back-End Developer → Tech Lead",
      logo: ConsultlyLogo,
      start: "Jan 2025",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Promoted to Tech Lead for demonstrating exceptional 
              technical leadership and architecture design capabilities
            </li>
            <li>
              Architected and led development of blockchain-based asset management 
              platform handling high-volume financial transactions
            </li>
            <li>
              Designed event-driven microservices architecture using RabbitMQ for 
              asynchronous processing and improved system resilience
            </li>
            <li>
              Implemented security-first approach with multi-layered authentication, 
              encryption, and audit logging for financial compliance
            </li>
            <li>
              Mentored backend developers, established coding standards, and 
              implemented CI/CD pipelines reducing deployment time significantly
            </li>
            <li>
              Optimized database performance achieving significant improvement in query 
              execution time through strategic indexing and query optimization
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Panafor",
      link: "https://panafor.com",
      badges: ["Laravel", "Microservices", "Redis", "PHP", "Docker", "Kubernetes", "API Gateway"],
      title: "Senior Back-End Developer",
      logo: ConsultlyLogo,
      start: "Mar 2022",
      end: "Dec 2024",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Led migration from monolithic to microservices architecture, 
              decomposing multiple business domains into independent services
            </li>
            <li>
              Designed and implemented API Gateway handling high-volume daily requests 
              with high uptime using rate limiting and circuit breaker patterns
            </li>
            <li>
              Developed real-time reservation system processing high-volume concurrent 
              bookings with Redis pub/sub and WebSocket integration
            </li>
            <li>
              Established automated testing pipeline increasing test coverage 
              significantly across all microservices
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Nahal Gasht",
      link: "https://nahalgasht.com",
      badges: ["Laravel", "PHP", "MySQL", "Redis", "Team Leadership", "System Architecture"],
      logo: ConsultlyLogo,
      title: "Back-End Developer → Back-End Tech Lead",
      start: "Jan 2022",
      end: "Mar 2025",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Promoted to Back-End Tech Lead for successfully 
              leading major system refactoring and performance optimization initiatives
            </li>
            <li>
              Architected complete reservation system from ground up, handling 
              peak loads of high-volume simultaneous bookings during holiday seasons
            </li>
            <li>
              Implemented distributed caching strategy reducing database load 
              significantly and improving response times substantially
            </li>
            <li>
              Built comprehensive reporting dashboard with real-time analytics 
              using Laravel Livewire and Chart.js
            </li>
            <li>
              Led team of developers, conducted code reviews, and established 
              development workflow increasing team productivity significantly
            </li>
            <li>
              Integrated multiple payment gateways and implemented idempotent 
              transaction handling ensuring data consistency
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "G5 Publications",
      link: "https://malekig5.com",
      badges: ["Laravel", "PHP", "MySQL", "JavaScript", "Vue.js", "API Development"],
      logo: ConsultlyLogo,
      title: "Back-End Developer",
      start: "Jun 2018",
      end: "Dec 2021",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed and maintained publishing platform serving high-volume monthly 
              active users with multilingual support
            </li>
            <li>
              Built RESTful APIs for mobile applications, implementing JWT 
              authentication and role-based access control
            </li>
            <li>
              Created personality assessment system with real-time scoring 
              algorithms and detailed analytics dashboard
            </li>
            <li>
              Optimized database schema and queries, reducing page load time 
              significantly on average
            </li>
            <li>
              Implemented automated backup and disaster recovery system ensuring 
              data integrity and business continuity
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Steel Gahreman",
      link: "https://steel-ghahreman.com",
      badges: ["PHP", "MySQL", "JavaScript", "CRM", "System Design"],
      logo: ConsultlyLogo,
      title: "PHP Developer",
      start: "Sep 2016",
      end: "May 2018",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Designed and developed custom CRM system streamlining sales, 
              inventory, and customer relationship management
            </li>
            <li>
              Automated inventory tracking and reporting, reducing manual 
              data entry errors significantly
            </li>
            <li>
              Implemented real-time notifications and workflow automation 
              improving team collaboration efficiency
            </li>
            <li>
              Created data visualization dashboards providing actionable 
              insights for business decision making
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "PHP & Laravel Ecosystem",
    "Microservices Architecture",
    "System Design & Architecture",
    "Team Leadership & Mentoring",
    "MySQL & Database Optimization",
    "Redis & Caching Strategies",
    "Docker & Containerization",
    "RESTful & GraphQL APIs",
    "Message Queues (RabbitMQ)",
    "CI/CD Pipelines",
    "Performance Optimization",
    "Security Best Practices",
    "Go (Golang)",
    "Blockchain Fundamentals",
    "Open Source Development",
    "Package Development",
    "CLI Tools Development",
    "Code Review & Quality Assurance",
    "Agile Methodologies",
    "Technical Documentation"
  ],

  projects: [
    {
      title: "Shamin Financial Platform",
      techStack: ["PHP", "Laravel", "Financial Systems", "Asset Management", "Banking Integration"],
      description: "Enterprise platform for monetizing banking sector surplus assets with real-time valuation and auction systems",
      logo: ConsultlyLogo,
      link: {
        label: "shamin.ir",
        href: "https://shamin.ir/",
      },
    },
    {
      title: "Artisan API Package",
      techStack: ["PHP", "Laravel", "Package Development", "API", "DevOps"],
      description: "Popular Laravel package enabling remote Artisan command execution via secure API endpoints with role-based access control",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/usermp/artisan-api",
        href: "https://github.com/usermp/artisan-api",
      },
    },
    {
      title: "Laravel Secure Login Package",
      techStack: ["PHP", "Laravel", "Authentication", "OTP", "Passport", "Security"],
      description: "Production-ready authentication package featuring multi-factor OTP verification, Laravel Passport integration, and Sentry error tracking",
      logo: ConsultlyLogo,
      link: {
        label: "GitHub Repository",
        href: "https://github.com/usermp/laravel-login-package",
      },
    },
    {
      title: "Laravel CRUD Generator",
      techStack: ["PHP", "Laravel", "Package Development", "YAML", "Code Generation", "Productivity"],
      description: "Developer productivity tool generating complete CRUD operations from YAML configuration including controllers, models, views, and API endpoints",
      logo: ConsultlyLogo,
      link: {
        label: "GitHub Repository",
        href: "https://github.com/usermp/laravel-crud-generator",
      },
    },
    {
      title: "Gitt - Smart Git CLI",
      techStack: ["Shell", "CLI", "Git", "Automation", "Developer Tools"],
      description: "Intelligent CLI tool streamlining Git workflows with commit type selection, staged file management, and automatic message formatting",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/usermp/gitt",
        href: "https://github.com/usermp/gitt",
      },
    },
    {
      title: "Laravel Filter Package",
      techStack: ["PHP", "Laravel", "Eloquent", "Filtering", "Query Builder"],
      description: "Advanced filtering trait for Eloquent models supporting complex query parameters, relationship filtering, and search optimization",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/usermp/laravel-filter",
        href: "https://github.com/usermp/laravel-filter",
      },
    },
    {
      title: "Dubai Connect AI Platform",
      techStack: ["PHP", "Laravel", "AI", "RAG", "OpenAI", "Chatbot"],
      description: "Enterprise AI chatbot platform utilizing Retrieval-Augmented Generation for accurate customer support with high query resolution rate",
      logo: ConsultlyLogo,
      link: {
        label: "dubaiconnect.ai",
        href: "https://dubaiconnect.ai/",
      },
    },
    {
      title: "Visaland Travel Platform",
      techStack: ["PHP", "Laravel", "AI Integration", "Travel Tech", "Visa Processing"],
      description: "AI-powered travel assistance platform automating visa applications and travel planning for multiple countries",
      logo: ConsultlyLogo,
      link: {
        label: "Visaland",
        href: "https://visaland.org/",
      },
    },
    {
      title: "Hubotel Reservation System",
      techStack: ["PHP", "Laravel", "Redis", "MySQL", "Real-time", "Hospitality"],
      description: "High-performance hotel management system processing high-volume daily reservations with real-time availability and dynamic pricing",
      logo: ConsultlyLogo,
      link: {
        label: "Hubotel",
        href: "https://panel.hubotel.ir/",
      },
    },
    {
      title: "Trupner Microservices Platform",
      techStack: ["PHP", "Laravel", "Microservices", "Docker", "API Gateway", "Event-driven"],
      description: "Distributed hotel reservation platform built on event-driven microservices architecture with horizontal scalability",
      logo: ConsultlyLogo,
      link: {
        label: "Trupner",
        href: "https://trupner.com/",
      },
    },
    {
      title: "AIA Tools Platform",
      techStack: ["PHP", "Laravel", "WordPress", "AI Tools", "Content Management"],
      description: "Curated platform showcasing numerous AI tools with user reviews, comparisons, and integration guides",
      logo: ConsultlyLogo,
      link: {
        label: "AIA Tools",
        href: "https://aia.tools/",
      },
    },
  ],
} as const;