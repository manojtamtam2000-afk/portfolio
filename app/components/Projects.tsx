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

                {/* GitHub Link */}
                {"github" in project && project.github && (
                    <motion.a
                        href={project.github as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl text-body-sm font-medium text-text-primary glass-card gradient-border hover:scale-[1.03] transition-transform duration-300"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Source Code
                    </motion.a>
                )}
            </div>

            {/* Visual Card */}
            <div className="flex-1 w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden group glass-card gradient-border p-0"
                >
                    {/* Project Screenshot */}
                    {"image" in project && project.image && (
                        <img
                            src={project.image as string}
                            alt={`${project.title} dashboard screenshot`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    )}

                    {/* Subtle gradient overlay for depth */}
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            background: `linear-gradient(180deg, transparent 50%, var(--surface-primary) 100%)`,
                        }}
                    />

                    {/* Hover overlay with project title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-primary/90 via-surface-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <p className="text-sm text-text-secondary font-mono tracking-wide">{project.id}</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
