import React from 'react';
import '../styles/totalCarrito.css';
import { GetCarrito } from '../services/GetCarrito';

const TotalCarrito = () => {
  // Datos estáticos de ejemplo

  
  const carrito = GetCarrito()

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="total-carrito-container">
      <h2 className="carrito-title">Resumen del Carrito</h2>
      <ul className="carrito-lista">
        {carrito.map((item, index) => (
          <li key={index} className="carrito-item">
            <p>{item.nombre}</p>
            <p>{`$${(item.precio * item.cantidad).toFixed(2)}`}</p>
          </li>
        ))}
      </ul>
      <hr />
      <div className="carrito-total">
        <p>Total:</p>
        <p>{`$${total.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default TotalCarrito;
