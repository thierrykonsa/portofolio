import React, { useState } from "react";


function Header (){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () =>{
        setMenuOpen(false);
    }


    
  return (
    <header className="nav-container">
        <h2 className="logo">
            <a href="#home">konsa</a>
        </h2>
         {/* Bouton hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

        <ul className={menuOpen ? "link open" : "link"}>
            <li><a href="#Home" onClick={closeMenu}>Accueil</a></li>
            <li><a href="#about" onClick={closeMenu}>a propos</a></li>
            <li><a href="#projects" onClick={closeMenu}>projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>contact</a></li>

        </ul>

    </header>

);
};

export default Header;
