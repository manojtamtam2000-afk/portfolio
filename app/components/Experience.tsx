"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCE_TIMELINE } from "@/app/constants";

export default function Experience() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-section relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="section-label block">Journey</span>
                    <h2 className="text-display-md font-semibold text-text-primary">
                        Experience
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] origin-top md:-translate-x-1/2"
                        style={{
                            background: `linear-gradient(180deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, transparent 100%)`,
                            opacity: 0.3,
                        }}
                    />

                    <div className="space-y-16">
                        {EXPERIENCE_TIMELINE.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.3 + index * 0.2,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className={`relative flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Year dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 z-10">
                                    <div className="w-3 h-3 rounded-full border-2 border-accent-primary"
                                        style={{ backgroundColor: 'var(--surface-primary)' }}
                                    />
                                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent-primary animate-ping opacity-20" />
                                </div>

                                {/* Content */}
                                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                                    }`}>
                                    <span className="tech-tag">{item.year}</span>
                                    <h3 className="mt-3 text-xl font-semibold text-text-primary">
                                        {item.role}
                                    </h3>
                                    <p className="mt-1 text-body-sm text-accent-primary font-medium">
                                        {item.company}
                                    </p>
                                    <p className="mt-3 text-body-sm text-text-tertiary leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Spacer for alignment */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
