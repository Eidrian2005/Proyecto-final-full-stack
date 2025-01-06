import React, { useState } from 'react';
import { Post_clientes } from '../services/PostClientes'; // Importamos la función para registrar un cliente
import { Link, useNavigate } from 'react-router-dom'; // Para la navegación entre páginas
import '../styles/registro.css'; // Estilos personalizados para el formulario

function FormRegister() {
  const navigate = useNavigate(); // Hook para redirigir después de enviar el formulario
  const [usuario, setUsername] = useState(''); // Estado para el nombre del usuario
  const [correo, setEmail] = useState(''); // Estado para el correo
  const [contraseña, setPassword] = useState(''); // Estado para la contraseña
  const [direccion, setDireccion] = useState(''); // Estado para la dirección

  // Funciones para manejar los cambios en los inputs
  const cargarDireccion = (event) => {
    setDireccion(event.target.value);
  };
  const cargaUsuario = (event) => {
    setUsername(event.target.value);
  };
  const cargaEmail = (event) => {
    setEmail(event.target.value);
  };
  const cargaContra = (event) => {
    setPassword(event.target.value);
  };

  // Función para manejar el envío del formulario
  const cargar = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario (recargar la página)
    console.log('Valores a enviar:', { direccion, usuario, correo, contraseña });
    Post_clientes(direccion, '', usuario, correo, contraseña); // Enviamos los datos del formulario al servidor
    navigate('/Login'); // Redirigimos al usuario a la página de login después de registrarse
  };

  return (
    <div className="form-register-container">
      <div className="form-register-wrapper">
        {/* Sección izquierda: Logo */}
        <div className="form-register-logo-section">
          <img
            className="form-register-logo"
            src="../img/logo.png"
            alt="Logo"
          />
        </div>

        {/* Sección derecha: Formulario */}
        <div className="form-register-form-section">
          <h2 className="form-register-title">Registro</h2>

          <form onSubmit={cargar}>
            {/* Campo para el nombre */}
            <div className="form-group">
              <label htmlFor="usuario" className="form-label">Nombre:</label>
              <input
                className="form-input"
                type="text"
                id="usuario"
                value={usuario}
                placeholder="Ingrese su nombre"
                onChange={cargaUsuario}
                required
              />
            </div>

            {/* Campo para el correo electrónico */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Correo electrónico:</label>
              <input
                className="form-input"
                type="email"
                id="email"
                value={correo}
                placeholder="Ingrese su correo electrónico"
                onChange={cargaEmail}
                required
              />
            </div>

            {/* Campo para la dirección */}
            <div className="form-group">
              <label htmlFor="direccion" className="form-label">Dirección:</label>
              <input
                className="form-input"
                type="text"
                id="direccion"
                value={direccion}
                placeholder="Ingrese su dirección"
                onChange={cargarDireccion}
                required
              />
            </div>

            {/* Campo para la contraseña */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Contraseña:</label>
              <input
                className="form-input"
                type="password"
                id="password"
                value={contraseña}
                placeholder="Ingrese su contraseña"
                onChange={cargaContra}
                required
              />
            </div>

            {/* Botón para enviar el formulario */}
            <button className="form-register-button" type="submit">Crear cuenta</button>

            {/* Enlace para redirigir a la página de login si ya tiene cuenta */}
            <p className="form-register-login">
              ¿Ya tienes cuenta? <Link to="/Login">Inicia Sesión</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
