import React from 'react';
import Navigation from '../compenents/Navigation';
import ProjectsList from '../compenents/ProjectsList';
import IntroPortfolio from '../compenents/IntroPortfolio';

const Portfolio = () => {
  return (
    <>
      <Navigation />
      <main>
        <IntroPortfolio />
        <ProjectsList />
      </main>
    </>
  );
};

export default Portfolio;
