export const SITE_CONFIG = {
    name: "Manoj Venkat Tamtam",
    initials: "MVT",
    title: "Full Stack Developer | Microservices Architect",
    description: "Engineer who builds systems that scale. Specializing in distributed systems, microservices architecture, and modern full-stack development.",
    url: "https://manojtamtam.dev",
    email: "manojtamtam2000@gmail.com",
    social: {
        github: "https://github.com/manojtamtam2000-afk",
        linkedin: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BoyiPa7LBQM2RXavTkEcTyw%3D%3D",
    },
} as const;

export const NAV_LINKS = [
    { label: "Work", href: "#work" },
    { label: "Architecture", href: "#architecture" },
    { label: "About", href: "#about" },
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
        id: "bill-scan-rewards",
        title: "Bill Scan Rewards Platform",
        subtitle: "Full-Stack Fintech Application with AI-Powered OCR",
        description: "A comprehensive bill-scanning rewards platform where users upload receipts, earn coins via AI-powered OCR validation (Google Gemini / Tesseract), and redeem them for real payouts via Razorpay. Features a React SPA with four role-based dashboards (User, Merchant, Support, Superadmin), a Node.js/Express backend with 25 Mongoose models and 10 domain services, real-time notifications via Socket.IO & Firebase Cloud Messaging, and a React Native mobile app.",
        impact: [
            "Built 25+ data models and 10 specialized services including OCR, wallet, and audit",
            "Implemented AI-powered receipt parsing with Google Gemini for automated bill validation",
            "Designed role-based access control with JWT httpOnly cookies, CSRF protection & OTP auth",
            "Integrated Razorpay payment gateway for automated payout processing",
            "Developed cross-platform solution with React web SPA and React Native mobile app",
        ],
        techStack: ["Node.js", "Express", "React", "MongoDB", "Socket.IO", "Gemini AI", "React Native", "Razorpay"],
        category: "Full-Stack Platform",
        image: "/images/bill-scan-rewards.png",
        github: "https://github.com/tconsol/hsiwish",
    },
    {
        id: "lms-platform",
        title: "LMS Microservices Platform",
        subtitle: "Enterprise Learning Management System",
        description: "A distributed learning management system built on microservices architecture, featuring Content Service for course management, Notification Service for real-time alerts, and a Worksheets Module for interactive assessments — all orchestrated via event-driven communication across multiple services.",
        impact: [
            "Reduced response latency by 60% through event-driven communication",
            "Scaled to handle 10,000+ concurrent users with zero downtime",
            "Achieved 99.9% uptime with automated health monitoring",
            "Built Worksheets Module supporting interactive worksheet generation & auto-grading",
        ],
        techStack: ["Spring Boot", "Kafka", "MongoDB", "Redis", "Docker", "React"],
        category: "Distributed Systems",
        image: "/images/lms-platform.png",
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
        image: "/images/realtime-analytics.png",
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
