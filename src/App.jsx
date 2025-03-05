import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Gallery from "./Gallery"; // Importamos la Galería
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/galeria" element={<Gallery />} />
      </Routes>

      <footer>
        <p>Gatos Only © 2025 | Diseñado con ❤️ por <b>Tu Nombre</b></p>
      </footer>
    </Router>
  );
}

export default App;
