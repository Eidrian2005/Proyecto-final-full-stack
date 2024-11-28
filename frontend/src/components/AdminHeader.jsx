import "../styles/AdminHeader.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome } from "@fortawesome/free-solid-svg-icons";

const AdminHeader = ({ onSearch, onGoHome }) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  return (
    <header className="admin-header bg-dark text-white d-flex align-items-center justify-content-between px-4 py-2">
      <h1 className="header-title">Administrador</h1>
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Buscar..."
          onKeyDown={handleSearch}
        />
      </div>
      <button className="btn btn-primary home-btn" onClick={onGoHome}>
        <FontAwesomeIcon icon={faHome} className="me-2" />
        Página Principal
      </button>
    </header>
  );
};

export default AdminHeader;
