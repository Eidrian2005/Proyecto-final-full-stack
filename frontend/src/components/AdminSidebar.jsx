import "../styles/AdminSidebar.css"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus,faUser, faHistory } from '@fortawesome/free-solid-svg-icons';
import ModalCategoria from "./AgregarCategoria";
import ModalProducto from "./AgregarProductos";

const AdminSidebar = (agregarCategoria) => {
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



{/* modal agregar productos */}
        
        <ModalProducto/>


        <button
          className="btn btn-dark w-100 text-start d-flex align-items-center mb-3 px-3"
          onClick={() => onNavigate('historial-compras')}
        >
          <FontAwesomeIcon icon={faHistory} className="me-2" />
          Historial de Compras
        </button>

        <button
          className="btn btn-dark w-100 text-start d-flex align-items-center mb-3 px-3"
          onClick={() => onNavigate('historial-compras')}
        >
          <FontAwesomeIcon icon={faUser} className="me-2" />
          Usuarios
        </button>
      </div>
    </>
  );
};

export default AdminSidebar;
