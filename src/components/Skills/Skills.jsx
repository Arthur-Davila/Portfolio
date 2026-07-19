import React from "react";
import "./Skills.css";

function Skills() {
  const skillsList = [
    "JavaScript",
    "React",
    "Python",
    "Flask",
    "Docker",
    "Git",
    "Linux",
    "Arduino"
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">SKILLS</h2>
      
      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <React.Fragment key={index}>
            <span className="skill-divider">
               
                ✦
              </span>
            <span className="skill-item">{skill}</span>
            
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Skills;