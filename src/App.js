// src/App.js

import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Hobby from './components/Hobby';
import Contact from './components/Contact';

import './components/Home.css';
import './components/About.css';

function App() {
  return (
    <div className="App">
      <Home />
      <section id="about">
        <About />
      </section>
      <section id="hobby">
        <Hobby />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
