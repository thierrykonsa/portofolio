import React from "react";
import aboutPhoto from "../assets/abt.jpg";

const About = () => {
  return (
    <section className="aboutpage" id="about">
      <div className="aboutimage">
        <img src={aboutPhoto} alt="Thierry" />
      </div>
      <div className="aboutdescription">
        <h4 className="titre">Le "Partenaire de Croissance"</h4>
        <p className="paragraphe"> <em>
Un site web est bien plus qu'une vitrine ; c'est un outil 
stratégique essentiel. En tant que Développeur Web, je collabore
 avec mes clients pour comprendre leurs objectifs et les traduire
  en solutions techniques efficaces. Que ce soit pour améliorer l'engagement avec
   une interface dynamique en React ou pour optimiser le référencement avec un code HTML/CSS propre,
    chaque décision technique que je prends vise à apporter une valeur ajoutée et à contribuer au succès du projet.
</em>
        </p>
      </div>
    </section>
  );
};

export default About;
