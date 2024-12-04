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
  // État pour le filtre

  // Fonction pour filtrer les projets
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
          </li>{' '}
          {/* Affiche tous les projets */}
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
          {filteredProjects.map((project, index) => (
            <div key={index} className="projet">
              <div className="image">
                <img src={project.img} alt={project.alt || 'Image du projet'} />
              </div>
              <div className="texte">
                <div className="top">
                  {project.logo && (
                    <img src={project.logo} alt={project.logoAlt} />
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
