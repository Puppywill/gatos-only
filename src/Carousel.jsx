import React, { useState } from "react";
import "./styles.css";

// Importar imágenes desde assets
import imagen1 from "./assets/ambar.jpg";
import imagen2 from "./assets/ambar2.jpg";
import imagen3 from "./assets/ambar3.jpg";

const images = [imagen1, imagen2, imagen3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para mover el slide
  const moveSlide = (step) => {
    setCurrentIndex((prevIndex) => (prevIndex + step + images.length) % images.length);
  };

  return (
    <div className="container">
      {/* Carrusel */}
      <div className="carousel">
        <button className="prev" onClick={() => moveSlide(-1)} aria-label="Imagen anterior">
          &#10094;
        </button>
        <div className="carousel-container">
          <img className="carousel-slide" src={images[currentIndex]} alt={`Gato ${currentIndex + 1}`} />
        </div>
        <button className="next" onClick={() => moveSlide(1)} aria-label="Imagen siguiente">
          &#10095;
        </button>
      </div>

      {/* Indicadores */}
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>


   
      

    </div>
  );
};

export default Carousel;
