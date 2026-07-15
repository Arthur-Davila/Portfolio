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
      <h2 className="skills-title">skills</h2>
      
      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <React.Fragment key={index}>
            <span className="skill-item">{skill}</span>
            {index < skillsList.length - 1 && <span className="skill-divider">♦</span>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Skills;