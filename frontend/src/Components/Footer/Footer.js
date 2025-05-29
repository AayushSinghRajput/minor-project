import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
        <p className="footer-credit">
          &copy; {new Date().getFullYear()} SkinAlyzer. All rights reserved.
        </p>
      </div>
      <div className="footer-content">
        <div className="footer-content-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/service">Service</a>
          </li>
          <li>
            <a href="/product">Products</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </div>
        <div className="footer-social-media-links">
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Linkedin</a>
          </li>
          <li>
            <a href="#">Thread</a>
          </li>
        </div>
        <div className="footer-login">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">Sign</a>
          </li>
          <li>
            <a href="/signout">Signout</a>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
