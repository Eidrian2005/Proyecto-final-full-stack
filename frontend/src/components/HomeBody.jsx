import React, { useState, useEffect } from 'react';
import '../styles/home.css'; // Archivo CSS para estilos
import Header from './header';
import Tarjeta from './tarjetaProducto';
import DarkVariantExample from './carrucel';

const HeaderOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Desaparece al desplazarse hacia abajo
    } else {
      setIsVisible(true); // Reaparece al desplazarse hacia arriba
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`header-overlay ${isVisible ? '' : 'hidden'}`}>
      <Header />
    </div>
  );
};

const Homebody = () => {
  return (
    <div className="home-container">
      {/* Sección de encabezado */}
      <HeaderOverlay />

      {/* Contenido principal */}
      <div className="content-section">
        <DarkVariantExample />
        <Tarjeta />
      </div>

      {/* Pie de página */}
      <div className="footer-section">
        <div className="pagination">
          <button className="pagination-button">1</button>
        </div>
      </div>
    </div>
  );
};

export default Homebody;
