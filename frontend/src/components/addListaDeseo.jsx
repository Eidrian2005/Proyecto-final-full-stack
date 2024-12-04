import React, { useState } from 'react';
import '../styles/btnCarrito.css';
import getClienteId from '../services/obtenerClientesxToken';
import  PostListaDeDeseos  from '../services/PostListaDeseo';

const AddToListButton = ({ producto }) => {
  const [loading, setLoading] = useState(false);

  const agregarListaDeseos = async () => {
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
      console.log("ID Producto:", producto);
      
      const listaData = {
        id_producto: producto.id,
        id_cliente: idCliente,
        fecha_agregado: "2024-12-03"
      };

      const response = await PostListaDeDeseos(listaData);
      console.log("Respuesta del servidor:", response);

      alert('Producto añadido a la lista de deseos exitosamente');
    } catch (error) {
      alert('Hubo un error al agregar el producto a lista de deseos ');
      console.error('Error al agregar producto:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="btn-agregar"
      onClick={agregarListaDeseos}
      disabled={loading}
    >
      {loading ? 'Agregando...' : 'AgregarL'}
    </button>
  );
};

export default AddToListButton;