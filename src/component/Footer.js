import React from "react";
import Logo from "../images/logo.svg";
import "../design/Footer.scss";
const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <img src={Logo} alt="Logo"></img>
        </li>
        <li>
          <ul>
            Product
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </li>
        <li>
          <ul>
            Company
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </li>
        <li>
          <ul>
            Connect
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Linkedin</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
