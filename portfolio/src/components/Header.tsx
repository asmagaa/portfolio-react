import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="logo">Moje Portfolio</div>
        <nav>
          <ul>
            <li><a href="#about">O mnie</a></li>
            <li><a href="#skills">Umiejętności</a></li>
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;