// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>CONTACT ME</h2>
        <div className="contact-info">
          <p>📍 Jl. Sei Batang Hari, Kota Medan</p>
          <p>Provinsi Sumatera Utara, Indonesia</p>
          <p>Email: <a href="mailto:sarahmichelle010905@gmail.com">sarahmichelle010905@gmail.com</a></p>
        </div>
        <div className="contact-icons">
          <a
            href="https://www.instagram.com/thisragh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/+6281264532228" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="sarahmichelle010905@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;