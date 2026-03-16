"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SITE_CONFIG } from "@/app/constants";

export default function Contact() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // UI-only form — no backend
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormState({ name: "", email: "", message: "" });
    };

    return (
        <section ref={ref} className="py-section relative" id="contact">
            {/* Background aurora */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="aurora-orb aurora-orb-2" style={{ bottom: '-300px', left: '-100px' }} />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="section-label block">Get In Touch</span>
                    <h2 className="text-display-md font-semibold text-text-primary">
                        Let&apos;s Work Together
                    </h2>
                    <p className="mt-4 text-body-lg text-text-secondary max-w-2xl mx-auto">
                        Have a project in mind or want to discuss an opportunity?
                        I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="contact-name"
                                        className="text-body-sm text-text-secondary font-medium"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        value={formState.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="premium-input"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="contact-email"
                                        className="text-body-sm text-text-secondary font-medium"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="premium-input"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="contact-message"
                                    className="text-body-sm text-text-secondary font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    rows={6}
                                    className="premium-input resize-none"
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="premium-btn premium-btn-primary w-full sm:w-auto relative overflow-hidden"
                            >
                                {isSubmitted ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Message Sent
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Send Message
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </span>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Direct Contact */}
                        <div className="glass-card gradient-border p-8 space-y-6">
                            <h3 className="text-lg font-semibold text-text-primary">Direct Contact</h3>

                            <div className="space-y-4">
                                <a
                                    href={`mailto:${SITE_CONFIG.email}`}
                                    className="group flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors duration-300"
                                >
                                    <div className="icon-container w-10 h-10 rounded-xl">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-body-sm font-medium">Email</p>
                                        <p className="text-body-sm text-text-tertiary">{SITE_CONFIG.email}</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card gradient-border p-8 space-y-6">
                            <h3 className="text-lg font-semibold text-text-primary">Connect</h3>

                            <div className="space-y-4">
                                <a
                                    href={SITE_CONFIG.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors duration-300"
                                >
                                    <div className="icon-container w-10 h-10 rounded-xl">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-body-sm font-medium">GitHub</p>
                                        <p className="text-body-sm text-text-tertiary">@manojnaidu</p>
                                    </div>
                                </a>

                                <a
                                    href={SITE_CONFIG.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors duration-300"
                                >
                                    <div className="icon-container w-10 h-10 rounded-xl">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-body-sm font-medium">LinkedIn</p>
                                        <p className="text-body-sm text-text-tertiary">Manoj Naidu</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Availability indicator */}
                        <div className="glass-card p-6">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75" />
                                </div>
                                <span className="text-body-sm text-text-secondary">
                                    Available for new opportunities
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
