import React, { useContext, useState } from 'react';
import { Post_auth } from '../services/Postauth';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/FormLogin.css";
import { ProductContext } from './ProductContext';
import { decode } from 'jwt-js-decode';
import Cookies from 'js-cookie';
import logoTipo from "../img/logo.png";

function FormLogin() {
  const { login } = useContext(ProductContext); // Accedemos a la función de login del contexto
  const navigate = useNavigate(); // Para redirigir a otras páginas
  const [usuario, setUsername] = useState(''); // Guardamos el nombre de usuario
  const [contraseña, setPassword] = useState(''); // Guardamos la contraseña

  // Funciones para actualizar los valores del usuario y contraseña
  const cargaUsuario = (event) => setUsername(event.target.value);
  const cargaContra = (event) => setPassword(event.target.value);

  // Función que se ejecuta al enviar el formulario
  const cargar = async (e) => {
    e.preventDefault(); // Evitamos que la página se recargue

    try {
      // Llamamos al servicio de autenticación con usuario y contraseña
      const dataToken = await Post_auth(usuario, contraseña);
      if (dataToken && dataToken.token) {
        const { payload } = decode(dataToken.token); // Decodificamos el token para obtener el rol del usuario
        const rol = payload.descripcion; // Obtenemos el rol (administrador o usuario normal)

        toast.success("Bienvenido", { autoClose: 700 }); // Mostramos un mensajito de éxito

        // Guardamos el token en las cookies para mantener la sesión activa
        Cookies.set("token", dataToken.token, { expires: 7, secure: true });

        // Redirigimos según el rol del usuario
        setTimeout(() => {
          if (rol === "administrador") {
            navigate("/AdminTask"); // Si es admin, va a la página de admin
          } else {
            navigate("/"); // Si no, va a la página principal
          }
        }, 1000);

        // Guardamos los datos del login en el contexto
        login({ descripcion: rol, token: dataToken.token });
      } else {
        toast.warning("Usuario o contraseña incorrectos"); // Si los datos están mal, mostramos un aviso
      }
    } catch (error) {
      console.error("Error al autenticar:", error); // Mostramos el error en consola
      toast.error("Ocurrió un error al iniciar sesión"); // Avisamos al usuario que algo salió mal
    }
  };

  return (
    <div className='bodyLogin'>
      <div className="container2">
        {/* Logo del formulario */}
        <div className="form-login-logo-section">
          <img className="form-login-logo" src={logoTipo} alt="Logo" />
        </div>

        <div className="panel">
          <h2>Login</h2>
          <div>
            {/* Formulario de login */}
            <form onSubmit={cargar} id="registroCuenta">
              <div className="form-grupo">
                <label htmlFor="usuario1" className="form-label">Nombre:</label>
                <input 
                  className="estilosInput" 
                  type="text" 
                  id="usuario1" 
                  value={usuario} 
                  placeholder='Ingrese su nombre' 
                  onChange={cargaUsuario} 
                  required 
                />
              </div>

              <div className="form-grupo">
                <label htmlFor="Password1" className="">Contraseña:</label>
                <input 
                  className="estilosInput" 
                  type="password" 
                  id="Password1" 
                  name="password" 
                  value={contraseña} 
                  placeholder='Ingrese contraseña' 
                  onChange={cargaContra} 
                  required 
                />
              </div>

              {/* Botón para iniciar sesión */}
              <button className="btnestilo" type='submit' id="guardar">iniciar sesión</button>

              <br />
              {/* Enlace para registrarse si no tienen cuenta */}
              <p>¿No tienes cuenta? <Link to="/Register">Crea una</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;