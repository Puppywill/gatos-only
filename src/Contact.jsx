import React, { useState } from "react";
import "./Contact.css"; // Importar los estilos

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado correctamente! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>📩 Contacto</h2>
      <p>¿Tienes alguna pregunta o sugerencia? Envíanos un mensaje.</p>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Correo Electrónico</label>
        <input
          type="email"
          name="email"
          placeholder="tucorreo@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Mensaje</label>
        <textarea
          name="message"
          placeholder="Escribe tu mensaje..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        {/* 🔴 AQUÍ SE CORRIGE EL BOTÓN PARA QUE ESTÉ JUSTO DEBAJO DEL TEXTAREA */}
        <div className="button-container">
          <button type="submit">Enviar Mensaje</button>
        </div>

      </form>
    </div>
  );
};

export default Contact;
