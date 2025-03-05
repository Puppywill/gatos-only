import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">🐱 Gatos Only</div>

      {/* Botón hamburguesa para móviles */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menú de enlaces */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
