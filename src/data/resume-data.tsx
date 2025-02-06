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
  name: "Mohammad Yeganeh",
  initials: "MY",
  location: "Karaj, Iran",
  locationLink: "https://www.google.com/maps/place/karaj",
  about:
    "Experienced Backend Developer specializing in PHP, Laravel, and scalable API architectures.",
  summary: (
    <>
      Backend Developer with 7+ years of experience, proficient in PHP, Laravel,
      MySQL, Redis, and microservices architecture. Passionate about building
      high-performance web applications, optimizing database queries, and
      contributing to open-source projects.
    </>
  ),
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHy2WCR_O8peQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731411056853?e=1744243200&v=beta&t=pcM1_Rb-_UgJJBe8HeaWW6ega6ikNZpSM298EQ_fYg0",
  personalWebsiteUrl: "https://github.com/usermp",
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
      school: "University of Applied Science and Technology - Municipality of Karaj Center",
      degree: "Associate's Degree",
      start: "2016",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Panafor",
      link: "https://panafor.com",
      badges: ["Laravel", "Microservices", "Redis", "PHP", "Docker"],
      title: "Senior Back-End Developer",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description: (
        <>
          Developed web services for reservation systems and user management.
          <ul className="list-inside list-disc">
            <li>Designed and implemented scalable microservices architecture.</li>
            <li>Optimized database queries to enhance system performance and reduce load times.</li>
            <li>Integrated Redis caching to improve application responsiveness.</li>
            <li>Ensured system security and stability through regular audits and optimizations.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Nahal Gasht",
      link: "https://nahalgasht.com",
      badges: ["Laravel", "PHP", "MYSQL", "SLIM", "LIVEWIRE"],
      logo: ConsultlyLogo,
      title: "Senior Back-End Developer",
      start: "2022",
      end: null,
      description: (
        <>
          Designed and developed a complete reservation system.
          <ul className="list-inside list-disc">
            <li>Developed APIs for seamless booking and transaction management.</li>
            <li>Trained the technical team in software development best practices.</li>
          </ul>
        </>
      ),
    },
    {
      company: "G5 Publications",
      link: "https://malekig5.com",
      badges: ["Laravel", "PHP", "MYSQL", "JS"],
      logo: ConsultlyLogo,
      title: "Back-End Developer",
      start: "2018",
      end: "2022",
      description: (
        <>
          Managed user accounts, language coaches, and personality assessment tests.
          <ul className="list-inside list-disc">
            <li>Developed and maintained back-end services for the publishing platform.</li>
            <li>Optimized existing systems to enhance performance and user experience.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Steel Gahreman",
      link: "https://steel-ghahreman.com",
      badges: ["PHP",  "MYSQL"],
      logo: ConsultlyLogo,
      title: "PHP Programmer",
      start: "2016",
      end: "2018",
      description: (
        <>
          Started professional programming in CRM development.
          <ul className="list-inside list-disc">
            <li>Designed and developed internal CRM solutions for business operations.</li>
            <li>Implemented system automation to improve efficiency.</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "PHP",
    "Laravel",
    "MySQL",
    "Redis",
    "Docker",
    "Microservices",
    "RESTful API",
    "System Architecture",
    "Security & Performance Optimization",
    "CI/CD & Jenkins",
    "Troubleshooting & Problem-Solving",
    "Go",
  ],
  
  projects: [
    {
      title: "Dubai Connect",
      techStack: ["PHP", "Laravel", "AI", "RAG"],
      description:
        "AI-powered chatbot for customer support",
      logo: ConsultlyLogo,
      link: {
        label: "dubaiconnect.ai",
        href: "https://dubaiconnect.ai/",
      },
    },
    {
      title: "Visaland",
      techStack: ["PHP", "Laravel"],
      description:
        "A platform for AI-powered travel and visa assistance services.",
      logo: ConsultlyLogo,
      link: {
        label: "Visaland",
        href: "https://visaland.org/",
      },
    },
    {
      title: "Hubotel",
      techStack: ["PHP", "Laravel", "Redis", "MySQL"],
      description:
        "Hotel reservation system providing seamless booking and management solutions.",
      logo: ConsultlyLogo,
      link: {
        label: "Hubotel",
        href: "https://panel.hubotel.ir/",
      },
    },
    {
      title: "Trupner",
      techStack: ["PHP", "Laravel", "Microservices"],
      description:
        "Web service for hotel reservations with an advanced microservices architecture.",
      logo: ConsultlyLogo,
      link: {
        label: "Trupner",
        href: "https://trupner.com/",
      },
    },
    {
      title: "AIA Tools",
      techStack: ["PHP", "Laravel", "WordPress"],
      description:
        "A platform for showcasing AI-powered tools and applications.",
      logo: ConsultlyLogo,
      link: {
        label: "AIA Tools",
        href: "https://aia.tools/",
      },
    },

  ],  
} as const;
