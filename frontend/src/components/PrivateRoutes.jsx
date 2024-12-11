  // components/PrivateRoute.js
  import React, { useContext } from 'react';
  import { Navigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';
  
const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = useContext(ProductContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.descripcion !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};
  
  export default PrivateRoute;