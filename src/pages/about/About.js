import React from 'react';
import Navigation from '../../compenents/Navigation';
import AboutNav from '../../compenents/AboutNav';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navigation />
      <main className="pages">
        <AboutNav />
        <section className="biographie">
          <div className="biographie__content">
            <div className="biographie__image">
              <img
                src="/assets/img/about/exemple_photo.webp"
                alt="Profil de Matthieu Barilone"
              />
              <h2>Matthieu Barilone</h2>
              <span className="age">19 ans</span>
              <hr />
              <span className="profession">Développeur Salesforce</span>
              <div className="skills">
                <span>Administration Salesforce</span>
                <span>React</span>
                <span>JavaScript</span>
              </div>
              <div className="localisation">Île-de-France / à distance</div>
              <NavLink to="/contact" className="contact-button">
                Me Contacter
              </NavLink>
            </div>

            <div className="biographie__text">
              <h2>Biographie</h2>
              <p>
                Je suis Matthieu Barilone, passionné par l'environnement
                Salesforce, et par son développement, avec notamment Apex,
                Lightning Web Compenants. Récemment diplômé de la formation
                d’Intégrateur Web chez OpenClassrooms, j’ai acquis les
                compétences nécessaires pour transformer des maquettes en sites
                modernes, accessibles et performants, en utilisant des
                technologies comme React et Redux.
              </p>
              <p>
                Ce parcours d’une année m’a permis de développer mon sens du
                détail, de l’organisation et de la curiosité, des qualités
                essentielles dans ce métier. Aujourd’hui, je souhaite me
                spécialiser dans le développement Salesforce, une plateforme
                extrêmement puissante que j’apprécie particulièrement pour sa
                flexibilité, ses capacités d’automatisation et son écosystème
                riche, qui permettent de créer des solutions innovantes et
                adaptées aux besoins des entreprises. Je suis déterminé à
                perfectionner mes compétences, à collaborer avec des équipes
                inspirantes et à m’investir dans des projets qui me permettront
                de continuer à évoluer.
              </p>
              <p>
                Mon objectif est d’acquérir de l’expérience concrète avec une
                alternance en Salesforce tout en garantissant la qualité de
                chaque projet que je mène. Je m’engage à livrer des solutions
                rigoureuses, bien conçues et finies dans les règles de l’art.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
