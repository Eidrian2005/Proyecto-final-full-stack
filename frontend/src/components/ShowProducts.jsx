import React, { useState, useEffect, useCallback } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Getproductos } from "../services/GetProductos";
import { deleteproductos } from "../services/DeleteProducts";
import { toast } from "react-toastify";
import "../styles/ShowProducts.css";
import ModalEditar from "./ModalEditar";
export default function ShowProducts() {
  const [productos, setProductos] = useState([]);

  // Función para cargar los productos desde la API
  const loadProducts = useCallback(() => {
    const fetchProductos = async () => {
      try {
        const response = await Getproductos();
        setProductos(response);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Error al cargar los productos");
      }
    };
    fetchProductos();
  }, []);

  // Efecto para cargar los productos al montar el componente
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  async function eliminarProducto(id) {
    await deleteproductos(id)
    loadProducts();
    toast.warning('Producto Eliminado exitosamente',{
      autoClose: 1000
  })
  } 
  
  return (
    <div className="container mt-4">
      <Row className="g-4">
        {productos.map((producto) => (
          <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="product-card shadow-sm">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  src={producto.imagen || "placeholder.jpg"} // Imagen por defecto
                  alt={producto.nombre}
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title className="product-title">
                  {producto.nombre_producto}
                </Card.Title>
                <Card.Text className="product-units">
                  <strong>Unidades disponibles:</strong> {producto.unidades}
                </Card.Text>
                <Card.Text className="product-price">
                  <strong>Precio:</strong> ₡{producto.precio.toLocaleString()}
                </Card.Text>
                <div className="d-flex justify-content-center gap-2">

                <ModalEditar producto={producto}/>

                  <Button
                    variant="danger"
                    className="icon-btn delete-btn"
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
