import React from 'react';
import AboutNav from '../../compenents/AboutNav';
import Navigation from '../../compenents/Navigation';
import formations from '../../formations.json';
//Font
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faSchool,
  faLocationDot,
  faScroll,
} from '@fortawesome/free-solid-svg-icons';

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
                <div className="image">
                  <img src={formation.img} alt="" />
                </div>
                <div className="bloc-right">
                  <h2>{formation.formation}</h2>
                  <div className="information">
                    <span>
                      <FontAwesomeIcon icon={faSchool} />
                      {formation.ecole}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCalendar} />
                      {formation.date}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faScroll} />
                      {formation.niveau}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} />
                      {formation.lieu}
                    </span>
                  </div>
                </div>
              </div>
              <hr />

              <div className="formation__middle">
                <p>{formation.description}</p>
              </div>
              <hr />
              <div className="formation__bottom">
                {formation.notions.map((notion, index) => (
                  <span key={index}>{notion}</span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Formations;
