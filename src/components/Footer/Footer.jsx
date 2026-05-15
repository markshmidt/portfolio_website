import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p>&copy;{new Date().getFullYear()} Mariia Shmidt.</p>
    </div>
  </footer>
);

export default Footer;
