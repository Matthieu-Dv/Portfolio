import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutNav = () => {
  return (
    <div className="header_page">
      <div className="navigation_about_top">
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
      <div className="navigation_about_bottom">
        <ul>
          <li>vfo</li>
          <li>vfo</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutNav;
