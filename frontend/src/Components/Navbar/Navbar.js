import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  };
  const signbutton = () => {
    window.location.href = "/signup";
  };
  const loginbutton = () => {
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="assets/LogoAI1.png" alt="AI Facial Analysis Logo" />
        <a className="title" href="/">
          SKINANALYZER
        </a>
      </div>
      <ul className="navbar-links">
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
      </ul>
      <div className="theme-toggle-container">
        <button className="auth-button" onClick={signbutton}>
          Signup
        </button>
        <button className="auth-button" onClick={loginbutton}>
          Login
        </button>
        <label className="theme-toggle-switch">
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
