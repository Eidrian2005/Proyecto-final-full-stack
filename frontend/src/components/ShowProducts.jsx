import React, { useEffect, useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import "../styles/ShowProducts.css";
import ModalEditar from "./ModalEditar";
import { ProductContext } from "./ProductContext";

export default function ShowProducts() {
  const { productos, loadProducts } = useContext(ProductContext);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  async function eliminarProducto(id) {
    await deleteproductos(id);
    loadProducts();
    toast.warning("Producto Eliminado exitosamente", {
      autoClose: 1000,
    });
  }

  return (
    <div className="show-products-container">
      <Row className="product-row">
        {productos.map((producto) => (
          <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="product-card-custom">
              <div className="product-image-container">
                <Card.Img
                  variant="top"
                  src={producto.imagen || "placeholder.jpg"}
                  alt={producto.nombre}
                />
              </div>
              <Card.Body className="product-body">
                <Card.Title className="product-title">
                  {producto.nombre_producto}
                </Card.Title>
                <Card.Text className="product-units">
                  <strong>Unidades disponibles:</strong> {producto.unidades}
                </Card.Text>
                <Card.Text className="product-price">
                  <strong>Precio:</strong> ₡{producto.precio.toLocaleString()}
                </Card.Text>
                <div className="product-action-buttons">
                  <ModalEditar producto={producto} />
                  <Button
                    variant="danger"
                    className="product-delete-button"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    <FaTrash />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
