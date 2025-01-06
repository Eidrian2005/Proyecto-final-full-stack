import React, { useState, useEffect } from 'react';
import '../styles/totalCarrito.css'; // Estilos del carrito
import { GetCarrito } from '../services/GetCarrito'; // Servicio para obtener los productos en el carrito
import { GetProducto } from '../services/GetProducto'; // Servicio para obtener los detalles de los productos
import Swal from 'sweetalert2'; // Librería para mostrar alertas
import { Link } from "react-router-dom"; // Para la navegación
import FormPaypal from './FormPaypal'; // Importar el componente PayPal para el pago

const TotalCarrito = () => {
  const [carrito, setCarrito] = useState([]); // Estado para almacenar los productos del carrito
  const [total, setTotal] = useState(0); // Estado para almacenar el total a pagar
  const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga

  // Función para obtener los productos del carrito y sus detalles
  const fetchCarrito = async () => {
    try {
      const carritoData = await GetCarrito(); // Obtener los productos del carrito
      const productosData = await GetProducto(); // Obtener los detalles de los productos

      // Combina los datos del carrito con los detalles del producto
      const carritoConDetalles = carritoData.map((itemCarrito) => {
        const productoDetalles = productosData.find(
          (producto) => producto.id === itemCarrito.id_producto // Busca el producto en los detalles
        );

        if (!productoDetalles) {
          console.error(`Producto con id ${itemCarrito.id_producto} no encontrado`);
        }

        return {
          ...itemCarrito,
          nombre: productoDetalles?.nombre_producto || 'Producto desconocido', // Nombre del producto
          precio: productoDetalles?.precio || 0, // Precio del producto
        };
      });

      setCarrito(carritoConDetalles); // Guarda los productos en el estado

      // Calcula el total del carrito
      const totalPago = carritoConDetalles.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad, // Suma el precio * cantidad
        0
      );
      setTotal(totalPago); // Guarda el total a pagar
    } catch (error) {
      console.error('Error al obtener productos:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudieron cargar los productos.',
      });
    } finally {
      setLoading(false); // Cambia el estado de carga a falso cuando termina
    }
  };

  // Este efecto se ejecuta cuando el componente se monta
  useEffect(() => {
    fetchCarrito(); // Llama a la función para obtener el carrito
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div className="total-carrito-container">
      <h2 className="carrito-title">Resumen del Carrito</h2>

      {loading ? (
        <p>Cargando...</p> // Muestra "Cargando..." mientras se obtienen los datos
      ) : carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p> // Si el carrito está vacío
      ) : (
        <>
          {/* Muestra la lista de productos en el carrito */}
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
          {/* Muestra el total a pagar */}
          <div className="carrito-total">
            <p>Total a pagar:</p>
            <p>{`$${total.toFixed(2)}`}</p>
          </div>

          {/* Componente de pago con PayPal */}
          <FormPaypal total={total} /> {/* Pasa el total al componente de PayPal */}
        </>
      )}
    </div>
  );
};

export default TotalCarrito;
