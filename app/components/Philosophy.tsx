"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PHILOSOPHY_CONTENT } from "@/app/constants";

export default function Philosophy() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-section relative" id="about">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                >
                    <span className="section-label block">Philosophy</span>
                </motion.div>

                <motion.blockquote
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-display-sm font-light text-text-primary leading-relaxed"
                >
                    <span className="text-accent-primary">&ldquo;</span>
                    {PHILOSOPHY_CONTENT.statement}
                    <span className="text-accent-primary">&rdquo;</span>
                </motion.blockquote>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 text-body-lg text-text-secondary max-w-3xl"
                >
                    {PHILOSOPHY_CONTENT.supporting}
                </motion.p>

                {/* Decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-16 h-[1px] origin-left"
                    style={{ background: 'var(--divider-gradient)' }}
                />
            </div>
        </section>
    );
}
