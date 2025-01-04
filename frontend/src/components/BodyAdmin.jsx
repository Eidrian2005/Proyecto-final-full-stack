import React, { useState } from "react";
import AdminSidebar from './AdminSidebar';
import ShowProducts from './ShowProducts';
import { Row, Col } from 'react-bootstrap';
import AdminHeader from './AdminHeader';
import ShowUsers from './usuarios';
import ShowHistorialCompras from "./historial";
export default function BodyAdmin() {
  const [currentView, setCurrentView] = useState("productos");

  const onNavigate = (view) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "usuarios":
        return <ShowUsers />;
      case "historial-compras":  // Cambiar a "historial-compras"
        return <ShowHistorialCompras />;
      default:
        return <ShowProducts />;
    }
  };
  

  return (
    <div>
      <Row>
        <Col>
          <AdminHeader />
        </Col>
      </Row>

      <Row>
        <Col xs={2} className='bg-body-tertiary py-5 '>
          <AdminSidebar onNavigate={onNavigate} />
        </Col>
        <Col xs={10} className="py-5 p-5">
          {renderView()}
        </Col>
      </Row>
    </div>
  );
}
