import React, { useState, useEffect } from 'react';
import '../styles/sidebar.css'; // Import the CSS file
import { Link } from "react-router-dom";
import { FaHeart, FaCrown } from 'react-icons/fa'; 
import { decode } from 'jwt-js-decode';
import '../styles/btnListaDeseos.css';

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // Comprobamos si el usuario tiene un token válido
        const token = localStorage.getItem('token');
        const authenticated = localStorage.getItem('Autenticado') === 'true';
        let rol = '';

        if (token) {
            try {
                // Decodifica el token para obtener el rol
                const { payload } = decode(token); // Decodifica el token
                rol = payload.descripcion; // Extrae el campo "descripcion" del payload
                localStorage.setItem('rol', rol); // Guarda el rol en el localStorage
            } catch (error) {
                console.error("Error al decodificar el token:", error);
            }
        }

        // Actualiza los estados
        setIsAuthenticated(!!token && authenticated);
        setIsAdmin(rol === 'administrador'); // Valida si el rol es "administrador"
    }, []);

    return (
        <div 
            className={`sidebarA ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='contenedor'>
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
