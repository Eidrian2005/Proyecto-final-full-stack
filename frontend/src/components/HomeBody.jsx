import React from 'react';
import '../styles/home.css'; // Archivo CSS para estilos
import Header from './header';
import FormLogin from './FormLogin';
import ShoppingCart from './carrito';
import Tarjeta from './tarjetaProducto';
import DarkVariantExample from './carrucel';


const Homebody = () => {
  return (
    <div className="home-container">
      {/* Sección de encabezado */}
     
     
      <div className="header-section">
        <div className="header-overlay">
        <Header />
    
          
        </div>
      </div>

      {/* Pie de página */}
     
      <DarkVariantExample/>
      <Tarjeta/>
      
     
      <div className="footer-section">
      
        <div className="pagination">
          <button className="pagination-button">1</button>
        </div>
      </div>
    </div>
  );
};

export default Homebody;
