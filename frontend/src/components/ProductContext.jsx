import React, { createContext, useState, useCallback } from "react";
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

  return (
    <ProductContext.Provider value={{ productos, loadProducts, setProductos }}>
      {children}
    </ProductContext.Provider>
  );
}
