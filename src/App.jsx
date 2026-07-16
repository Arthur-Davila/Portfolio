import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ShootingStars from "./components/ShootingStars/ShootingStars";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <main className="background">
      <section className="hero" id="home"
    >
        <ShootingStars />
        <Navbar />

        <div className="hero-content">
          <h1>
            Transformo
            <br />
            ideias em
            <br />
            <span>soluções.</span>
          </h1>
          <p className="description">
            Estudante de Ciência da Computação apaixonado por desenvolvimento de
            software, tecnologia e resolução de problemas.
          </p>

          <a href="#projects" className="hero-link">
            ver projetos
            <span>→</span>
          </a>
        </div>
      </section>

      <About />
      <Projects />

      <Skills />
      <Contact />

    </main>
  );
}

export default App;
