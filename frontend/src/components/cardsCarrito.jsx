import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { GetCarrito } from "../services/GetCarrito";
import { GetProducto } from "../services/GetProducto";
// import Swal from "sweetalert2";
import "../styles/cardsCarrito.css";

function CardsCarrito() {
  const [carrito, setCarrito] = useState([]); // Datos del carrito (productos + cantidad)
  const [productos, setProductos] = useState([]); // Datos de productos (detalles generales)

  // Función para obtener datos del carrito y de productos
  const fetchProducts = async () => {
    try {
      const carritoData = await GetCarrito(); // Datos del carrito
      const productosData = await GetProducto(); // Datos generales de los productos

      // Relacionar productos del carrito con detalles de productos
      const carritoConDetalles = carritoData.map((item) => {
        const productoDetalles = productosData.find(
          (producto) => producto.id === item.id_producto
        );
        return {
          ...item,
          ...productoDetalles, // Agregar detalles al carrito
        };
      });

      setCarrito(carritoConDetalles);
      setProductos(productosData); // Guardar productos por si se necesitan en el futuro
    } catch (error) {
      console.error("Error al obtener productos:", error);
      // Swal.fire({
      //   icon: "error",
      //   title: "Error",
      //   text: "No se pudieron cargar los productos.",
      // });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="cardsM">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Carrito de Compras
      </h1>
      <Container>
        <Row>
          {carrito.map((producto, index) => (
            <Col
              xs={12}
              key={index}
              className="d-flex justify-content-center"
            >
              <Card
                className="product-card"
                style={{ width: "70%", marginBottom: "20px" }}
              >
                <Row className="no-gutters">
                  <Col md={4}>
                    <Card.Img
                      src={producto.imagen}
                      alt={producto.nombre_producto}
                      className="product-image"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title className="product-title">
                        {producto.nombre_producto}
                      </Card.Title>
                      <Card.Text className="product-price">
                        Precio: ${producto.precio}
                      </Card.Text>
                      <Card.Text className="product-description">
                        Descripción: {producto.descripcion}
                      </Card.Text>
                      <Form.Group className="mb-3">
                        <Form.Label>Cantidad:</Form.Label>
                        <Form.Control
                          as="select"
                          value={producto.cantidad} // Cantidad actual
                          style={{ width: "80px", display: "inline-block" }}
                          onChange={(e) =>
                            setCarrito((prevState) =>
                              prevState.map((item, idx) =>
                                idx === index
                                  ? { ...item, cantidad: e.target.value }
                                  : item
                              )
                            )
                          }
                        >
                          {[...Array(10).keys()].map((_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <div className="product-actions">
                        <Button variant="danger" style={{ marginRight: "10px" }}>
                          Eliminar
                        </Button>
                        <Button variant="secondary">
                          Guardar para más tarde
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CardsCarrito;
