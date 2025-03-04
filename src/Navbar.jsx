

import React from "react";
import { Link } from "react-router-dom"; // 👈 Importa Link
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🐱 Gatos Only</div>
      <ul className="nav-links">
        <li><Link to="./App">Inicio</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
