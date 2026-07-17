import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="text-contact">

          <h2>vamos conversar?</h2>
          <p>
            Estou em busca de novas oportunidades.<br />
            Se tiver um projeto legal ou uma vaga,<br />
            ficarei feliz em conversar!
          </p>
          </div>
        {/* Lado Esquerdo: Textos de chamada e Links de rede social */}
        <div className="contact-info">
          
          <div className="contact-links">
            <a href="mailto:arthurad.profissional@gmail.com" className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-icon">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              arthurad.profissional@gmail.com
            </a>

            <a href="https://github.com/arthur-davila" target="_blank" rel="noreferrer" className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-icon">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              github.com/arthur-davila
            </a>

            <a href="https://www.linkedin.com/in/arthuradavila/" target="_blank" rel="noreferrer" className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-icon">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
             linkedin.com/in/arthuradavila/
            </a>
          </div>

        </div>

                  {/* Lado Direito: Ilustração do Pinheiro */}
        <div className="contact-illustration">
          <svg viewBox="0 0 100 120" className="tree-svg">
            {/* Linha do horizonte */}
            <path d="M0 110 Q 50 105 100 110" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
            {/* Tronco */}
            <rect x="48" y="90" width="4" height="20" fill="rgba(255,255,255,0.15)" />
            {/* Copas do Pinheiro */}
            <polygon points="50,20 30,50 70,50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
            <polygon points="50,40 25,75 75,75" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
            <polygon points="50,65 20,100 80,100" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
          </svg>
        </div>

      </div>

    </section>
  );
}

export default Contact;