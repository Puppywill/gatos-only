import React from "react";
import "./Gallery.css"; // Asegúrate de que este archivo existe

// Importar imágenes desde assets
import img1 from "./assets/ambarcita.jpg";
import img2 from "./assets/perla.jpg";
import img3 from "./assets/luna.jpg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">🐾 Nuestra Galería de Gatos 🐱</h1>

      <div className="gallery">
        {/* Imagen 1 */}
        <div className="gallery-item">
          <img src={img1} alt="Ambar" className="gallery-img" />
          <h3>Ambar</h3>
          <p>Una gata curiosa y cariñosa.</p>
        </div>

        {/* Imagen 2 */}
        <div className="gallery-item">
          <img src={img2} alt="Perla" className="gallery-img" />
          <h3>Perla</h3>
          <p>Una gata cobarde y no le gusta socializar.</p>
        </div>

        {/* Imagen 3 */}
        <div className="gallery-item">
          <img src={img3} alt="Luna" className="gallery-img" />
          <h3>Luna</h3>
          <p>Es una gata tranquila y observadora.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
