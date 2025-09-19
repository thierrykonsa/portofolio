import React from "react";
import skillImage from "../assets/react.png";

const skills = [
  { name: "HTML", percent: "****" },
  { name: "CSS", percent: "****" },
  { name: "JavaScript", percent: "***" },
  { name: "React js", percent: "****" },
];

const Skills = () => {
  return (
    <section className="skillpage" id="skills">
      <div className="skillsection">
        <h3 className="titre">Compétences techniques</h3>
        <p className="paragraphe">*</p>
        {skills.map((skill, index) => (
          <div key={index} className="card">
            <h3 className="compétence">{skill.name}</h3>
            <p className="pourcentage">{skill.percent}</p>
          </div>
        ))}
      </div>
      <div className="skillimage">
        <img src={skillImage} alt="Skills Illustration" />
      </div>
    </section>
  );
};

export default Skills;
