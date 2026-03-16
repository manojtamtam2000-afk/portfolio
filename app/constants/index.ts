export const SITE_CONFIG = {
    name: "Manoj Naidu",
    initials: "MN",
    title: "Full Stack Developer | Microservices Architect",
    description: "Engineer who builds systems that scale. Specializing in distributed systems, microservices architecture, and modern full-stack development.",
    url: "https://manojnaidu.dev",
    email: "contact@manojnaidu.dev",
    social: {
        github: "https://github.com/manojnaidu",
        linkedin: "https://linkedin.com/in/manojnaidu",
    },
} as const;

export const NAV_LINKS = [
    { label: "Work", href: "#work" },
    { label: "Architecture", href: "#architecture" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
] as const;

export const HERO_CONTENT = {
    headline: ["Manoj Naidu"],
    taglines: [
        "Designing Scalable Systems.",
        "Building Modern Software.",
    ],
    subtitle: "Full Stack Developer specializing in distributed systems and microservices architecture.",
    cta: {
        primary: { label: "View Work", href: "#work" },
        secondary: { label: "Contact Me", href: "#contact" },
    },
} as const;

export const PHILOSOPHY_CONTENT = {
    statement: "I believe software should scale effortlessly, communicate intelligently, and feel invisible to the user.",
    supporting: "Every system I build is designed with resilience, clarity, and performance at its core. Engineering isn't just about writing code — it's about crafting experiences that endure.",
} as const;

export const EXPERTISE_CARDS = [
    {
        title: "Distributed Systems",
        description: "Designing event-driven architectures that handle millions of operations with zero downtime.",
        technologies: ["Kafka", "Event-Driven Architecture", "Asynchronous Workflows", "Message Queues"],
        icon: "systems",
    },
    {
        title: "Backend Engineering",
        description: "Building robust microservices with clean interfaces, efficient data layers, and horizontal scalability.",
        technologies: ["Spring Boot", "Microservices", "MongoDB", "Redis", "PostgreSQL"],
        icon: "backend",
    },
    {
        title: "Frontend Engineering",
        description: "Crafting performant, accessible interfaces with modern tooling and pixel-perfect precision.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        icon: "frontend",
    },
] as const;

export const ARCHITECTURE_NODES = [
    { id: "gateway", label: "API Gateway", x: 50, y: 8, description: "Request routing & rate limiting" },
    { id: "auth", label: "Auth Service", x: 15, y: 35, description: "JWT authentication & authorization" },
    { id: "kafka", label: "Kafka Event Bus", x: 50, y: 35, description: "Asynchronous event streaming" },
    { id: "content", label: "Content Service", x: 85, y: 35, description: "Course & material management" },
    { id: "assignment", label: "Assignment Service", x: 25, y: 62, description: "Task & submission handling" },
    { id: "mongodb", label: "MongoDB", x: 75, y: 62, description: "Document store & persistence" },
] as const;

export const ARCHITECTURE_CONNECTIONS = [
    { from: "gateway", to: "auth" },
    { from: "gateway", to: "kafka" },
    { from: "gateway", to: "content" },
    { from: "kafka", to: "assignment" },
    { from: "kafka", to: "mongodb" },
    { from: "auth", to: "assignment" },
    { from: "content", to: "mongodb" },
] as const;

export const PROJECTS = [
    {
        id: "lms-platform",
        title: "LMS Microservices Platform",
        subtitle: "Enterprise Learning Management System",
        description: "A distributed learning management system built on microservices architecture, handling real-time content delivery, assignment workflows, and user authentication across multiple services.",
        impact: [
            "Reduced response latency by 60% through event-driven communication",
            "Scaled to handle 10,000+ concurrent users with zero downtime",
            "Achieved 99.9% uptime with automated health monitoring",
        ],
        techStack: ["Spring Boot", "Kafka", "MongoDB", "Redis", "Docker", "React"],
        category: "Distributed Systems",
    },
    {
        id: "realtime-analytics",
        title: "Real-Time Analytics Engine",
        subtitle: "High-Throughput Data Pipeline",
        description: "A streaming analytics platform that processes millions of events per minute, providing real-time dashboards and actionable insights for business stakeholders.",
        impact: [
            "Processing 2M+ events per minute with sub-second latency",
            "Reduced data pipeline costs by 40% through intelligent batching",
            "Built self-healing mechanisms for automatic failure recovery",
        ],
        techStack: ["Node.js", "Kafka", "PostgreSQL", "Redis", "Next.js", "WebSockets"],
        category: "Data Engineering",
    },
] as const;

export const EXPERIENCE_TIMELINE = [
    {
        year: "2024",
        role: "Full Stack Developer",
        company: "Building Scalable Systems",
        description: "Architecting microservices-based platforms with Spring Boot, Kafka, and modern frontend technologies. Focused on distributed systems and cloud-native development.",
    },
    {
        year: "2023",
        role: "Software Engineer",
        company: "Enterprise Solutions",
        description: "Developed high-performance REST APIs and integrated event-driven messaging systems. Led migration of monolithic applications to microservices architecture.",
    },
    {
        year: "2022",
        role: "Full Stack Developer",
        company: "Digital Platforms",
        description: "Built responsive web applications using React and Next.js. Implemented CI/CD pipelines and containerized deployments with Docker.",
    },
] as const;
