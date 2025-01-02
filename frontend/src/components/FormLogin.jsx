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
  const { login } = useContext(ProductContext);
  const navigate = useNavigate();
  const [usuario, setUsername] = useState('');
  const [contraseña, setPassword] = useState('');

  const cargaUsuario = (event) => setUsername(event.target.value);
  const cargaContra = (event) => setPassword(event.target.value);

  const cargar = async (e) => {
    e.preventDefault();

    try {
      const dataToken = await Post_auth(usuario, contraseña);
      if (dataToken && dataToken.token) {
        const { payload } = decode(dataToken.token);
        const rol = payload.descripcion;

        toast.success("Bienvenido", { autoClose: 700 });

        Cookies.set("token", dataToken.token, { expires: 7, secure: true });

        setTimeout(() => {
          if (rol === "administrador") {
            navigate("/AdminTask");
          } else {
            navigate("/");
          }
        }, 1000);

        login({ descripcion: rol, token: dataToken.token }); // Guardamos el token y rol en el estado
      } else {
        toast.warning("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al autenticar:", error);
      toast.error("Ocurrió un error al iniciar sesión");
    }
  };

  return (
    <div className='bodyLogin'>
      <div className="container2">
        <div className="form-login-logo-section">
          <img className="form-login-logo" src={logoTipo} alt="Logo" />
        </div>

        <div className="panel">
          <h2>Login</h2>
          <div>
            <form onSubmit={cargar} id="registroCuenta">
              <div className="form-grupo">
                <label htmlFor="usuario1" className="form-label">Nombre:</label>
                <input className="estilosInput" type="text" id="usuario1" value={usuario} placeholder='Ingrese su nombre' onChange={cargaUsuario} required />
              </div>

              <div className="form-grupo">
                <label htmlFor="Password1" className="">Contraseña:</label>
                <input className="estilosInput" type="password" id="Password1" name="password" value={contraseña} placeholder='Ingrese contraseña' onChange={cargaContra} required />
              </div>

              <button className="btnestilo" type='submit' id="guardar">iniciar sesión</button>

              <br />
              <p>¿No tienes cuenta? <Link to="/Register">Crea una</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
