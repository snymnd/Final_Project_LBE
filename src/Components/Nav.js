import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="#b71c1c red darken-4" id="top">
      <div className="nav-wrapper container #b71c1c red darken-4">
        <Link to="/" className="brand-logo">Movie Finder</Link>
      </div>
    </nav>
  )
}

export default Nav;
