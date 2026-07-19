import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ShootingStars from "./components/ShootingStars/ShootingStars";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero.jsx";

function App() {
  return (
    <main className="background">
      <section className="hero" id="home">
        <ShootingStars />
        
        {/* OVERLAY SIMPLES */}
        <div className="hero-overlay"></div>
        
        <Navbar />
        <Hero />
      
      </section>

      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;