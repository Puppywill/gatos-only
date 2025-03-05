import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/galeria" element={<h1>Galería de Gatos</h1>} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
      </Routes>

     
    </Router>
  );
}

export default App;
