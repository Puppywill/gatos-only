import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Gallery from "./Gallery"; // Importa la Galería

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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
