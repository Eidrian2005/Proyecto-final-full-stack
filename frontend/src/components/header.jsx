import React from "react";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import logoTipo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };

  // Función para cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirigir a la página de inicio
  };

  return (
    <header className="header">
      <img className="image" src={logoTipo} alt="Logo" />
      <nav className="nav">
        <ul className="nav-list">
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
        <button onClick={cerrarSesion} className="logout-button">
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

export default Header;
