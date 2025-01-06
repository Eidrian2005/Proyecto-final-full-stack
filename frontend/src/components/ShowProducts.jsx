import React, { useEffect, useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap"; // Componentes de Bootstrap para diseño
import { FaTrash } from "react-icons/fa"; // Icono de basura para el botón de eliminar
import { toast } from "react-toastify"; // Para mostrar mensajes bonitos
import "../styles/ShowProducts.css"; // Estilos personalizados
import ModalEditar from "./ModalEditar"; // Componente para editar productos
import { deleteproductos } from "../services/DeleteProducts"; // Servicio para eliminar productos
import { ProductContext } from "./ProductContext"; // Contexto para manejar los productos

export default function ShowProducts() {
  const { productos, loadProducts } = useContext(ProductContext); // Accedemos a los productos y la función para cargarlos

  // Cargamos los productos cuando el componente se monta
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Función para eliminar un producto
  async function eliminarProducto(id) {
    await deleteproductos(id); // Llamamos al servicio para eliminar el producto
    loadProducts(); // Volvemos a cargar los productos para actualizar la lista
    toast.warning("Producto Eliminado exitosamente", { autoClose: 1000 }); // Mostramos un mensajito de confirmación
  }

  return (
    <div className="show-productos-container">
      <Row className="producto-row">
        {/* Recorremos la lista de productos para mostrarlos */}
        {productos.map((producto) => (
          <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="producto-card-custom">
              {/* Imagen del producto */}
              <div className="producto-image-container">
                <Card.Img
                  variant="top"
                  src={producto.imagen || "placeholder.jpg"} // Mostramos una imagen por defecto si no tiene
                  alt={producto.nombre_producto}
                />
              </div>
              <Card.Body className="producto-body">
                {/* Título del producto */}
                <Card.Title className="producto-title">
                  {producto.nombre_producto}
                </Card.Title>
                {/* Unidades disponibles */}
                <Card.Text className="producto-units">
                  <strong>Unidades disponibles:</strong> {producto.unidades}
                </Card.Text>
                {/* Precio del producto */}
                <Card.Text className="producto-price">
                  <strong>Precio:</strong> ₡{producto.precio.toLocaleString()} {/* Formato bonito para el precio */}
                </Card.Text>
                <div className="producto-action-buttons">
                  {/* Botón para editar el producto */}
                  <ModalEditar producto={producto} />
                  {/* Botón para eliminar el producto */}
                  <Button
                    variant="danger"
                    className="producto-delete-button"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    <FaTrash /> {/* Icono de basurero */}
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
