"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ARCHITECTURE_NODES } from "@/app/constants";

export default function Architecture() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-section relative" id="architecture">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="section-label block">Engineering</span>
                    <h2 className="text-display-md font-semibold text-text-primary">
                        System Architecture Thinking
                    </h2>
                    <p className="mt-4 text-body-lg text-text-secondary max-w-2xl mx-auto">
                        Designing distributed systems with clear boundaries, resilient communication, and scalable data flows.
                    </p>
                </motion.div>

                {/* Architecture Diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Container */}
                    <div className="relative aspect-[16/10] md:aspect-[16/8]">
                        {/* Connection Lines - SVG */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 100 75"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                            {/* Gateway to Auth */}
                            <motion.line
                                x1="50" y1="15" x2="20" y2="38"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.3"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 0.8 }}
                            />
                            {/* Gateway to Kafka */}
                            <motion.line
                                x1="50" y1="15" x2="50" y2="38"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.3"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 0.9 }}
                            />
                            {/* Gateway to Content */}
                            <motion.line
                                x1="50" y1="15" x2="80" y2="38"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.3"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 1 }}
                            />
                            {/* Kafka to Assignment */}
                            <motion.line
                                x1="50" y1="45" x2="28" y2="62"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.3"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 1.1 }}
                            />
                            {/* Kafka to MongoDB */}
                            <motion.line
                                x1="50" y1="45" x2="72" y2="62"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.3"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 1.2 }}
                            />
                            {/* Auth to Assignment */}
                            <motion.line
                                x1="20" y1="45" x2="28" y2="62"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.3"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 1.3 }}
                            />
                            {/* Content to MongoDB */}
                            <motion.line
                                x1="80" y1="45" x2="72" y2="62"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.3"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 1.4 }}
                            />

                            {/* Animated pulse dots */}
                            {[
                                { cx: 35, cy: 26 },
                                { cx: 50, cy: 26 },
                                { cx: 65, cy: 26 },
                                { cx: 39, cy: 53 },
                                { cx: 61, cy: 53 },
                            ].map((dot, i) => (
                                <motion.circle
                                    key={i}
                                    cx={dot.cx}
                                    cy={dot.cy}
                                    r="0.5"
                                    fill="var(--accent-primary)"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? {
                                        opacity: [0, 0.8, 0],
                                        r: [0.3, 0.6, 0.3],
                                    } : {}}
                                    transition={{
                                        duration: 2,
                                        delay: 1.5 + i * 0.3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </svg>

                        {/* Architecture Nodes */}
                        {ARCHITECTURE_NODES.map((node, index) => (
                            <motion.div
                                key={node.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.5 + index * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="absolute group"
                                style={{
                                    left: `${node.x}%`,
                                    top: `${node.y}%`,
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                <div className="glass-card gradient-border px-4 py-3 md:px-6 md:py-4 text-center min-w-[100px] md:min-w-[140px] cursor-default hover:!transform hover:!translate-y-[-6px]">
                                    <p className="text-xs md:text-sm font-medium text-text-primary whitespace-nowrap">
                                        {node.label}
                                    </p>
                                    <p className="text-[10px] md:text-xs text-text-tertiary mt-1 hidden md:block">
                                        {node.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Architecture principles */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                >
                    {[
                        { title: "Event-Driven", desc: "Asynchronous communication through Kafka for decoupled, resilient services." },
                        { title: "Domain Boundaries", desc: "Clear service boundaries aligned with business domains for independent scaling." },
                        { title: "Data Isolation", desc: "Each service owns its data store, preventing tight coupling and enabling polyglot persistence." },
                    ].map((principle) => (
                        <div key={principle.title} className="glass-card p-6 text-center md:text-left">
                            <h4 className="text-sm font-semibold text-accent-primary mb-2">
                                {principle.title}
                            </h4>
                            <p className="text-body-sm text-text-secondary">
                                {principle.desc}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
