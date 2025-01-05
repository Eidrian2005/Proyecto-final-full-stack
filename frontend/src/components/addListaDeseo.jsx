import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import '../styles/btnListaDeseos.css';
import getClienteId from '../services/obtenerClientesxToken'; // Servicio para obtener el ID del cliente según el token
import PostListaDeDeseos from '../services/PostListaDeseo'; // Servicio para enviar los datos de la lista de deseos al back-end

const AddToListButton = ({ producto }) => {
  const [loading, setLoading] = useState(false); // Este estado nos ayuda a evitar que el usuario haga clic muchas veces seguidas

  const agregarListaDeseos = async () => {
    // Validamos que haya un producto para agregar
    if (!producto) {
      alert('El producto no está definido');
      console.error('Error: producto no definido');
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      // Obtenemos el ID del cliente desde el token
      const idCliente = getClienteId();
      console.log('ID Cliente:', idCliente); 
      console.log('ID Producto:', producto); 

      // Armamos el objeto con la información que vamos a enviar
      const listaData = {
        id_producto: producto.id, // El ID del producto que queremos agregar
        id_cliente: idCliente, // El cliente que lo está agregando
        fecha_agregado: '2024-12-03', // Fecha de ejemplo para el registro
      };

      // Mandamos la información al back-end con el servicio
      const response = await PostListaDeDeseos(listaData);
      console.log('Respuesta del servidor:', response); // Para revisar que todo salió bien

      // Si todo salió bien, avisamos al usuario
      alert('Producto añadido a la lista de deseos exitosamente');
    } catch (error) {
      // Si algo falla, mostramos un mensaje al usuario y al desarrollador
      alert('Hubo un error al agregar el producto a lista de deseos');
      console.error('Error al agregar producto:', error);
    } finally {
      // Pase lo que pase, volvemos a habilitar el botón
      setLoading(false);
    }
  };

  return (
    <button
      className="icon-button-heart" // Clase para estilos personalizados
      onClick={agregarListaDeseos} // Ejecutamos la función cuando el usuario haga clic
      disabled={loading} // Desactivamos el botón si está cargando
    >
      <FaHeart className={`heart-icon ${loading ? 'loading' : ''}`} /> 
      {/* Mostramos el ícono del corazón, y si está cargando, le agregamos un efecto visual */}
    </button>
  );
};

export default AddToListButton;
