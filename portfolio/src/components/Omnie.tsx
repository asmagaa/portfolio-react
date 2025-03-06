import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">O mnie</h2>
        <div className="about-content">
          <img 
            src="https://avatars.githubusercontent.com/u/165085833?v=4&size=64" 
            alt="oto ja" 
            className="profile-image"
          />
          <div className="about-text">
            <p>
              Jestem Aleksander Smaga, uczniem szkoły średniej - technikum "Elektroniczne Zakłady Naukowe" we Wrocławiu. Jestem na profilu programisty i rozwijam się w tej dziedzinie. Językami programowania, którymi się zajmuję na codzień to C++, Java (niedawno zaczęliśmy), C#, HTML, CSS, JavaScript oraz TypeScript.
            </p>
            <p>
              Aktualnie poszukuję możliwości rozwoju jako programista, gdzie mógłbym 
              rozwijać swoje umiejętności i uczyć się od doświadczonych specjalistów.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;