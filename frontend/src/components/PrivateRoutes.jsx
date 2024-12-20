  // components/PrivateRoute.js
  import React, { useContext } from 'react';
  import { Navigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';
  
const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = useContext(ProductContext);

  if (!user) {
    // No autenticado
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.descripcion !== requiredRole) {
    // Autenticado pero sin rol adecuado
    return <Navigate to="/" />;
  }

  return children; // Autenticado y con rol adecuado
};
export default PrivateRoute;