import React from 'react';
import Navigation from '../compenents/Navigation';
import Form from '../compenents/Form';

const Contact = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className="intro-contact">
          <h2>
            Vous avez un projet, une idée ou une question ? Remplissez ce
            formulaire et je reviendrai vers vous dans les plus brefs délais. Je
            suis ravi d'échanger avec vous ! <br />
            📬 Toutes les informations que vous partagez resteront
            confidentielles.
          </h2>
        </section>
        <Form />
      </main>
    </>
  );
};

export default Contact;
