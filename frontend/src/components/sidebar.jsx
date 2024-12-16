// Sidebar Component in React
import React, { useState } from 'react';
import '../styles/sidebar.css'; // Import the CSS file
// import '../styles/header.css'
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from 'react-icons/fa'; 
import '../styles/btnListaDeseos.css';

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`sidebarA ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            <div className='contenedor'>
            <p className="nav-item">
                <Link to="/ListaDeseados" className="nav-link">
                    <i class="fa-solid fa-heart"></i>
                    <span className="text">Lista de deseados</span>
               </Link>
            </p>
            
            <p className="nav-item"><Link to="/Login" className="nav-link">Login</Link></p>
        
          
            <p className="nav-item cart">
                <Link to="/carrito" className="nav-link">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="text">Carrito</span>
                </Link>
            </p>
        
    
            <p className="nav-item">
                <Link to="/perfil" className="nav-link">
                <i class="fa-solid fa-user"></i>
                <span className="text">Perfil</span>
                </Link>
            </p>
                {/* <span className="icon"></span> */}
                {/* <span className="text">Perfil</span> */}
       
            </div>
        </div>
    );
};

export default Sidebar;






