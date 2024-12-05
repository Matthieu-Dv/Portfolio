import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutNav = () => {
  return (
    <div className="navigation_about">
      <ul>
        <NavLink
          to="/about"
          end
          className={({ isActive }) => (isActive ? 'active_about' : '')}
        >
          <li>Biographie</li>
        </NavLink>
        <NavLink
          to="/about/formations"
          className={({ isActive }) => (isActive ? 'active_about' : '')}
        >
          <li>Formations</li>
        </NavLink>
        <NavLink
          to="/about/expériences"
          className={({ isActive }) => (isActive ? 'active_about' : '')}
        >
          <li>Expérience</li>
        </NavLink>
        <NavLink
          to="/about/compétences"
          className={({ isActive }) => (isActive ? 'active_about' : '')}
        >
          <li>Compétences</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default AboutNav;
