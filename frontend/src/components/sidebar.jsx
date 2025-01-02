import React, { useContext } from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { ProductContext } from "./ProductContext";

const Sidebar = () => {
  const { user } = useContext(ProductContext);
  const isAuthenticated = !!user; // Verificar si el usuario está autenticado
  const isAdmin = user?.descripcion === "administrador"; // Verificar si el usuario es administrador

  return (
    <div className="sidebarA">
      <div className="contenedor">
        <p className="nav-item">
          <Link to="/lista_de_deseados" className="nav-link">
            <i className="fa-solid fa-heart"></i>
            <span className="text">Lista de deseados</span>
          </Link>
        </p>

        {/* Verificar si el usuario está autenticado */}
        <p className="nav-item">
          <Link to={isAuthenticated ? "/Perfil" : "/Login"} className="nav-link">
            <i className={`fa-solid ${isAuthenticated ? "fa-user" : "fa-sign-in-alt"}`}></i>
            <span className="text">{isAuthenticated ? "Perfil" : "Login"}</span>
          </Link>
        </p>

        <p className="nav-item cart">
          <Link to="/carrito" className="nav-link">
            <i className="fas fa-shopping-cart"></i>
            <span className="text">Carrito</span>
          </Link>
        </p>

        {isAdmin && (
          <p className="nav-item admin-btn">
            <Link to="/AdminTask" className="nav-link">
              <FaCrown className="admin-icon" />
              <span className="text">Administración</span>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
