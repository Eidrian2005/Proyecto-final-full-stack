import "../styles/AdminSidebar.css"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faTags, faHistory } from '@fortawesome/free-solid-svg-icons';


const AdminSidebar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón de toggle para pantallas pequeñas */}
      <button
        className="btn btn-dark toggle-btn d-md-none"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar */}
      <div className={`sidebar bg-dark text-white ${isOpen ? 'open' : ''}`}>
        <h2 className="sidebar-title mb-4">Panel de Administración</h2>
        <button
          className="btn btn-dark w-100 text-start d-flex align-items-center mb-3 px-3"
          onClick={() => onNavigate('agregar-productos')}
        >
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Agregar Productos
        </button>
        <button
          className="btn btn-dark w-100 text-start d-flex align-items-center mb-3 px-3"
          onClick={() => onNavigate('agregar-categoria')}
        >
          <FontAwesomeIcon icon={faTags} className="me-2" />
          Agregar Categoría
        </button>
        <button
          className="btn btn-dark w-100 text-start d-flex align-items-center mb-3 px-3"
          onClick={() => onNavigate('historial-compras')}
        >
          <FontAwesomeIcon icon={faHistory} className="me-2" />
          Historial de Compras
        </button>
      </div>
    </>
  );
};

export default AdminSidebar;
