import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navigation">
      <div className="navigation-header">
        <h1>Matthieu Barilone | Portfolio</h1>
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="hamburger"></div>
        </button>
        <ul className={menuOpen ? 'open' : ''}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              A propos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projets"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
