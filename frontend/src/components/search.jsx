import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "../styles/search.css";

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false); // Nuevo estado

  const books = [
    { id: 1, title: "Book 1", description: "This is the description of Book 1" },
    { id: 2, title: "Book 2", description: "This is the description of Book 2" },
    { id: 3, title: "Book 3", description: "This is the description of Book 3" },
  ];

  const handleSearch = () => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(results);
    setSearchPerformed(true); // Indica que se ha realizado una búsqueda
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div key={book.id} className="col-6 col-md-4 col-lg-3">
                  <div className="card book-card">
                    <img
                      src="https://via.placeholder.com/200x150"
                      alt={book.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text">{book.description}</p>
                      <button className="btn btn-primary btn-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              searchPerformed && ( // Solo muestra el mensaje si ya se realizó una búsqueda
                <p className="text-center">No books found.</p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
