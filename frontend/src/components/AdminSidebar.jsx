import "../styles/AdminSidebar.css"  // Importamos los estilos del sidebar (barra lateral)
import React, { useState } from 'react';  // Usamos useState para manejar el estado
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Importamos los iconos de FontAwesome
import { faBars, faPlus, faUser, faHistory } from '@fortawesome/free-solid-svg-icons';  // Importamos los iconos que vamos a usar
import ModalCategoria from "./AgregarCategoria";  // Importamos el modal para agregar categorías
import ModalProducto from "./AgregarProductos";  // Importamos el modal para agregar productos

const AdminSidebar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);  // Estado para saber si el sidebar está abierto o cerrado

  // Función para alternar (abrir o cerrar) el sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);  // Cambia el estado de isOpen (si está abierto, lo cierra y viceversa)
  };

  return (
    <>
      {/* Botón para abrir/cerrar el sidebar en pantallas pequeñas */}
      <button
        className="btn btn-dark toggle-btn d-md-none"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />  {/* Icono de menú hamburguesa */}
      </button>

      {/* Sidebar: la barra lateral donde se muestran las opciones */}
      <div className={`sidebar bg-dark text-white ${isOpen ? 'open' : ''}`}>
        <h2 className="sidebar-title mb-4">Panel de Administración</h2>

        {/* Modal para agregar productos */}
        <ModalProducto />

        {/* Botón para ir a la vista de historial de compras */}
        <button
          className="btn btn-dark w-100 text-start d-flex align-items-center mb-3 px-3"
          onClick={() => onNavigate('historial-compras')}  // Cuando se hace clic, cambia la vista a "historial-compras"
        >
          <FontAwesomeIcon icon={faHistory} className="me-2" />  {/* Icono de historial */}
          Historial de Compras
        </button>

        {/* Este es un botón vacío que parece no hacer nada, podrías agregarle una funcionalidad */}
        <button
          className="btn btn-dark w-100 text-start d-flex align-items-center mb-3 px-3"
          onClick={() => onNavigate('/')}  // Esto puede ser para ir al inicio
        >
          {/* Aquí podrías agregar un icono o texto si lo deseas */}
        </button>

        {/* Botón para ir a la vista de usuarios */}
        <button
          className="btn btn-dark w-100 text-start d-flex align-items-center mb-3 px-3"
          onClick={() => onNavigate("usuarios")}  // Cambia la vista a "usuarios"
        >
          <FontAwesomeIcon icon={faUser} className="me-2" />  {/* Icono de usuario */}
          Usuarios
        </button>
      </div>
    </>
  );
};

export default AdminSidebar;  // Exportamos el componente para usarlo en otras partes de la aplicación
