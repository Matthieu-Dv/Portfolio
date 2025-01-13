import React, { useState } from 'react';
// Data
import projects from '../projects.json';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

const ProjectsList = () => {
  const [filter, setFilter] = useState(null);

  // Fonction pour assigner des couleurs selon le logo
  const getColor = (logo) => {
    switch (logo) {
      case 'Crypto-app':
        return '#04C9B9';
      case 'Kasa':
        return '#FF6060';
      case 'Portfolio':
        return 'White';
      case 'Nina Carducci':
        return 'White';
      case 'Argent-Bank':
        return '#5DAA72';
      case 'Booki':
        return '#0065FC';
      default:
        return 'black'; // Couleur par défaut
    }
  };

  // Filtrage des projets
  const filteredProjects = filter
    ? projects.filter((project) => project.type.includes(filter))
    : projects;

  return (
    <>
      <section className="filter">
        <ul>
          <li
            onClick={() => setFilter(null)}
            className={filter === null ? 'click' : ''}
          >
            Tous
          </li>
          <li
            onClick={() => setFilter('Front-End')}
            className={filter === 'Front-End' ? 'click' : ''}
          >
            Front-End
          </li>
          <li
            onClick={() => setFilter('SEO')}
            className={filter === 'SEO' ? 'click' : ''}
          >
            SEO
          </li>
        </ul>
      </section>
      <section>
        <div className="projets">
          {filteredProjects.map((project) => (
            <div key={project.id} className="projet">
              <div className="image">
                <img src={project.img} alt={project.alt || 'Image du projet'} />
              </div>
              <div className="texte">
                <div className="top">
                  {project.logo && (
                    <h2
                      style={{
                        color: getColor(project.logo),
                      }}
                    >
                      {project.logo}
                    </h2>
                  )}
                </div>
                <div className="bottom">
                  <p>{project.description}</p>
                  <hr />
                  <div className="langages">
                    {project.langage.map((lang, i) => (
                      <span key={i}>{lang}</span>
                    ))}
                  </div>
                  <div className="icon">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{ fontSize: '24px' }}
                          title="Lien vers le repo github"
                        />
                      </a>
                    )}
                    {project.site && (
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          style={{
                            fontSize: '21px',
                            paddingTop: '2px',
                          }}
                          title="Lien vers le site"
                        />
                      </a>
                    )}
                    {project.rapportOptimisation && (
                      <a
                        href={project.rapportOptimisation}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          style={{
                            fontSize: '21px',
                            paddingTop: '2px',
                          }}
                          title="Lien vers le rapport d'optimisation"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsList;
