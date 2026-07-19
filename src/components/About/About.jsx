import React from "react";
import "./About.css";
import mount from "../../assets/mount1.png";


export default function About() {
  return (
    <section id="about" className="section-timeline">
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title ">SOBRE MIM</h2>
          <p>
            Gosto de entender como as coisas funcionam e transformar isso em algo útil.
          </p>
          <p>
            Tenho interesse em <strong>desenvolvimento web, mobile, sistemas embarcados e inteligência artificial</strong>.
          </p>
          <p>
            Atualmente estudo na <strong>CESAR School</strong> e busco minha primeira oportunidade para aprender, contribuir e crescer junto com um time.
          </p>
        </div>
        <img src={mount} alt="Ilustração de montanhas sob um céu estrelado" />
              </div>
    </section>
  );
}
