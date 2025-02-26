import React from 'react';
import AboutNav from '../../compenents/AboutNav';
import Navigation from '../../compenents/Navigation';

const Experience = () => {
  return (
    <>
      <Navigation />
      <main className="pages">
        <AboutNav />
        <div className="experience">
          <h2>
            À la recherche d'un contrat d'alternance dans l'environnement
            Salesforce, disponible immédiatement.
          </h2>
        </div>
      </main>
    </>
  );
};

export default Experience;
