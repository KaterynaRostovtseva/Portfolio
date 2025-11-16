import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";

export default function Home() {
    return (
        <>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contacts">
                <Contact />
            </section>
        </>
    );
}