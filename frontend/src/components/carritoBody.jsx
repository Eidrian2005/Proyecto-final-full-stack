import React from 'react';
import '../styles/home.css'; // Archivo CSS para estilos
import Header from './header';
import toggleSidebar from './AdminSidebar'
import CardsCarrito from './cardsCarrito';
import AdminSidebar  from './AdminSidebar';
import FormLogin from './FormLogin'
import TotalCarrito from '../components/totalCarrito'
const CarritoBody = () => {
  const token = localStorage.getItem('token');
  const isAuthenticaded = localStorage.getItem('Autenticado');




  return (
    <div className="home-container">
      {/* Sección de encabezado */}
      
      <div className="header-section">
        <div className="header-overlay">
        
        <Header />
       
       
          
        </div>
      </div>

      {/* Pie de página */}

      { isAuthenticaded === "true" && token ? 
      <CardsCarrito/> : <FormLogin/>
      }
      

      {isAuthenticaded === "true" && token ?
        <TotalCarrito/> : null
      }

      <div className="footer-section">
      
        <div className="pagination">
        {/* <FormLogin /> */}
       
        </div>
      </div>
    </div>
  );
};

export default CarritoBody;