"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG, NAV_LINKS } from "@/app/constants";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-nav" : "bg-transparent"
                    }`}
            >
                <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="#"
                        className="group relative text-lg font-bold tracking-tight text-text-primary hover:opacity-80 transition-opacity"
                    >
                        <span className="relative z-10">{SITE_CONFIG.initials}</span>
                        <span className="absolute -inset-2 rounded-lg bg-accent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.href} href={link.href} label={link.label} />
                        ))}
                        <div className="w-[1px] h-5 bg-surface-border" />
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Buttons */}
                    <div className="flex md:hidden items-center gap-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative w-6 h-5 flex flex-col justify-between"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                className="block h-[1.5px] w-full bg-text-primary origin-center transition-colors"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                className="block h-[1.5px] w-full bg-text-primary transition-colors"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                className="block h-[1.5px] w-full bg-text-primary origin-center transition-colors"
                            />
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 glass-nav flex items-center justify-center"
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="flex flex-col items-center gap-8"
                        >
                            {NAV_LINKS.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 + i * 0.05 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-light text-text-primary hover:text-accent-primary transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <a
            href={href}
            className="group relative text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
        >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full transition-all duration-300 group-hover:w-full" />
        </a>
    );
}
