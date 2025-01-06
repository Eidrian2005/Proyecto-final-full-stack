import React, { createContext, useState, useCallback, useEffect } from "react";
import { decode } from "jwt-js-decode"; // Para decodificar el token JWT
import Cookies from "js-cookie"; // Para trabajar con cookies en el navegador
import { Getproductos } from "../services/GetProductos"; // Para obtener los productos desde el servidor

export const ProductContext = createContext(); // Creamos el contexto para compartir datos en toda la aplicación

export function ProductProvider({ children }) {
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario (si está logueado)

  // Función para cargar los productos desde el servidor
  const loadProducts = useCallback(async () => {
    try {
      const response = await Getproductos(); // Llamamos al servicio para obtener los productos
      setProductos(response); // Guardamos los productos en el estado
    } catch (error) {
      console.error("Error fetching products:", error); // Si hay un error, lo mostramos en consola
    }
  }, []); // Solo se ejecuta una vez cuando se monta el componente

  // Función para hacer login y guardar los datos del usuario y el token en cookies
  const login = (userData) => {
    setUser(userData); // Guardamos los datos del usuario en el estado
    Cookies.set("token", userData.token, { expires: 7, secure: true }); // Guardamos el token en una cookie
  };

  // Función para hacer logout y eliminar el usuario y el token
  const logout = () => {
    setUser(null); // Limpiamos el estado del usuario
    Cookies.remove("token"); // Eliminamos el token de las cookies
  };

  // useEffect para verificar si hay un token guardado al cargar la página
  useEffect(() => {
    const storedToken = Cookies.get("token"); // Obtenemos el token de las cookies
    if (storedToken) {
      try {
        // Si el token tiene el formato correcto (3 partes)
        if (storedToken.split(".").length === 3) {
          const { payload } = decode(storedToken); // Decodificamos el token
          const isTokenValid = payload.exp * 1000 > Date.now(); // Verificamos si el token no ha expirado
          if (!isTokenValid) {
            console.warn("Token expirado, eliminando..."); // Si el token ha expirado, lo eliminamos
            Cookies.remove("token");
          } else {
            setUser({ ...payload, token: storedToken }); // Si el token es válido, lo guardamos en el estado
          }
        } else {
          console.error("Formato de token inválido"); // Si el token no tiene el formato correcto, lo eliminamos
          Cookies.remove("token");
        }
      } catch (error) {
        console.error("Error decoding token:", error); // Si hay un error al decodificar el token, lo eliminamos
        Cookies.remove("token");
      }
    }
  }, []); // Solo se ejecuta una vez al cargar la página

  return (
    <ProductContext.Provider value={{ productos, loadProducts, setProductos, user, login, logout }}>
      {children} {/* Aquí se renderiza el contenido de los componentes hijos */}
    </ProductContext.Provider>
  );
}
