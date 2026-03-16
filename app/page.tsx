import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Philosophy from "@/app/components/Philosophy";
import Expertise from "@/app/components/Expertise";
import Architecture from "@/app/components/Architecture";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Philosophy />
                <Expertise />
                <Projects />
                <Architecture />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
