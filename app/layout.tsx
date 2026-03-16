import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/app/constants";
import { SmoothScrollProvider } from "@/app/components/SmoothScrollProvider";
import { ScrollProgress } from "@/app/components/ScrollProgress";
import { ThemeProvider } from "@/app/components/ThemeProvider";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-geist-sans",
});

export const metadata: Metadata = {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    keywords: [
        "Full Stack Developer",
        "Microservices Architect",
        "Distributed Systems",
        "Software Engineer",
        "React",
        "Next.js",
        "Spring Boot",
        "Kafka",
        "TypeScript",
    ],
    authors: [{ name: SITE_CONFIG.name }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_CONFIG.url,
        siteName: SITE_CONFIG.name,
        title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
        description: SITE_CONFIG.description,
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
        description: SITE_CONFIG.description,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
            <body className="font-sans antialiased">
                <ThemeProvider>
                    <SmoothScrollProvider>
                        <ScrollProgress />
                        <div className="noise-overlay" aria-hidden="true" />
                        {children}
                    </SmoothScrollProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
