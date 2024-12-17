import "../styles/AdminHeader.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const AdminHeader = ({ onSearch, onGoHome }) => {

  const [notificationCount, setNotificationCount] = useState(0);


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
      <div className="notification-container">
        <FontAwesomeIcon
          icon={notificationCount > 0 ? faEnvelope : faEnvelopeRegular}
          className="notification-icon"
        />
        {notificationCount > 0 && (
          <span className="notification-badge">{notificationCount}</span>
        )}
      </div>
      <Link to="/" className="btn btn-primary home-btn" onClick={onGoHome}>
        <FontAwesomeIcon icon={faHome} className="me-2" />
        Página Principal
      </Link>
    </header>
  );
};

export default AdminHeader;
