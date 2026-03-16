"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "@/app/constants";

export default function Projects() {
    return (
        <section className="py-section relative" id="work">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="section-label block">Selected Work</span>
                    <h2 className="text-display-md font-semibold text-text-primary">
                        Featured Projects
                    </h2>
                </motion.div>

                <div className="space-y-32">
                    {PROJECTS.map((project, index) => (
                        <ProjectSection key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ProjectSectionProps {
    project: (typeof PROJECTS)[number];
    index: number;
}

function ProjectSection({ project, index }: ProjectSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isReversed = index % 2 !== 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-16 items-center`}
        >
            {/* Text Content */}
            <div className="flex-1 space-y-6">
                <div>
                    <span className="text-label text-accent-primary uppercase font-semibold tracking-wider">
                        {project.category}
                    </span>
                    <h3 className="mt-3 text-display-sm font-semibold text-text-primary">
                        {project.title}
                    </h3>
                    <p className="mt-1 text-body-md text-text-secondary">
                        {project.subtitle}
                    </p>
                </div>

                <p className="text-body-md text-text-secondary leading-relaxed">
                    {project.description}
                </p>

                {/* Impact metrics */}
                <div className="space-y-3">
                    {project.impact.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                            className="flex items-start gap-3"
                        >
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                            <span className="text-body-sm text-text-secondary">{item}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="tech-tag"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Visual Card */}
            <div className="flex-1 w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden group glass-card gradient-border p-0"
                >
                    {/* Gradient background simulating a project screenshot */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(135deg, var(--surface-secondary), var(--surface-tertiary), var(--surface-primary))`,
                        }}
                    />

                    {/* Decorative grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(var(--text-tertiary) 1px, transparent 1px), linear-gradient(90deg, var(--text-tertiary) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                        }}
                    />

                    {/* Project visual elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4 p-8">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent-glow border border-accent-glow-strong flex items-center justify-center">
                                <svg className="w-8 h-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                </svg>
                            </div>
                            <p className="text-sm text-text-tertiary font-mono">{project.id}</p>
                        </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
            </div>
        </motion.div>
    );
}
