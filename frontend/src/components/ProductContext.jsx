import React, { createContext, useState, useCallback, useContext, useEffect } from "react";
import { decode } from "jwt-js-decode";
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

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        // Verificar si el token tiene el formato correcto
        if (storedToken.split(".").length === 3) {
          const { payload } = decode(storedToken);

          // Validar si el token ha expirado
          const isTokenValid = payload.exp * 1000 > Date.now();
          if (!isTokenValid) {
            console.warn("Token expirado, eliminando...");
            localStorage.removeItem("token");
          } else {
            setUser({ ...payload, token: storedToken });
          }
        } else {
          console.error("Formato de token inválido");
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <ProductContext.Provider value={{ productos, loadProducts, setProductos, user, login, logout }}>
      {children}
    </ProductContext.Provider>
  );
}
