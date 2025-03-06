import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Gallery from "./Gallery";
import Contact from "./Contact"; // Importamos la página de contacto
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <footer>
        <p>Gatos Only © 2025 | Diseñado con ❤️ por <b>Tu Nombre</b></p>
      </footer>
    </Router>
  );
}

export default App;
