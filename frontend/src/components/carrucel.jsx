import React, { useState, useEffect, useCallback } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../styles/carrucel.css";
import { GetProducto } from "../services/GetProducto";

function DarkVariantExample() {
  const [productos, setProductos] = useState([]);
  const [filtradoDestacado, setFiltradoDestacado] = useState([]);

  const loadProducts = useCallback(async () => {
    try {
      const response = await GetProducto();
      setProductos(response);

      // Filtrado por id_categoria === 1 (ajusta según tu base de datos)
      const destacados = response
        .filter((producto) => producto.id_categoria === 1) // Filtra productos destacados
        .slice(0, 4); // Limita a un máximo de 4 productos

      setFiltradoDestacado(destacados);
    } catch (error) {
      console.error('Error fetching Products', error);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <Carousel id='carrucel' data-bs-theme="dark">
      {filtradoDestacado.length > 0 ? (
        filtradoDestacado.map((producto, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={producto.imagen || 'placeholder-image.jpg'} // Imagen de respaldo
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h5>{producto.nombre_producto || "Producto Destacado"}</h5>
              <p>{producto.descripcion || "Descripción del producto."}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      ) : (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="placeholder-image.jpg"
            alt="No hay productos"
          />
          <Carousel.Caption>
            <h5>No hay productos destacados</h5>
            <p>Pronto actualizaremos nuestro catálogo.</p>
          </Carousel.Caption>
        </Carousel.Item>
      )}
    </Carousel>
  );
}

export default DarkVariantExample;
