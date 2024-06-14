import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Wrappr Logo" className="navbar-logo" />
        <h1>Wrappr</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gifting">Gifting</Link></li>
        <li><Link to="/profile">User Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
