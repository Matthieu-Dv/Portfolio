import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef(); // Utilisation de useRef pour manipuler le formulaire
  const [sucessMessage, setSucessMessage] = useState(''); // État pour le message de confirmation

  const sendEmail = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    emailjs
      .sendForm(
        'service_s0fttfn',
        'template_1ss37d9',
        form.current,
        '-LMrE7_oYMTsfwFPy'
      )
      .then(
        (result) => {
          console.log('Message envoyé :', result.text);
          setSucessMessage('Le message a été envoyé avec succès !');
          form.current.reset(); // Réinitialise les champs du formulaire

          // Efface le message après 5 secondes
          setTimeout(() => setSucessMessage(''), 5000);
        },
        (error) => {
          console.error("Erreur lors de l'envoi :", error.text);
          alert('Une erreur est survenue, veuillez réessayer.');
        }
      );
  };

  return (
    <section className="form-container">
      <h2>Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="top">
          <div className="champ">
            <label htmlFor="name">
              Nom<span className="asterix">*</span> :
            </label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="champ">
            <label htmlFor="firstname">
              Prénom<span className="asterix">*</span> :
            </label>
            <input type="text" id="firstname" name="firstname" required />
          </div>
        </div>

        <div className="bottom">
          <div className="champ">
            <label htmlFor="email">
              Adresse e-mail<span className="asterix">*</span> :
            </label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="champ">
            <label htmlFor="societe">Société :</label>
            <input type="text" id="societe" name="societe" />
          </div>
        </div>

        <div className="message">
          <label htmlFor="message">
            Message<span className="asterix">*</span> :
          </label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>

        <div className="bouton">
          <button type="submit">Envoyer</button>
          {sucessMessage && (
            <span className="success-message">{sucessMessage}</span>
          )}
        </div>
      </form>
    </section>
  );
};

export default Form;
