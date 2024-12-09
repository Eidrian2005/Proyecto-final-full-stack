import React, { useState, useEffect } from 'react';
import '../styles/totalCarrito.css';
import { GetCarrito } from '../services/GetCarrito';
import { GetProducto } from '../services/GetProducto';
import Swal from 'sweetalert2';

const TotalCarrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCarrito = async () => {
    try {
      const carritoData = await GetCarrito(); // Productos en el carrito
      const productosData = await GetProducto(); // Detalles de los productos

      // Combinar datos del carrito con detalles de productos
      const carritoConDetalles = carritoData.map((itemCarrito) => {
        // Encontrar el producto correspondiente usando id_producto
        const productoDetalles = productosData.find(
          (producto) => producto.id === itemCarrito.id_producto
        );

        // Asegúrate de que los detalles del producto sean correctos
        if (!productoDetalles) {
          console.error(`Producto con id ${itemCarrito.id_producto} no encontrado`);
        }

        return {
          ...itemCarrito,
          nombre: productoDetalles?.nombre_producto || 'Producto desconocido', // Cambié a nombre_producto
          precio: productoDetalles?.precio || 0,
        };
      });

      setCarrito(carritoConDetalles);

      // Calcular el total
      const totalPago = carritoConDetalles.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad,
        0
      );
      setTotal(totalPago);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudieron cargar los productos.',
      });
    } finally {
      setLoading(false);
    }
  };

  // Llamar a `fetchCarrito` al montar el componente
  useEffect(() => {
    fetchCarrito();
  }, []);

  return (
    <div className="total-carrito-container">
      <h2 className="carrito-title">Resumen del Carrito</h2>

      {loading ? (
        <p>Cargando...</p>
      ) : carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {carrito.map((producto, index) => (
              <li key={index} className="carrito-item">
                <p>{producto.nombre}</p> {/* Aquí mostramos el nombre correcto */}
                <p>{`$${producto.precio}`}</p>
                <p>Cantidad: {producto.cantidad}</p>
              </li>
            ))}
          </ul>
          <hr />
          <div className="carrito-total">
            <p>Total a pagar:</p>
            <p>{`$${total.toFixed(2)}`}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default TotalCarrito;
