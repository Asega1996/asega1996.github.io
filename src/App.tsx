import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useRef } from "react";
import { TechStack } from "./components/TechStack";

export const App = () => {
  const parallax = useRef<any>(null);

  const scrollToSection = (index: number) => {
    const sectionIds = ["Hero", "About", "TechStack", "Experience", "Projects", "Contact"];
    const el = document.getElementById(sectionIds[index]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />

      {/* Parallax solo para Hero */}
      <Parallax ref={parallax} pages={1}>
        <ParallaxLayer
          offset={0}
          speed={0.3}
          factor={1}
          style={{
            background: "linear-gradient(127deg, #0d1e38ff, #172b4dff, #394e72ff)",
          }}
        />
        <ParallaxLayer offset={0} speed={0}>
          <Hero />
        </ParallaxLayer>
      </Parallax>

      <div style={{ height: "100vh" }} />

      {/* Secciones normales */}
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};
