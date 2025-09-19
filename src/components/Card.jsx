import React from "react";

const Card = ({ title, subtitle, image, link }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
          Voir projet
        </a>
      )}
    </div>
  );
};

export default Card;
