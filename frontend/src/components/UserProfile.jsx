import React, { useState, useEffect } from 'react';
import { GetCliente } from '../services/GetClientes';
import { Card, Col, Container } from 'react-bootstrap';

export default function UserProfile() {
  const [cliente, setCliente] = useState(null); // Cambiado a un único cliente
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadClient = async () => {
      try {
        const user = await GetCliente();
        setCliente(user);
      } catch (error) {
        setError("No se pudo cargar la información del usuario.");
        console.error(error);
      }
    };
    loadClient();
  }, []);

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  if (!cliente) {
    return <div>Cargando información del usuario...</div>;
  }

  return (
    <Container className="mt-4">
      <Col xs={12} sm={6} md={4} lg={3} className="mx-auto">
        <Card>
          <Card.Img
            variant="top"
            src={cliente.imagen}
            alt={cliente.nombre || "Imagen del usuario"}
            id="imagen"
          />
          <Card.Body>
            <Card.Title>Nombre: {cliente.usuario}</Card.Title>
            <Card.Text>Dirección: {cliente.direccion}</Card.Text>
            <Card.Text>Correo: {cliente.correo}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
