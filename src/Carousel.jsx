import React, { useState } from "react";
import "./styles.css";

// Importar imágenes desde assets
import imagen1 from "./assets/ambar.jpg";
import imagen2 from "./assets/ambar2.jpg";
import imagen3 from "./assets/ambar3.jpg";

const images = [imagen1, imagen2, imagen3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlide = (step) => {
    const newIndex = currentIndex + step;
    if (newIndex < 0) {
      setCurrentIndex(images.length - 1); // Ir a la última imagen si estás en la primera
    } else if (newIndex >= images.length) {
      setCurrentIndex(0); // Volver a la primera imagen si estás en la última
    } else {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="container">
   
      <div className="carousel">
        <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
        <div className="carousel-container">
          <img className="carousel-slide" src={images[currentIndex]} alt="Gato" />
        </div>
        <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentIndex === index ? "active" : ""}`} 
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      <footer>
        <p>Gatos Only © 2025 | Diseñado con ❤️ por <b>Tu Nombre</b></p>
      </footer>
    </div>
  );
};

export default Carousel;
