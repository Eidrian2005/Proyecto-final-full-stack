import React, { useState } from "react";
import AdminSidebar from './AdminSidebar';  // Importamos la barra lateral de administración
import ShowProducts from './ShowProducts';  // Importamos el componente que muestra los productos
import { Row, Col } from 'react-bootstrap';  // Usamos las filas y columnas de Bootstrap para el diseño
import AdminHeader from './AdminHeader';  // Importamos el encabezado de la administración
import ShowUsers from './usuarios';  // Importamos el componente que muestra los usuarios
import ShowHistorialCompras from "./historial";  // Importamos el componente que muestra el historial de compras

export default function BodyAdmin() {
  // Estado que guarda la vista actual. Empieza con la vista de productos.
  const [currentView, setCurrentView] = useState("productos");

  // Función que cambia la vista actual según lo que elija el usuario en la barra lateral
  const onNavigate = (view) => {
    setCurrentView(view);  // Actualizamos el estado con la vista seleccionada
  };

  // Función que muestra el componente adecuado según la vista seleccionada
  const renderView = () => {
    switch (currentView) {
      case "usuarios":
        return <ShowUsers />;  // Si la vista es "usuarios", mostramos el componente ShowUsers
      case "historial-compras":
        return <ShowHistorialCompras />;  // Si la vista es "historial-compras", mostramos el componente ShowHistorialCompras
      default:
        return <ShowProducts />;  // Si no es ninguna de las anteriores, mostramos los productos por defecto
    }
  };

  return (
    <div>
      {/* Fila para el encabezado */}
      <Row>
        <Col>
          <AdminHeader />  {/* Mostramos el encabezado de administración */}
        </Col>
      </Row>

      {/* Fila para la barra lateral y el contenido principal */}
      <Row>
        <Col xs={2} className='bg-body-tertiary py-5 '>
          <AdminSidebar onNavigate={onNavigate} />  {/* Barra lateral que permite cambiar de vista */}
        </Col>
        <Col xs={10} className="py-5 p-5">
          {renderView()}  {/* Mostramos la vista que corresponde según la selección */}
        </Col>
      </Row>
    </div>
  );
}
