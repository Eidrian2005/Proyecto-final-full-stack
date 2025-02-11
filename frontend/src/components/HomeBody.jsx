import React, { useState, useEffect } from 'react';
import '../styles/home.css'; // Archivo CSS para estilos
import Header from './header';
import Tarjeta from './tarjetaProducto';
import DarkVariantExample from './carrucel';
import AdminSidebar from './AdminSidebar';
import ImgMediaCard from '../components/cardsListaDeseos';
import Sidebar from './sidebar';



const HeaderOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  return (
    <div className={`header-overlay ${isVisible ? '' : 'hidden'}`}>
      <Header />
    </div>
  );
};

const Homebody = () => {
  return (
    <div className="home-container">
      {/* Barra lateral */}
      {/* <AdminSidebar /> */}
         <Sidebar/>

      {/* Contenido principal */}
      <div className="main-content">
      <Header />
        <HeaderOverlay />

        {/* Sección de contenido */}
        <div className="content-section">
          <h2>Bienvenido al Panel de Administración</h2>
          <p>Seleccione una opción del menú lateral para empezar.</p>

          {/* Carrusel */}
          <div className="carousel-container">
            <DarkVariantExample />
          </div>

          {/* Tarjetas de productos */}
          <div className="tarjetas-container">
            <Tarjeta />
            {/* <ImgMediaCard/> */}
      
          </div>
        </div>

        {/* Pie de página */}
        <div className="footer-section">
          <div className="pagination">
            <button className="pagination-button">1</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebody;
