// src/components/Home.js

import React from "react";
import "./Home.css";
import sarah from '../assets/sarah.jpg'

const Home = () => {
  return (
    <section className="home-section">
      <nav className="navbar">
        <div className="logo">PORTFOLIO</div>
        <ul className="nav-links">
          <li><a href="#portfolio">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#hobby">HOBBY</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>

      <div className="home-content">
        <img
          src={sarah}
          alt="Profile"
          className="profile-img"
        />
        <h1>Hellooo, I'm Sarah Michelle Eunike Hutapea.</h1>
        <p>Welcome to my Simple Portfolio. Im a girl who loves Bangtan Sonyeondan.</p>
      </div>
    </section>
  );
};

export default Home;
