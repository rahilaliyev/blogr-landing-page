import React from "react";
import "./../design/Navbar.scss";
import logo from "./../images/logo.svg";

const Navbar = () => {
  return (
    <header>
      <div className="main-header">
        <nav>
          <div className="logo-list">
            <img src={logo} alt="logo" />
            <ul>
              <li>Product</li>
              <li>Company</li>
              <li>Connect</li>
            </ul>
          </div>
          <div className="nav-button">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </nav>
        <div className="header-content">
          <h1>A modern publishing platform</h1>
          <span>Grow your audience and build your online brand</span>
          <div className="header-buttons">
            <button>Start for free</button>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
