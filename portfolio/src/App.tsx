import React from 'react';
import Header from './components/Header';
import About from './components/Omnie';
import Skills from './components/Skills';
import Contact from './components/Kontakt';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;