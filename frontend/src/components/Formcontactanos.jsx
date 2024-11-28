import React from 'react';
import '../styles/contactanos.css'; // Archivo CSS para estilos

const FormContactanos = () => {
  return (
    <div className="contact-container">
      {/* Sección de encabezado */}
      <div className="contact-header">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte. Por favor, completa el formulario a continuación.</p>
      </div>

      {/* Información de contacto */}
      <div className="contact-info">
        <p><strong>Teléfono:</strong> +123 456 7890</p>
        <p><strong>WhatsApp:</strong> +123 456 7891</p>
        <p><strong>Correo Electrónico:</strong> contacto@ejemplo.com</p>
      </div>

      {/* Formulario de contacto */}
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" placeholder="Ingresa tu correo" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" placeholder="Escribe tu mensaje" rows="5" required></textarea>
          </div>

          <button type="submit" className="contact-submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormContactanos;
