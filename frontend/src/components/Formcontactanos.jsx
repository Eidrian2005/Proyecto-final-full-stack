import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contactanos.css'; // Archivo CSS para estilos

const FormContactanos = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zfxonxc', 'template_kethqvk', form.current, {
        publicKey: 'vQRSOmVSKnrmyCeOG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
  return (
    <div className="contact-container">
      {/* Sección de encabezado */}
      <div className="contact-header">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte. Por favor, completa el formulario a continuación.</p>
      </div>

      {/* Información de contacto */}
      <div className="contact-info">
       
        <p><strong>WhatsApp:</strong> +506 8420 5241 </p>
        <p><strong>Correo Electrónico:</strong> shedabo82@hotmail.com</p>
      </div>

      {/* Formulario de contacto */}
      <div className="contact-form-container">
        <form className="contact-form"ref={form} onSubmit={sendEmail}>
          <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" />
          </div>

          <div className="form-group">
          <label>Email</label>
          <input type="email" name="user_email" />
          </div>

          <div className="form-group">
          <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
          </div>

          <button type="submit" className="contact-submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormContactanos;
