import React from 'react';
// Data
import projects from '../projects.json';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectsList = () => {
  return (
    <>
      <section className="filter">
        <ul>
          <li>Front-End</li>
          <li>SEO</li>
        </ul>
      </section>
      <section>
        <div className="projets">
          {projects.map((project, index) => (
            <div key={index} className="projet">
              <div className="image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="texte">
                <div className="top">
                  {project.logo && (
                    <img src={project.logo} alt="Logo du projet" />
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
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{
                          fontSize: '21px',
                          color: 'black',
                          paddingTop: '2px',
                        }}
                        title="Lien vers le site"
                      />
                    </a>
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
