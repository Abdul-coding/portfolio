import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import BackgroundNetwork from "./components/BackgroundNetwork";

export default function App() {
  return (
    <div className="min-h-screen bg-ink relative">
      <BackgroundNetwork />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </main>
        <Contact />
      </div>
    </div>
  );
}
