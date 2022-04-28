import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [categories] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="main-wrapper">
      <Header
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <main>
        {currentCategory.name === 'About' && <About />}
        {currentCategory.name === 'Portfolio' && <Portfolio />}
        {currentCategory.name === 'Contact' && <ContactForm />}
        {currentCategory.name === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
