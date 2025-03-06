import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} <a href='https://github.com/asmagaa'>Asmagaa</a> 🇵🇱</p>
      </div>
    </footer>
  );
};

export default Footer;