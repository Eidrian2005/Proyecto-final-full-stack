import React, { createContext, useState, useCallback, useContext, useEffect  } from "react";
import { decode } from 'jwt-js-decode';
import { Getproductos } from "../services/GetProductos";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [user, setUser] = useState(null); 
  const loadProducts = useCallback(async () => {
    try {
      const response = await Getproductos();
      setProductos(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);


    // Rutas privadas

    const login = (userData) => {
      setUser(userData);
      localStorage.setItem("token", userData.token); // Guarda solo el token en el localStorage
    };

  const logout = () => {
    setUser(null);  // Elimina los datos del usuario al cerrar sesión
    localStorage.removeItem('token');  // Elimina el token del localStorage
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        // Decodifica el token para extraer el payload
        const { payload } = decode(storedToken);

        // Opcional: valida si el token ha expirado
        const isTokenValid = payload.exp * 1000 > Date.now();
        if (!isTokenValid) {
          localStorage.removeItem("token");
        } else {
          setUser({ ...payload, token: storedToken }); // Guarda el payload y el token en el estado
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token"); // Elimina el token si está corrupto
      }
    }
  }, []);



  return (
    <ProductContext.Provider value={{productos, loadProducts, setProductos, user, login, logout}}>
      {children}
    </ProductContext.Provider>
  );
}
