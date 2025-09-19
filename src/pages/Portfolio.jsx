import React from "react";

// Import des images des projets
import acard from "../assets/coursci.png";


// Liste des projets avec nom, lien et description
const projects = [
  {
    name: "COURSA",
    img: acard,
    link: "http://localhost:5173/",
    desc: "librairie de resumé d'oeuvres littéraire."
  },
  
];

const Portfolio = () => {
  return (
    <section className="picturepage" id="projects">
      <h3 className="titre">Mes Projets</h3>
      <div className="pc">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h4 className="project-name">{project.name}</h4>
            <p className="project-desc">{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.name} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
