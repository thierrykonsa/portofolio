import React from "react";

// Import des images des projets
import acard from "../assets/coursci.png";
import phen from "../assets/pheniciapc.png"


// Liste des projets avec nom, lien et description
const projects = [
  {
    name: "COURSA",
    img: acard,
    link: "https://coursaci.netlify.app/",
    desc: "librairie de resumé d'oeuvres littéraire."
  },
  {
    name: "PHENICIA",
    img:phen,
    link:"https://phenicia.ci/",
    desc:"le sociéte la plus pro de la decoration",
  }
  
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
