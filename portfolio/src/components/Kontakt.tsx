import React from 'react';

const Kontakt: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Kontakt</h2>
        <div className="contact-methods">
          <div className="contact-method">
            <span className="contact-label">Email</span>
            <span>aleksander.smaga@gmail.com</span>
          </div>
          <div className="contact-method">
            <span className="contact-label">Telefon</span>
            <span>+48 508 377 384</span>
          </div>
          <div className="contact-method">
            <span className="contact-label">Lokalizacja</span>
            <span>Oleśnica, Dolnośląskie, Polska</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;