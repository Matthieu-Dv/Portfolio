import React from 'react';
import Navigation from '../../compenents/Navigation';
import AboutNav from '../../compenents/AboutNav';

const About = () => {
  return (
    <>
      <Navigation />
      <main className="pages">
        <AboutNav />
        Biographie{' '}
      </main>
    </>
  );
};

export default About;
