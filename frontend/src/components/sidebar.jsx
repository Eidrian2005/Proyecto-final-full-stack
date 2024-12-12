// Sidebar Component in React
import React, { useState } from 'react';
import '../styles/sidebar.css'; // Import the CSS file

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`sidebarA ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href="#">
                <span className="icon">🏠</span>
                <span className="text">Inicio</span>
            </a>
            <a href="#">
                <span className="icon">📄</span>
                <span className="text">Documentos</span>
            </a>
            <a href="#">
                <span className="icon">⚙️</span>
                <span className="text">Configuración</span>
            </a>
            <a href="#">
                <span className="icon">❓</span>
                <span className="text">Ayuda</span>
            </a>
        </div>
    );
};

export default Sidebar;