import React, { useEffect, useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import "../styles/ShowProducts.css";
import ModalEditar from "./ModalEditar";
import { deleteproductos } from "../services/DeleteProducts";
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
    <div className="show-productos-container">
      <Row className="producto-row">
        {productos.map((producto) => (
          <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="producto-card-custom">
              <div className="producto-image-container">
                <Card.Img
                  variant="top"
                  src={producto.imagen || "placeholder.jpg"}
                  alt={producto.nombre_producto}
                />
              </div>
              <Card.Body className="producto-body">
                <Card.Title className="producto-title">
                  {producto.nombre_producto}
                </Card.Title>
                <Card.Text className="producto-units">
                  <strong>Unidades disponibles:</strong> {producto.unidades}
                </Card.Text>
                <Card.Text className="producto-price">
                  <strong>Precio:</strong> ₡{producto.precio.toLocaleString()}
                </Card.Text>
                <div className="producto-action-buttons">
                  <ModalEditar producto={producto} />
                  <Button
                    variant="danger"
                    className="producto-delete-button"
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