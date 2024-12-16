import React from 'react';
import Navigation from '../../compenents/Navigation';
import AboutNav from '../../compenents/AboutNav';
//Data
import competences from '../../competences.json';

const Competences = () => {
  return (
    <>
      <Navigation />
      <main className="pages">
        <AboutNav />
        <section className="competences">
          <h2>Mes Compétences</h2>
          <p className="competence-intro">
            Voici un aperçu de mes compétences techniques et des outils que
            j’utilise au quotidien pour concevoir des applications modernes et
            performantes.
          </p>
          <div className="page-competences">
            {competences.map((competence, index) => (
              <div key={index} className="competence">
                <img src={competence.img} alt={competence.alt} />
                <p className="title">{competence.title}</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${competence.percentage}%` }}
                  ></div>
                </div>
                <span className="percentage">{competence.percentage}%</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Competences;
