import React, { createContext, useState, useCallback, useContext, useEffect  } from "react";
import { decode } from 'jwt-js-decode';
import { Getproductos } from "../services/GetProductos";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [productos, setProductos] = useState([]);

  const loadProducts = useCallback(async () => {
    try {
      const response = await Getproductos();
      setProductos(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);


    // Rutas privadas
  const [user, setUser] = useState(null); // Estado del usuario (null si no está autenticado)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const { payload } = decode(token); // Decodifica el token y extrae el payload
      setUser({
        descripcion: payload.descripcion, // Guarda el rol del usuario
        nombre: payload.nombre,           // Guarda el nombre u otros datos
      });
    }
  }, []);
  

  const logout = () => {
    setUser(null);  // Elimina los datos del usuario al cerrar sesión
    localStorage.removeItem('token');  // Elimina el token del localStorage
  };

  const login = (userData) => {
    setUser(userData);  // Guarda los datos del usuario al iniciar sesión
  };


  return (
    <ProductContext.Provider value={{ productos, loadProducts, setProductos , user, login, logout}}>
      {children}
    </ProductContext.Provider>
  );
}
