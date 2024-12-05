import React, { useState } from 'react';
import '../styles/btnCarrito.css';
import getClienteId from '../services/obtenerClientesxToken';
import Post_carrito from '../services/PostAddCarrito';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el ícono deseado

const AddToCartButton = ({ producto }) => {
  const [loading, setLoading] = useState(false);

  const agregarCarrito = async () => {
    if (!producto) {
      alert('El producto no está definido');
      console.error('Error: producto no definido');
      return;
    }

    if (loading) return; // Prevenir múltiples clics
    setLoading(true);

    try {
      const idCliente = getClienteId();
      console.log("ID Cliente:", idCliente);

      const carritoData = {
        id_producto: producto.id,
        id_cliente: idCliente,
        cantidad: 1, // Incrementar en 1
      };

      const response = await Post_carrito(carritoData);
      console.log("Respuesta del servidor:", response);

      alert('Producto añadido al carrito exitosamente');
    } catch (error) {
      alert('Hubo un error al agregar el producto al carrito');
      console.error('Error al agregar producto:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="icon-button-cart"
      onClick={agregarCarrito}
      disabled={loading}
    >
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <FaShoppingCart className="shopping-cart-icon" />
      )}
    </button>
  );
};

export default AddToCartButton;


