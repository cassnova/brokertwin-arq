// import { useState } from "react";
import { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/logo.png";
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className="navbar">
      <div>
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="container-list-navbar">
        <div className="container-icon" id="mobile">
          {/* <i
            id="bar"
            className={`fas fa-bars ${
              clicked ? "fas fa-times" : "fas fa-bars"
            }`}
            onClick={() => setClicked(!clicked)}
          ></i> */}
          <FaBars className="container-icon__bars" onClick={() => setClicked(!clicked)}/>
        </div>

        <ul className={`${clicked ? "navbar__list--true" : "navbar__list"}`}>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              HOME
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              NOSOTROS
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              CASAS
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              DEPARTAMENTOS
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
