import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span>AD</span>

        <p>Arthur D'Ávila</p>
      </div>

      <nav>
        <a href="#about">SOBRE</a>
        <a href="#projects">PROJETOS</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTATO</a>
      </nav>
    </header>
  );
}

export default Navbar;
