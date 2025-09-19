import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-container">
      <h2 className="logo"><a href="#home">Konsa</a></h2>
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "link open" : "link"}>
        <li><a href="#home" onClick={closeMenu}>Accueil</a></li>
        <li><a href="#about" onClick={closeMenu}>À propos</a></li>
        <li><a href="#skills" onClick={closeMenu}>Compétences</a></li>
        <li><a href="#projects" onClick={closeMenu}>Portfolio</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </header>
  );
};

export default Header;
