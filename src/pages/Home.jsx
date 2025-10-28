import React from "react";
import photo from "../assets/moi.jpg";
import Button from "../components/Button";

const Home = () => {
  return (
    <section className="homepage" id="home">
      <div className="home-container">
        <div className="details">
          <p className="paragraphe">
            Salut,<br />
            Je suis <label>Thierry</label><br />
            Développeur <br /> Front-End
          </p>
          <Button text="Contactez-moi" link="https://wa.me/qr/AQGUZJJRSPT7D1" />
        </div>
        <div className="image">
          <img src={photo} alt="Portrait Thierry" />
        </div>
      </div>
    </section>
  );
};

export default Home;
