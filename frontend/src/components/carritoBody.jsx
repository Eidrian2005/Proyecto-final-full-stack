import React from 'react';
import '../styles/home.css'; // Archivo CSS para estilos
import Header from './header';
import FormLogin from './FormLogin';
import FormContactanos from './Formcontactanos';

const Carritobody = () => {
  return (
    <div className="home-container">
      {/* Sección de encabezado */}
      <div className="header-section">
        <div className="header-overlay">
        <Header />
          
        </div>
      </div>

      {/* Pie de página */}
      <FormContactanos/>
      
      <div className="footer-section">
      
        <div className="pagination">
        {/* <FormLogin /> */}
       
          <button className="pagination-button">1</button>
        </div>
      </div>
    </div>
  );
};

export default Carritobody;