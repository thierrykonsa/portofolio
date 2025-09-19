import React from "react";
import aboutPhoto from "../assets/moi.jpg";

const About = () => {
  return (
    <section className="aboutpage" id="about">
      <div className="aboutimage">
        <img src={aboutPhoto} alt="Thierry" />
      </div>
      <div className="aboutdescription">
        <h4 className="titre">Le "Partenaire de Croissance"</h4>
        <p className="paragraphe">
          <em>
            Un site web est bien plus qu'une vitrine ; c'est un outil stratégique essentiel.
            En tant que Développeur Web, je collabore avec mes clients pour comprendre leurs
            objectifs et les traduire en solutions techniques efficaces. Chaque décision
            technique vise à apporter une valeur ajoutée au projet.
          </em>
        </p>
      </div>
    </section>
  );
};

export default About;
