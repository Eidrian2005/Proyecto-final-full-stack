import React, { useState } from 'react';
import { Post_clientes } from '../services/PostClientes';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/registro.css'; // Importa los estilos

function FormRegister() {
  const navigate = useNavigate();
  const [usuario, setUsername] = useState('');
  const [correo, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');

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

  const cargar = (e) => {
    e.preventDefault();
    console.log('Valores a enviar:', {
      direccion,
      usuario,
      correo,
      contraseña,
    });
    Post_clientes(direccion, '', usuario, correo, contraseña);
    navigate('/Login');
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

            <button className="form-register-button" type="submit">Crear cuenta</button>

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
