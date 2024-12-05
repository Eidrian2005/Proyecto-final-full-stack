import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AddToCartButton from './carrito';
import AddToListButton from './addListaDeseo';
import { GetProducto } from '../services/GetProducto';
import "../styles/tarjetaProducto.css";

function Tarjeta() {
  const [productos, setProductos] = useState([]);

  const fetchProducts = async () => {
    try {
      const products = await GetProducto();
      setProductos(products);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron cargar los productos.",
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="cardsM2">
      <h1>Productos</h1>
      <Container fluid="md" className="cards">
      <Row className="g-4">
  {productos.map((producto, index) => (
    <Col xs={12} sm={6} md={4} lg={3} key={index}>
      <Card className="custom-card" style={{ margin: '20px 0' }}>
        <Card.Img
          className="custom-img"
          variant="top"
          src={producto.imagen}
          alt={producto.nombre_producto}
        />
        <Card.Body>
          <Card.Title className="product-title">{producto.nombre_producto}</Card.Title>
          <Card.Text className="product-sold">120 vendidos</Card.Text>
          <Card.Text className="product-price">CRC {producto.precio}</Card.Text>
          <div className="button-group">
            <AddToCartButton producto={producto} />
            <AddToListButton producto={producto} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

      </Container>
    </div>
  );
}

export default Tarjeta;
