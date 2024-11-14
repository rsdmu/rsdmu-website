// src/components/Header.js
import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';

const Header = () => (
  <header className="site-header">
    <nav className="navigation">
      <Link to="/">HOME</Link>
      <Link to="/bio/">BIO</Link>
      <Link to="/papers/">BOOKS</Link>
      <Link to="/projects/">PROJECTS</Link>
      <Link to="/contact/">CONTACT</Link>
    </nav>
  </header>
);

export default Header;
