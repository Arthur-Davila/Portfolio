import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span>AD</span>

        <p>Arthur D'Ávila</p>
      </div>

      <nav>
        <a href="#about">sobre</a>
        <a href="#projects">projetos</a>
        <a href="#skills">skills</a>
        <a href="#contact">contato</a>
      </nav>
    </header>
  );
}

export default Navbar;
