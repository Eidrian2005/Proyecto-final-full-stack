import React, { useState, useEffect, useContext } from 'react';
import '../styles/sidebar.css'; // Import the CSS file
import { Link } from "react-router-dom";
import { FaHeart, FaCrown } from 'react-icons/fa'; 
import { decode } from 'jwt-js-decode';
import '../styles/btnListaDeseos.css';
import { ProductContext } from './ProductContext';
const Sidebar = () => {
    const { user } = useContext(ProductContext); // Obtener el usuario desde el contexto
    const isAuthenticated = !!user; // Verificar si el usuario está autenticado
    const isAdmin = user?.descripcion === 'administrador'; // Verificar si el usuario es administrador

    return (
        <div className="sidebarA">
        <div className="contenedor">
            {/* Lista de deseados */}
            <p className="nav-item">
                <Link to="/lista_de_deseados" className="nav-link">
                    <i className="fa-solid fa-heart"></i>
                    <span className="text">Lista de deseados</span>
                </Link>
            </p>

            {/* Perfil o Login */}
            <p className="nav-item">
                <Link to={isAuthenticated ? "/Perfil" : "/Login"} className="nav-link">
                    <i className={`fa-solid ${isAuthenticated ? 'fa-user' : 'fa-sign-in-alt'}`}></i>
                    <span className="text">{isAuthenticated ? 'Perfil' : 'Login'}</span>
                </Link>
            </p>

            {/* Carrito */}
            <p className="nav-item cart">
                <Link to="/carrito" className="nav-link">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="text">Carrito</span>
                </Link>
            </p>

            {/* Botón para Administrador */}
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
