import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../compenents/Navigation';

const Home = () => {
  return (
    <>
      <Navigation />
      <main className="home">
        <section className="hero">
          <h1>Bienvenue, je suis Matthieu Barilone</h1>
          <h2>Développeur Salesforce | En recherche d'alternance</h2>
          <p>
            Passionné par le développement et l'environnement Salesforce,
            j'apprends petit à petit le développement CRM et suis actuellement
            en recherche d'une alternance pour en apprendre davantage.
          </p>
        </section>
        <section className="about">
          <h2>À propos de moi</h2>
          <p>
            Développeur en sortie d'étude avec des notions en React et en
            technologies modernes du web. Mon objectif est de contribuer à des
            projets innovants en apportant des solutions efficaces et soignées.
            Durant une année entières, j'ai appris les bases et les notions
            avancé du développement web, notamment avec React. Mon intérêt pour
            React est né de sa flexibilité et de sa capacité à créer des
            interfaces utilisateur dynamiques et performantes. Au fil de mes
            projets, j'ai pu me spécialiser dans ce framework tout en acquérant
            une expérience pratique dans d'autres technologies comme Redux,
            TypeScript. Ces outils me permettent aujourd'hui de développer des
            applications web robustes, modulaires et évolutives. <br />{' '}
            Aujourd'hui, mon ambition est de progresser en me spécialisant dans
            le développement Salesforce, en apprenant et en maîtrisant les
            notions essentielles pour devenir un développeur Salesforce.
          </p>
        </section>
        <section className="skills">
          <h2>Compétences techniques</h2>
          <div className="competences">
            <ul>
              <li>✅ HTML5 / CSS3 / JavaScript / TypeScript</li>
              <li>✅ React / Redux</li>
              <li>✅ Git / GitHub</li>
              <li>✅ Responsive Design / Tailwind CSS</li>
              <li>✅ APIs REST</li>
            </ul>
            <ul>
              <li>✅ Administration Salesforce</li>
              <li>✅ Gestion des données </li>
              <li>✅ Personnalisation de l’interface Salesforce</li>
            </ul>
          </div>
        </section>
        <section className="projects">
          <h2>Mes Projets</h2>
          <p>
            {' '}
            Voir mes projets web ici :{' '}
            <NavLink to="/projets" style={{ color: '#9b84ff' }}>
              Mes projets
            </NavLink>
          </p>
          <p>
            Contact :{' '}
            <NavLink to="/contact" style={{ color: '#9b84ff' }}>
              Me contacter
            </NavLink>
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
