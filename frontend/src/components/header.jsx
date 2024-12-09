  import React from "react";
  import "../styles/header.css"
  import {Link, useNavigate} from 'react-router-dom'
  import logoTipo from '../img/logo.png'
  


  const Header = () => {
    const navigate = useNavigate()

    const handlesearch = (e) => {
      
      navigate("/search")
    }

    return (
      <header className="header">
        
         <img className='image' src={logoTipo} alt="" />
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
              <Link as={Link} to="/Contactanos" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item cart">
              <Link as={Link} to="/carrito" className="nav-link">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header;
