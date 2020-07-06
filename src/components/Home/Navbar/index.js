import React from "react";
import Nav from "./stye";

import logo from "../../../assets/navbarlogo.png";

function Navbar() {
  return (
    <Nav>
      <div className="container">
        <div className="navbar-brand-logo">
          <img src={logo} alt="navbarlogo" />
        </div>

        <nav className="nav-links">
          <a href="/">Conecte - se</a>
          <a href="/">
            <button className="btn">Increva - se</button>
          </a>
        </nav>
      </div>
    </Nav>
  );
}

export default Navbar;
