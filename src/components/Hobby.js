// src/components/Hobby.js
import React from 'react';
import './Hobby.css';

function Hobby() {
  return (
    <section className="hobby-section">
      <h2>Hobby</h2>
      <div className="hobby-list">
        <div className="hobby-card">
          <i className="fas fa-book-reader"></i>
          <h3>Membaca Buku</h3>
          <p>Membaca dapat meringankan beban saya dengan cerita cerita yang menarik.</p>
        </div>
        <div className="hobby-card">
          <i className="fas fa-television"></i>
          <h3>Menonton</h3>
          <p>Menonton juga dapat menghibur hari-hari saya yang berat. Saya senang menonton drama.</p>
        </div>
        <div className="hobby-card">
          <i className="fas fa-music"></i>
          <h3>Mendengarkan Musik</h3>
          <p>Menikmati musik untuk meningkatkan fokus dan relaksasi.</p>
        </div>
      </div>
    </section>
  );
}

export default Hobby;
