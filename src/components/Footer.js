import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li style={{ display: "flex", alignItems: "flex-end" }}>
          <a style={{ fontSize: "12px", fontAeight: "bold" }}>
            Copyright © 2022 JamiTech Energy Solution Limited. All Rights
            Reserved
          </a>
        </li>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
      <center></center>
    </div>
  );
};

export default Footer;
