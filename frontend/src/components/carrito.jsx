import React, { useState } from 'react';

import '../styles/btnCarrito.css'; 

const AddToCartButton = ({ producto }) => {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar el producto al carrito
  const agregarAlCarrito = async () => {
    const carritoData = {
      id_producto,   // ID del producto
      id_cliente: idCliente, // ID del cliente (si es necesario)
      cantidad: 1,   // Por defecto 1, pero puede ser dinámico
    };

    try {
      const response = await postCarrito(carritoData);
      alert('Producto agregado al carrito con éxito');
      console.log(response); // Manejo adicional si es necesario
    } catch (error) {
      alert('Hubo un error al agregar el producto al carrito');
    }
  };


   
 

  return (
    <button className="btn-agregar" onClick={agregarAlCarrito}>
      Agregar {producto} al carrito
    </button>
  );
};

export default AddToCartButton;
 


