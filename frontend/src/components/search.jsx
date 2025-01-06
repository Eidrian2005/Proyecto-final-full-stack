import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom"; // Para la navegación entre páginas
import "../styles/search.css"; // Importa los estilos para esta página
import { Getproductos } from "../services/GetProductos"; // Función para obtener productos

const Search = () => {
  const navigate = useNavigate(); // Hook para navegar a otras páginas
  const [records, setRecords] = useState([]); // Estado para almacenar los productos obtenidos
  const [filteredRecords, setFilteredRecords] = useState([]); // Estado para almacenar los productos filtrados
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  // Este efecto carga los productos cuando el componente se monta
  useEffect(() => {
    Getproductos()
      .then((data) => {
        setRecords(data); // Guarda los productos en el estado
        setFilteredRecords(data); // Muestra todos los productos al principio
      })
      .catch((error) => {
        console.error("Error fetching products", error); // Muestra un error si falla la obtención
      });
  }, []); // Solo se ejecuta al montar el componente

  // Función para filtrar productos según lo que escriba el usuario
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredRecords(records); // Si no hay búsqueda, muestra todos los productos
      return;
    }

    const filtered = records.filter(
      (product) =>
        product.nombre_producto &&
        product.nombre_producto.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra por nombre
    );
    setFilteredRecords(filtered); // Actualiza los productos filtrados
  };

  // Función que se activa cuando el usuario presiona "Enter" en el campo de búsqueda
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Función para volver a la página principal al hacer clic en el botón de "volver"
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/"); // Redirige a la página principal
  };

  return (
    <div className="container search-page">
      {/* Barra de búsqueda */}
      <div className="row justify-content-center my-4">
        <div className="col-md-8">
          <div className="search-bar d-flex align-items-center">
            <button className="btn back-btn" onClick={handleBack}>
              <i className="fa-solid fa-arrow-left"></i> {/* Icono para "volver" */}
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
              onKeyPress={handleKeyPress} // Detecta si se presiona "Enter"
            />
            <button className="btn search-btn" onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i> {/* Icono de búsqueda */}
            </button>
          </div>
        </div>
      </div>

      {/* Resultados de la búsqueda */}
      <div className="row">
        <div className="col-12">
          <h4 className="text-start">Search Results</h4>
          <div className="row g-1">
            {filteredRecords.length > 0 ? (
              filteredRecords.map((d) => (
                <div key={d.id} className="col-6 col-md-4 col-lg-3">
                  <div className="card book-card">
                    <img
                      src={d.imagen || "https://via.placeholder.com/200x150"}
                      alt={d.nombre_producto}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{d.nombre_producto}</h5>
                      <p className="card-text">{d.descripcion}</p>
                      <button className="btn btn-primary btn-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No products found.</p> // Si no hay productos, muestra este mensaje
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
