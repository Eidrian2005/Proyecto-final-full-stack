import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "../styles/search.css";
import { Getproductos } from "../services/GetProductos";

const Search = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Getproductos()
      .then((data) => {
        setRecords(data);
        setFilteredRecords(data); // Mostrar todos inicialmente
      })
      .catch((error) => {
        console.error("Error fetching products", error);
      });
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredRecords(records); // Si no hay búsqueda, mostrar todos
      return;
    }

    const filtered = records.filter(
      (product) =>
        product.nombre_producto &&
        product.nombre_producto.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecords(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="container search-page">
      <div className="row justify-content-center my-4">
        <div className="col-md-8">
          <div className="search-bar d-flex align-items-center">
            <button className="btn back-btn" onClick={handleBack}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="btn search-btn" onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
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
              <p className="text-center">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
