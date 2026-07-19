import "../Hero/Hero.css";

function Hero() {
  return (
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
  );
}

export default Hero;