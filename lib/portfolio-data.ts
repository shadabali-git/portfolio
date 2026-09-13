// lib/portfolio-data.ts
// Single source of truth for all content rendered across the site.

export type Identity = {
    name: string;
    role: string;
    tagline: string;
    status: string;
    email: string;
    phone: string;
    location: string;
};

export const identity: Identity = {
    name: "Shadab Ali",
    role: "Full-Stack Developer & Systems Builder",
    tagline:
        "Building high-throughput APIs, fault-tolerant distributed interfaces, and modern full-stack web applications.",
    status: "Available for select engineering opportunities",
    email: "shad46243@gmail.com",
    phone: "+91-9821689378",
    location: "Meerut / Noida, India",
};

export type SocialLink = {
    label: string;
    url: string;
    handle?: string;
};

export const socialLinks: SocialLink[] = [
    {label: "GitHub", url: "https://github.com/shadabali-git/", handle: "@shadabali-git"},
    {label: "LinkedIn", url: "https://www.linkedin.com/in/shadabali-linked/", handle: "shadabali-linked"},
    {label: "Twitter / X", url: "https://x.com/ShadabAli_tweet", handle: "@ShadabAli_tweet"},
    {label: "LeetCode", url: "https://leetcode.com/u/shadabali_112/", handle: "shadabali_112"},
    {label: "CodeChef", url: "https://www.codechef.com/users/shadddyy", handle: "shadddyy"},
    {label: "Coding Ninjas", url: "https://www.naukri.com/code360/profile/ShadabAli_CN", handle: "ShadabAli_CN"},
    {label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/shadddyy/", handle: "shadddyy"},
    {label: "HackerEarth", url: "https://www.hackerearth.com/@shad46243/", handle: "@shad46243"},
];

export type ExperienceEntry = {
    id: string;
    company: string;
    location: string;
    role: string;
    duration: string;
    current: boolean;
    highlights: string[];
};

export const experience: ExperienceEntry[] = [
    {
        id: "nish-fulltime",
        company: "Nish E-Service",
        location: "Maharashtra, India",
        role: "Full-Stack Developer",
        duration: "Feb 2026 – Present",
        current: true,
        highlights: [
            "Designed and maintained 50+ REST APIs powering DocNish, a mission-critical document-services platform for passport, driving license, and verification workflows.",
            "Secured authentication with Redis-backed rate limiting and OTP throttling across login, mobile, and email endpoints, cutting unauthorized access attempts by 20–30%.",
            "Architected JWT-based authentication with fine-grained RBAC across admin, agent, and user dashboards, improving platform security posture by 20–25%.",
            "Engineered appointment scheduling and real-time slot-management systems across external service providers.",
        ],
    },
    {
        id: "nish-intern",
        company: "Nish E-Service",
        location: "Maharashtra, India",
        role: "Full-Stack Developer Intern",
        duration: "Oct 2025 – Feb 2026",
        current: false,
        highlights: [
            "Built and shipped the core DocNish client portal using React and Tailwind CSS with a reusable component library.",
            "Integrated dynamic multi-step form workflows with backend REST APIs, reducing drop-offs and UI error states.",
            "Conducted API integration testing via Postman inside a 15-member agile sprint environment.",
        ],
    },
    {
        id: "nextgenscale",
        company: "NextGenScale",
        location: "Lucknow, India",
        role: "Freelance Full-Stack Engineer — Emrs.in",
        duration: "Feb 2025 – May 2025",
        current: false,
        highlights: [
            "Built an end-to-end school management portal using React.js, Firebase Auth, and modular role views for students, teachers, and admins.",
        ],
    },
];

export type Project = {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    tech: string[];
    live?: string;
    github?: string;
    demo?: string;
    metric?: string;
};

export const projects: Project[] = [
    {
        id: "chit-chat",
        name: "Chit-Chat Web App",
        description: "Low-latency messaging platform with live status and room subscriptions.",
        longDescription:
            "A real-time messaging client with presence indicators and room-based subscriptions, built around a lightweight Zustand store to keep UI state predictable across concurrent conversations.",
        tech: ["React", "TypeScript", "Firebase", "Zustand"],
        metric: "Collaborated on an SDE-2 led codebase, actively participating in code reviews, managing pull requests, and implementing robust version control standards.",
        demo: "https://chit-chat-web-app-six.vercel.app/",
        github: "https://github.com/Thre4dripper/Chit-Chat-WebApp"
    },
    {
        id: "docnish",
        name: "DocNish Enterprise Portal",
        description:
            "High-security document verification engine with 50+ micro-APIs, Redis throttling, and RBAC dashboards.",
        longDescription:
            "The backbone of Nish E-Service's document workflows — passport, driving license, and identity verification pipelines served through a modular REST layer. Redis-backed rate limiting and OTP throttling protect every login and verification endpoint, while JWT + RBAC segments access across admin, agent, and end-user dashboards.",
        tech: ["React", "Node.js", "Redis", "MongoDB", "JWT", "RBAC"],
        metric: "50+ APIs in production",
        live: "https://www.docnish.com/"
    },
    {
        id: "leetsheet",
        name: "LeetSheet",
        description:
            "Algorithmic milestone tracker with dynamic question categorization, JWT/OAuth, and Cloudinary integration.",
        longDescription:
            "A LeetCode progress tracker built to make consistency visible. Questions are auto-categorized by topic and difficulty, progress persists behind JWT/OAuth-secured accounts, and Cloudinary handles media for shared solution notes.",
        tech: ["React", "Node.js", "JWT", "OAuth", "Cloudinary"],
        live: "https://leet-code-tool-eight.vercel.app/",
        github: "https://github.com/shadabali-git/LeetCodeTool",
    },
    {
        id: "multi-tenant-saas",
        name: "Multi-Tenant Business SaaS Platform - In Progress",
        description:
            "Multi-tenant SaaS engine enabling businesses to launch isolated storefronts with subdomain routing and tenant-scoped auth.",
        longDescription:
            "A scalable multi-tenant architecture designed for businesses like gyms, schools, and merchants to manage independent spaces on a single platform. Features PostgreSQL shared-schema tenancy, tenant-isolated email OTP auth supporting cross-tenant duplicate emails, subdomain routing, and Dockerized Redis/PostgreSQL infrastructure integrated via Prisma into a modular NestJS backend.",
        tech: [
            "Next.js",
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Docker"
        ],
        github: "https://github.com/shadabali-git/MultiTenant",
    }
    // {
    //     id: "exam-platform",
    //     name: "Examination & Assessment Platform",
    //     description:
    //         "Real-time collaborative quiz platform with instant automated grading and Google Sign-in.",
    //     longDescription:
    //         "A live assessment tool where instructors launch quizzes and see submissions grade themselves in real time. Socket.IO keeps every participant's state in sync, Supabase handles persistence and auth alongside Google Sign-in.",
    //     tech: ["Next.js", "Supabase", "Socket.IO", "OAuth"],
    //     demo: "https://exam-test-platform-git-master-shadaab-alis-projects.vercel.app/",
    // },
    // {
    //     id: "music-floats",
    //     name: "Music Floats",
    //     description: "Short-form vertical audio discovery platform inspired by Reels.",
    //     longDescription:
    //         "A vertical-scroll audio discovery feed — swipe past tracks the way you'd swipe past reels. Built to explore infinite-scroll UX patterns applied to audio instead of video.",
    //     tech: ["React", "Node.js", "Express"],
    //     demo: "https://float-music-reels.vercel.app/",
    // },
];

export type SkillCategory = "Frontend" | "Distributed Backend" | "DevOps & Cloud" | "Core CS";

export type Skill = {
    name: string;
    category: SkillCategory;
};

export const skillCategories: SkillCategory[] = [
    "Frontend",
    "Distributed Backend",
    "DevOps & Cloud",
    "Core CS",
];

export const skills: Skill[] = [
    {name: "React", category: "Frontend"},
    {name: "Next.js", category: "Frontend"},
    {name: "TypeScript", category: "Frontend"},
    {name: "Tailwind CSS", category: "Frontend"},
    {name: "Zustand", category: "Frontend"},
    {name: "Framer Motion", category: "Frontend"},
    {name: "Node.js", category: "Distributed Backend"},
    {name: "Express", category: "Distributed Backend"},
    {name: "REST API Design", category: "Distributed Backend"},
    {name: "Redis", category: "Distributed Backend"},
    {name: "MongoDB", category: "Distributed Backend"},
    {name: "Socket.IO", category: "Distributed Backend"},
    {name: "JWT & OAuth", category: "Distributed Backend"},
    {name: "RBAC Design", category: "Distributed Backend"},
    {name: "Docker", category: "DevOps & Cloud"},
    {name: "Vercel", category: "DevOps & Cloud"},
    {name: "Firebase", category: "DevOps & Cloud"},
    {name: "Supabase", category: "DevOps & Cloud"},
    {name: "Postman", category: "DevOps & Cloud"},
    {name: "Data Structures & Algorithms", category: "Core CS"},
    {name: "C++", category: "Core CS"},
    {name: "System Design", category: "Core CS"},
    {name: "Operating Systems", category: "Core CS"},
];

export type Metric = {
    label: string;
    value: string;
    detail: string;
};

export const metrics: Metric[] = [
    {label: "LeetCode", value: "650+", detail: "Problems solved, C++ focus"},
    {label: "CodeChef", value: "2★", detail: "17+ contests rated"},
    {label: "APIs shipped", value: "50+", detail: "In production at DocNish"},
    {label: "Security posture", value: "+25%", detail: "Improvement via JWT + RBAC"},
];

export type Achievement = {
    title: string;
    detail: string;
};

export const achievements: Achievement[] = [
    {
        title: "Research Publication",
        detail:
            "International Journal of Computer Science & Engineering, under the guidance of Dr. Sunnil, JMI.",
    },
    {
        title: "MockMate — HackJMI",
        detail: "Built a technical interview simulator during HackJMI.",
    },
    {
        title: "HackerRank Certified",
        detail: "Frontend Developer (React) certification.",
    },
];

export type EducationEntry = {
    institution: string;
    degree: string;
    duration: string;
    score: string;
};

export const education: EducationEntry[] = [
    {
        institution: "JSS Academy of Technical Education, Noida",
        degree: "B.Tech in Information Technology",
        duration: "2023 – 2026",
        score: "CGPA 7.8 / 10",
    },
    {
        institution: "Jamia Millia Islamia, Delhi",
        degree: "Diploma in Computer Engineering",
        duration: "2020 – 2023",
        score: "79%",
    },
];

// Command palette entries — resume, sections, projects, and socials all reachable via Cmd+K
export type CommandItem = {
    id: string;
    label: string;
    group: "Navigate" | "Projects" | "Socials" | "Actions";
    href: string;
    external?: boolean;
};

export const commandItems: CommandItem[] = [
    {id: "nav-home", label: "Home", group: "Navigate", href: "#home"},
    {id: "nav-experience", label: "Experience", group: "Navigate", href: "#experience"},
    {id: "nav-projects", label: "Projects", group: "Navigate", href: "#projects"},
    {id: "nav-stats", label: "Stats & achievements", group: "Navigate", href: "#stats"},
    {id: "nav-contact", label: "Contact", group: "Navigate", href: "#contact"},
    ...projects.map((p) => ({
        id: `project-${p.id}`,
        label: p.name,
        group: "Projects" as const,
        href: `#projects`,
    })),
    ...socialLinks.map((s) => ({
        id: `social-${s.label}`,
        label: s.label,
        group: "Socials" as const,
        href: s.url,
        external: true,
    })),
    {id: "action-email", label: `Email — ${identity.email}`, group: "Actions", href: `mailto:${identity.email}`},
];
