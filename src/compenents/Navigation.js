import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="navigation">
      <h1>Matthieu Barilone | Porfolio</h1>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <li>A propos</li>
        </NavLink>
        <NavLink
          to="/projets"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <li>Projets</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Navigation;
