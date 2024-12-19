import React, { useState, useEffect } from 'react';
import '../styles/totalCarrito.css';
import { GetCarrito } from '../services/GetCarrito';
import { GetProducto } from '../services/GetProducto';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import FormPaypal from './FormPaypal'; // Importar el componente PayPal

const TotalCarrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCarrito = async () => {
    try {
      const carritoData = await GetCarrito();
      const productosData = await GetProducto();

      const carritoConDetalles = carritoData.map((itemCarrito) => {
        const productoDetalles = productosData.find(
          (producto) => producto.id === itemCarrito.id_producto
        );

        if (!productoDetalles) {
          console.error(`Producto con id ${itemCarrito.id_producto} no encontrado`);
        }

        return {
          ...itemCarrito,
          nombre: productoDetalles?.nombre_producto || 'Producto desconocido',
          precio: productoDetalles?.precio || 0,
        };
      });

      setCarrito(carritoConDetalles);

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
                <p>{producto.nombre}</p>
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

          <FormPaypal total={total} /> {/* Pasar el total al componente PayPal */}
        </>
      )}
    </div>
  );
};

export default TotalCarrito;
