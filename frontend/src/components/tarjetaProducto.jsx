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
      <Container fluid="md" className="cardS">
      <Row className="g-3"> {/* Cambiado a g-3 para un espaciado más uniforme */}
  {productos.map((producto, index) => (
    <Col xs={12} sm={6} md={4} lg={4} key={index}> {/* Tres tarjetas por fila */}
      <Card className="custom-carD">
        <Card.Img
          className="custom-imG"
          variant="top"
          src={producto.imagen}
          alt={producto.nombre_producto}
        />
        <Card.Body>
          <Card.Title className="product-titl">{producto.nombre_producto}</Card.Title>
          <Card.Text className="product-solD">120 vendidos</Card.Text>
          <Card.Text className="product-pricE">CRC {producto.precio}</Card.Text>
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
