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

const deseobody = () => {
  return (
    <div className="home-container">
      {/* Barra lateral */}
     
         <Sidebar/>

      {/* Contenido principal */}
      <div className="main-content">
      <Header />
        <HeaderOverlay />

        {/* Sección de contenido */}
        <div className="content-section">
       

         
          <div className="carousel-container">
           
          </div>

          {/* Tarjetas de productos */}
          <div className="tarjetas-container">
           
            <ImgMediaCard/>
      
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

export default deseobody;
