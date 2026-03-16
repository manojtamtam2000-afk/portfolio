"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            setIsVisible(v > 0.01);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="scroll-progress"
            style={{ scaleX }}
        />
    );
}
