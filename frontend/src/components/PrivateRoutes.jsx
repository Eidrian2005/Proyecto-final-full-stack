import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'; // Usamos Navigate para redirigir al usuario
import { ProductContext } from './ProductContext'; // Importamos el contexto para acceder a los datos del usuario

const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = useContext(ProductContext); // Obtenemos el usuario desde el contexto

  if (!user) {
    // Si no hay usuario (es decir, no está autenticado), lo redirigimos a la página de login
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.descripcion !== requiredRole) {
    // Si el usuario está autenticado pero no tiene el rol adecuado, lo redirigimos a la página principal
    return <Navigate to="/" />;
  }

  return children; // Si el usuario está autenticado y tiene el rol adecuado, mostramos el contenido de la ruta
};

export default PrivateRoute;
