import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

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
          {/* Lien vers GitHub */}
          <li>
            <a
              href="https://github.com/Matthieu-Dv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="Lien vers Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          {/* Lien vers LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/matthieu-barilone-00620a2a4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="Lien vers LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          {/* Lien pour télécharger le CV */}
          <li>
            <a
              href="/assets/CV_Matthieu_Barilone.pdf"
              download
              aria-label="Télécharger le CV"
              title="Lien pour télécharger le CV"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </li>
          {/* Lien pour envoyer un email */}
          <li>
            <NavLink
              to="/contact"
              aria-label="Me contacter par mail"
              title="Me contacter"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutNav;
