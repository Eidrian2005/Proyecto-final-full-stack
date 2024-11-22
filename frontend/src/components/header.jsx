  import React from "react";
  import "../styles/header.css"
  import {Link, useNavigate} from 'react-router-dom'
  const Header = () => {
    const navigate = useNavigate()

    const handlesearch = (e) => {
      
      navigate("/search")
    }

    return (
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#homepage" className="nav-link">
                Homepage
              </a>
            </li>
            <li className="nav-item">
              <a href="#search" onClick={handlesearch} className="nav-link">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-us" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#news" className="nav-link">
                News
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item cart">
              <a href="#cart" className="nav-link">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header;
