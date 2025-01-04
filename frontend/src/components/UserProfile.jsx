import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/userProfile.css';
import Header from './header';
import Sidebar from './sidebar';

const ProfilePage = () => {
  return (
    <div>
      
       <Header />
       <Sidebar/>
    <Container fluid className="profile-container">
      
      <Row>
        {/* Sección Izquierda */}
        <Col md={4} className="profile-left">
          <div className="profile-photo-container">
            <Image
              src="https://via.placeholder.com/150"
              roundedCircle
              className="profile-photo"
            />
          </div>
          <h5 className="profile-username">Nombre de Usuario</h5>
          <Button variant="outline-dark" className="profile-edit-btn">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Col>

        {/* Sección Derecha */}
        <Col md={8} className="profile-right">
          <h6 className="profile-section-title">Dirección</h6>
          <Card className="profile-card">
            <Card.Text>
              Texto de ejemplo
            </Card.Text>
          </Card>
          <div className="profile-logout-container">
            <Button variant="outline-danger" className="profile-logout-btn">
              <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar sesión
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
 </div>
  );
};

export default ProfilePage;
