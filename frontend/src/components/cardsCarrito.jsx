import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { GetCarrito } from "../services/GetCarrito";
import { GetProducto } from "../services/GetProducto";
import { deleteCarrito } from "../services/DeleteCarrito";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/cardsCarrito.css";

// toast.configure();

function CardsCarrito() {
  const [carrito, setCarrito] = useState([]); // Datos del carrito (productos + cantidad)
  const [productos, setProductos] = useState([]); // Datos de productos (detalles generales)
  const [deleting, setDeleting] = useState(false); // Estado de carga para eliminar productos

  // Función para obtener datos del carrito y de productos

  useEffect(() => {
    const fetchCarrito = async () => {
        try {
          const carritoData = await GetCarrito(); // Datos del carrito
          const productosData = await GetProducto(); // Datos generales de los productos

           // Combinar los datos del carrito con los detalles del producto
        const carritoConDetalles = carritoData.map((item) => {
          const productoDetalles = productosData.find(
            (producto) => producto.id === item.id_producto // Asegúrate de que 'id_producto' es el campo correcto
          );
          return {
            id_carrito: item.id,
            ...item,
            ...productoDetalles, // Combina los detalles del producto con el carrito
          };
        });
          setCarrito(carritoConDetalles)
          setProductos(productosData)

          console.log('Carrito info', carritoData);
          console.log('Productos info', productosData);
          
        }catch{
          console.log('Error');
          
        }
      }

      fetchCarrito()
  }, [])

  console.log('CARRITO CON DETALLES', carrito);
  

  // Función para eliminar un producto del carrito
  const eliminarCarrito = async (idCarrito) => {
    try {
      setDeleting(true);
      await deleteCarrito(idCarrito);
      setCarrito((prev) => prev.filter((item) => item.id !== idCarrito)); // Actualizar estado
      toast.warning("Producto eliminado exitosamente", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      toast.error("Error al eliminar el producto", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setDeleting(false);
    }
  };
  
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <div className="cardsM11">
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
                className="product-card1"
                style={{ width: "70%", marginBottom: "20px" }}
              >
                <Row className="no-gutters">
                  <Col md={4}>
                    <Card.Img
                      src={producto.imagen}
                      alt={producto.nombre_producto}
                      className="product-image11"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title className="product-title11">
                        {producto.nombre_producto}
                      </Card.Title>
                      <Card.Text className="product-price11">
                        Precio: ${producto.precio}
                      </Card.Text>
                      <Card.Text className="product-description1">
                        Descripción: {producto.descripcion}
                      </Card.Text>
                      <Form.Group className="mb-3">
                        <Form.Label>Cantidad:</Form.Label>
                        <Form.Control
                          as="select"
                          value={producto.cantidad} // Cantidad actual
                          style={{ width: "80px", display: "inline-block" }}
                          onChange={(e) =>
                            setCarrito((nuevaCant) =>
                              nuevaCant.map((item, idx) =>
                                idx === index
                                  ? { ...item, cantidad: e.target.value } : item
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
                      <div className="product-actions11">
                        <Button
                          variant="danger"
                          style={{ marginRight: "10px" }}
                          onClick={() => eliminarCarrito(producto.id_carrito)}
                          disabled={deleting} // Deshabilitar mientras se elimina
                        >
                          {deleting ? "Eliminando..." : "Eliminar"}
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
