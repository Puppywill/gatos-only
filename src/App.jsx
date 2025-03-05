import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Gallery from "./Gallery"; // Importamos la Galería

import "./styles.css";

function Home() {
  return <Carousel />;
}

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar SIEMPRE visible en TODAS las páginas */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
      </Routes>

      {/* Footer visible en todas las páginas */}
      <footer>
        <p>Gatos Only © 2025 | Diseñado con ❤️ por <b>Tu Nombre</b></p>
      </footer>
    </Router>
  );
}

export default App;
