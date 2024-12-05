import React from 'react';
import AboutNav from '../../compenents/AboutNav';
import Navigation from '../../compenents/Navigation';
import formations from '../../formations.json';

const Formations = () => {
  return (
    <>
      <Navigation />
      <main className="pages">
        <AboutNav />
        <section className="formations">
          {formations.map((formation) => (
            <div key={formation.id} className="formation">
              <div className="formation__top">
                <div>
                  <img src={formation.img} alt="" />
                </div>
                <div>
                  <h2>{formation.formation}</h2>
                  <div>
                    <p>{formation.niveau}</p>
                    <p>{formation.lieu}</p>
                    <p>{formation.date}</p>
                    <p>{formation.ecole}</p>
                  </div>
                </div>
              </div>
              <hr />

              <div className="formation__middle">
                <p>{formation.description}</p>
              </div>
              <hr />
              <div className="formation__bottom">
                <p>{formation.type}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Formations;
