// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Wrappr Logo" />
        <span>Wrappr</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gifts">Gifts</Link></li>
        <li><Link to="/recipients">Recipients</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
