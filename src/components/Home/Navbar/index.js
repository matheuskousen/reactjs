import React from "react";
import StyledNav from "./style";

import logo from "../../../assets/navbarlogo.png";

const Navbar = () => {
  return (
    <StyledNav>
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
    </StyledNav>
  );
};

export default Navbar;
