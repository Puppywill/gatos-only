import React from "react";
import "./Gallery.css"; // Importamos los estilos

// Importar imágenes desde assets
import img1 from "./assets/ambarcita.jpg";
import img2 from "./assets/perla.jpg";
import img3 from "./assets/luna.jpg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">🐾 Nuestra Galería de Gatos 🐱</h1>

      <div className="gallery">
        <div className="gallery-item">
          <img src={img1} alt="Ambar" />
          <h3>Ambar</h3>
          <p>Una gata curiosa y cariñosa.</p>
        </div>

        <div className="gallery-item">
          <img src={img2} alt="Perla" />
          <h3>Perla</h3>
          <p>Una gata cobarde y no le gusta socializar.</p>
        </div>

        <div className="gallery-item">
          <img src={img3} alt="Luna" />
          <h3>Luna</h3>
          <p>Es una gata tranquila y observadora.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
