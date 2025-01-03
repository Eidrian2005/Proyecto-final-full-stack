import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'; // Asegúrate de tener instalado js-cookie
import '../styles/home.css'; // Archivo CSS para estilos
import Header from './header';
import CardsCarrito from './cardsCarrito';
import FormLogin from './FormLogin';
import TotalCarrito from '../components/totalCarrito';

const CarritoBody = () => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    // Verificar si la cookie "token" está presente
    const token = Cookies.get('token');
    setHasToken(!!token); // Actualiza el estado a true si existe el token
  }, []); // El useEffect se ejecuta una vez al montar el componente

  return (
    <div className="home-container">
      {/* Sección de encabezado */}
      <div className="header-section">
        <div className="header-overlay">
          <Header />
        </div>
      </div>

      {/* Mostrar contenido basado en la existencia del token */}
      {hasToken ? (
        <>
          <CardsCarrito />
          <TotalCarrito />
        </>
      ) : (
        <FormLogin />
      )}

      {/* Pie de página */}
      <div className="footer-section">
        <div className="pagination"></div>
      </div>
    </div>
  );
};

export default CarritoBody;
