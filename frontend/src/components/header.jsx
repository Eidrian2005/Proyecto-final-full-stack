import React from "react";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import logoTipo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
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
            <a onClick={handleSearch} className="nav-link">
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
          <li className="nav-item">
            <Link to="/ListaDeseados" className="nav-link">
              Wishlist
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/IniciarSesion" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item cart">
            <Link to="/carrito" className="nav-link">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
