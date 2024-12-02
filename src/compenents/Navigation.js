import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <h1>Matthieu Barilone | Porfolio</h1>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to="/competences"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <li>Compétences</li>
        </NavLink>
        <NavLink
          to="/projets"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <li>Projets</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
