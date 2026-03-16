import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                surface: {
                    primary: "var(--surface-primary)",
                    secondary: "var(--surface-secondary)",
                    tertiary: "var(--surface-tertiary)",
                    border: "var(--surface-border)",
                    "border-hover": "var(--surface-border-hover)",
                },
                text: {
                    primary: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                    tertiary: "var(--text-tertiary)",
                },
                accent: {
                    primary: "var(--accent-primary)",
                    secondary: "var(--accent-secondary)",
                    glow: "var(--accent-glow)",
                    "glow-strong": "var(--accent-glow-strong)",
                },
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
            fontSize: {
                "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
                "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
                "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
                "display-sm": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
                "body-lg": ["1.125rem", { lineHeight: "1.7" }],
                "body-md": ["1rem", { lineHeight: "1.7" }],
                "body-sm": ["0.875rem", { lineHeight: "1.6" }],
                "label": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
            },
            spacing: {
                "section": "clamp(6rem, 12vh, 10rem)",
                "section-sm": "clamp(4rem, 8vh, 6rem)",
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.5rem",
            },
            backdropBlur: {
                "xs": "2px",
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "fade-up": "fadeUp 0.8s ease-out forwards",
                "slide-in": "slideIn 0.6s ease-out forwards",
                "glow-pulse": "glowPulse 4s ease-in-out infinite",
                "gradient-shift": "gradientShift 8s ease-in-out infinite",
                "float": "float 6s ease-in-out infinite",
                "scroll-indicator": "scrollIndicator 2s ease-in-out infinite",
                "shimmer": "shimmer 2.5s ease-in-out infinite",
                "aurora": "aurora 15s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideIn: {
                    "0%": { opacity: "0", transform: "translateX(-20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                glowPulse: {
                    "0%, 100%": { opacity: "0.4" },
                    "50%": { opacity: "0.8" },
                },
                gradientShift: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                scrollIndicator: {
                    "0%": { opacity: "1", transform: "translateY(0)" },
                    "50%": { opacity: "0.5", transform: "translateY(8px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                aurora: {
                    "0%, 100%": { transform: "translate(0, 0) rotate(0deg) scale(1)" },
                    "25%": { transform: "translate(30px, -20px) rotate(3deg) scale(1.05)" },
                    "50%": { transform: "translate(-20px, 20px) rotate(-2deg) scale(0.95)" },
                    "75%": { transform: "translate(10px, 10px) rotate(1deg) scale(1.02)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
