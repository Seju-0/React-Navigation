// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
      <Link to="/" style={{ margin: '10px', textDecoration: 'none', color: 'black' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px', textDecoration: 'none', color: 'black' }}>About</Link>
      <Link to="/contact" style={{ margin: '10px', textDecoration: 'none', color: 'black' }}>Contact</Link>
      <Link to="/counter" style={{ margin: '10px', textDecoration: 'none', color: 'black' }}>Counter</Link>
    </nav>
  );
};

export default NavBar;
