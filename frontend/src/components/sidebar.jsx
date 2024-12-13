// Sidebar Component in React
import React, { useState } from 'react';
import '../styles/sidebar.css'; // Import the CSS file
// import '../styles/header.css'
import { Link, useNavigate } from "react-router-dom";


const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`sidebarA ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='contenedor'>
            <a href="#">
            <p className="nav-item">
                <Link to="/ListaDeseados" className="nav-link">
                Wishlist
                </Link>
                </p>
            </a>
            <a href="#">
            <p className="nav-item">
                <Link to="/Login" className="nav-link">
                Login
                </Link>
                </p>
            </a>
            <a href="#">
            <p className="nav-item cart">
                <Link to="/carrito" className="nav-link">
                <i className="fas fa-shopping-cart"></i>
                </Link>
                </p>
            </a>
            <a href="#">
                <span className="icon">❓</span>
                <span className="text">Ayuda</span>
            </a>
            </div>
        </div>
    );
};

export default Sidebar;






