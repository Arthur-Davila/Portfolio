import React from "react";
import "./Projects.css";

function Projects() {
  const projectsList = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 18L22 12L16 6M8 6L2 12L8 18" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Sistema de Cardápio Inteligente",
      description: "Sistema que ajusta pratos disponíveis conforme o estoque obtido por sensores.",
      techs: ["Python", "Flask", "Arduino"]
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <line x1="12" y1="8" x2="6.5" y2="16.5" />
          <line x1="12" y1="8" x2="17.5" y2="16.5" />
        </svg>
      ),
      title: "Pesquisa em NAS",
      description: "Pesquisa científica sobre Neural Architecture Search utilizando algoritmos evolutivos.",
      techs: ["Python"]
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Mini E-commerce Distribuído",
      description: "Arquitetura de microserviços com API Gateway, comunicação entre serviços e replicação.",
      techs: ["Docker", "Flask", "REST"]
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="1" y1="21" x2="23" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Portfólio",
      description: "Este próprio portfólio desenvolvido com React, Vite e animações em CSS.",
      techs: ["React", "Vite", "CSS"]
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">projetos</h2>
      
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-techs">
              {project.techs.map((tech, i) => (
                <span key={i}>
                  {tech}
                  {i < project.techs.length - 1 && " · "}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <a href="https://github.com/arthurdavila" target="_blank" rel="noreferrer" className="github-link">
        ver todos no github <span>→</span>
      </a>
    </section>
  );
}

export default Projects;