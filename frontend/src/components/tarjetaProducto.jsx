import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AddToCartButton from './carrito';
import AddToListButton from './addListaDeseo';
import { GetProducto } from '../services/GetProducto';
import "../styles/tarjetaProducto.css"

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
      <Container fluid="md">
        <Row>
          {productos.map((producto, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <Card id="prueba2" style={{ margin: '10px 0' }}>
                <Card.Body className='cardbdy'>
                  <Card.Title className='Ctitle'>{producto.nombre_producto}</Card.Title>
                  <Card.Img className='CImg' src={producto.imagen} alt={producto.nombre_producto} />
                  <Card.Text className='Ctext'>Precio: ${producto.precio}</Card.Text>
                  <Card.Text className='Ctext'>Tamaño: {producto.descripcion}</Card.Text>
                  <div>
                    <p>Especificaciones:</p>
                    <Button className='btn12' variant="primary">Contáctanos</Button>
                    <AddToCartButton producto={producto}/>
                    <AddToListButton producto={producto}/>
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
