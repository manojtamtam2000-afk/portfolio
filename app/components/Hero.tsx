"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_CONTENT } from "@/app/constants";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const fadeUpItem = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            id="hero"
        >
            {/* Aurora Background Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="aurora-orb aurora-orb-1" />
                <div className="aurora-orb aurora-orb-2" />
                <div className="aurora-orb aurora-orb-3" />
            </div>

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.015]"
                style={{
                    backgroundImage: `linear-gradient(var(--text-tertiary) 1px, transparent 1px), linear-gradient(90deg, var(--text-tertiary) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
            >
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Status Badge */}
                    <motion.div
                        variants={fadeUpItem}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-glow-strong bg-accent-glow mb-8"
                    >
                        <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
                        </div>
                        <span className="text-xs font-medium text-text-secondary tracking-wide">Available for New Opportunities</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={fadeUpItem}
                        className="text-display-xl font-bold tracking-tight mb-6"
                    >
                        <span className="text-gradient-hero">{HERO_CONTENT.headline[0]}</span>
                    </motion.h1>

                    {/* Taglines */}
                    {HERO_CONTENT.taglines.map((tagline, i) => (
                        <motion.p
                            key={i}
                            variants={fadeUpItem}
                            className="text-display-md font-light text-text-secondary mb-2"
                        >
                            {tagline}
                        </motion.p>
                    ))}

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUpItem}
                        className="mt-8 text-body-lg text-text-tertiary max-w-2xl mx-auto leading-relaxed"
                    >
                        {HERO_CONTENT.subtitle}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeUpItem}
                        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <MagneticButton>
                            <a href={HERO_CONTENT.cta.primary.href} className="premium-btn premium-btn-primary">
                                {HERO_CONTENT.cta.primary.label}
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a href={HERO_CONTENT.cta.secondary.href} className="premium-btn premium-btn-secondary">
                                {HERO_CONTENT.cta.secondary.label}
                            </a>
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 border border-surface-border-hover rounded-full flex items-start justify-center p-1.5"
                >
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-1.5 bg-accent-primary rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = "translate(0px, 0px)";
        ref.current.style.transition = "transform 0.3s ease-out";
    };

    const handleMouseEnter = () => {
        if (!ref.current) return;
        ref.current.style.transition = "none";
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            {children}
        </div>
    );
}
