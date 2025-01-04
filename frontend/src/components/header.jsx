import React from "react";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logoTipo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();

  // Función para navegar a la página de búsqueda
  const handleSearch = () => {
    navigate("/search");
  };

  // Función para cerrar sesión, elimina la cookie y redirige a login
  const cerrarSesion = () => {
    Cookies.remove("token"); // Borramos la cookie que guarda el token
    navigate("/login"); // Enviamos al login
  };

  return (
    <header className="header">
      {/* Logo */}
      <img className="image" src={logoTipo} alt="Logo" />

      {/* Navegación principal */}
      <nav className="nav">
        <ul className="nav-list">
          {/* Opciones de navegación */}
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Homepage
            </Link>
          </li>
          <li className="nav-item">
            <a onClick={handleSearch} className="nav-link" role="button">
              Search
            </a>
          </li>
          <li className="nav-item">
            <Link to="/SobreNosotros" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contactanos" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Botón para cerrar sesión */}
        <button onClick={cerrarSesion} className="logout-button">
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

export default Header;
