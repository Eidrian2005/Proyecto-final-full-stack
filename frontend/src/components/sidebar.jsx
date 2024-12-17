import React, { useState,useEffect } from 'react';
import '../styles/sidebar.css'; // Import the CSS file
// import '../styles/header.css'
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from 'react-icons/fa'; 
import '../styles/btnListaDeseos.css';

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Comprobamos si el usuario tiene un token válido almacenado
        const token = localStorage.getItem('token');
        const authenticated = localStorage.getItem('Autenticado');
        setIsAuthenticated(!!token && authenticated === 'true');
    }, []);

    return (
        <div 
            className={`sidebarA ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            <div className='contenedor'>
            <p className="nav-item">
                <Link to="/ListaDeseados" className="nav-link">
                    <i className="fa-solid fa-heart"></i>
                    <span className="text">Lista de deseados</span>
               </Link>
            </p>
            
            <p className="nav-item">
                    <Link to={isAuthenticated ? "/Perfil" : "/Login"} className="nav-link">
                        <i className={`fa-solid ${isAuthenticated ? 'fa-user' : 'fa-sign-in-alt'}`}></i>
                        <span className="text">{isAuthenticated ? 'Perfil' : 'Login'}</span>
                    </Link>
                </p>        
          
            <p className="nav-item cart">
                <Link to="/carrito" className="nav-link">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="text">Carrito</span>
                </Link>
            </p>
            </div>
        </div>
    );
};

export default Sidebar;






