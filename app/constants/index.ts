export const SITE_CONFIG = {
    name: "Manoj Venkat Tamtam",
    initials: "MVT",
    title: "Full Stack Developer | Microservices Architect",
    description: "Engineer who builds systems that scale. Specializing in distributed systems, microservices architecture, and modern full-stack development.",
    url: "https://manojtamtam.dev",
    email: "manojtamtam2000@gmail.com",
    social: {
        github: "https://github.com/manojtamtam2000-afk",
        linkedin: "https://www.linkedin.com/in/manoj-tamtam-303992299",
    },
} as const;

export const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Architecture", href: "#architecture" },
    { label: "Contact", href: "#contact" },
] as const;

export const HERO_CONTENT = {
    headline: ["Manoj Venkat Tamtam"],
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
    { id: "gateway", label: "API Gateway", x: 50, y: 5, description: "Request routing & rate limiting" },
    { id: "auth", label: "Auth Service", x: 10, y: 30, description: "JWT authentication & authorization" },
    { id: "kafka", label: "Kafka Event Bus", x: 50, y: 30, description: "Asynchronous event streaming" },
    { id: "content", label: "Content Service", x: 90, y: 30, description: "Course & material management" },
    { id: "notification", label: "Notification Service", x: 10, y: 58, description: "Email, push & in-app notifications" },
    { id: "assignment", label: "Assignment Service", x: 50, y: 58, description: "Task & submission handling" },
    { id: "worksheets", label: "Worksheets Module", x: 90, y: 58, description: "Interactive worksheet generation & grading" },
    { id: "mongodb", label: "MongoDB", x: 50, y: 85, description: "Document store & persistence" },
] as const;

export const ARCHITECTURE_CONNECTIONS = [
    { from: "gateway", to: "auth" },
    { from: "gateway", to: "kafka" },
    { from: "gateway", to: "content" },
    { from: "kafka", to: "assignment" },
    { from: "kafka", to: "notification" },
    { from: "kafka", to: "worksheets" },
    { from: "kafka", to: "mongodb" },
    { from: "auth", to: "assignment" },
    { from: "content", to: "mongodb" },
    { from: "content", to: "worksheets" },
    { from: "notification", to: "mongodb" },
    { from: "worksheets", to: "mongodb" },
] as const;

export const PROJECTS = [
    {
        id: "customer-support-service",
        title: "Customer Support Microservice",
        subtitle: "Event-Driven Ticketing Service in a Microservices Ecosystem",
        description: "A Spring Boot microservice handling the full support-ticket lifecycle — creation, SLA tracking, activity history, and resolution — built to run as part of a larger distributed system. Registers with Eureka for service discovery, talks to Auth, Content, Communication, Notification, and LMS services via OpenFeign, and publishes ticket events to Kafka for downstream consumers.",
        impact: [
            "Built SLA breach scheduler that auto-escalates overdue tickets via scheduled jobs",
            "Integrated Resilience4j circuit breakers around every inter-service Feign call",
            "Published ticket lifecycle events to Kafka for async notification fan-out",
            "Modeled ticket priority, status & type as domain enums with a clean service/mapper layering",
            "Secured endpoints with JWT, backed by MongoDB persistence and Redis caching",
        ],
        techStack: ["Spring Boot", "Kafka", "MongoDB", "Redis", "Eureka", "OpenFeign", "Resilience4j", "JWT"],
        category: "Microservices",
        github: "https://github.com/manojtamtam2000-afk/customer-support-service",
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
