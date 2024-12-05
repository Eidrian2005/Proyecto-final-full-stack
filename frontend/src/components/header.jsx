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
              <Link as={Link} to="/" className="nav-link">
                Homepage
              </Link>
            </li>
            <li className="nav-item">
              <a onClick={handlesearch} className="nav-link">
                Search
              </a>
            </li>
            <li className="nav-item">
              <Link as={Link} to="/SobreNosotros" className="nav-link">
                About Us
              </Link>
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
