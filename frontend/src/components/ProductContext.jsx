import React, { createContext, useState, useCallback, useEffect } from "react";
import { decode } from "jwt-js-decode";
import Cookies from "js-cookie";
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
    Cookies.set("token", userData.token, { expires: 7, secure: true });
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("token");
  };

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) {
      try {
        if (storedToken.split(".").length === 3) {
          const { payload } = decode(storedToken);
          const isTokenValid = payload.exp * 1000 > Date.now();
          if (!isTokenValid) {
            console.warn("Token expirado, eliminando...");
            Cookies.remove("token");
          } else {
            setUser({ ...payload, token: storedToken });
          }
        } else {
          console.error("Formato de token inválido");
          Cookies.remove("token");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        Cookies.remove("token");
      }
    }
  }, []);

  return (
    <ProductContext.Provider value={{ productos, loadProducts, setProductos, user, login, logout }}>
      {children}
    </ProductContext.Provider>
  );
}
