// src/components/About.js

import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>ABOUT ME</h2>
      <div className="divider">
        <span className="line" />
        <span className="icon">👨‍💻</span>
        <span className="line" />
      </div>
      <div className="about-content">
        <p>
          Kenalin, aku adalah salah satu mahasiswi di Universitas Satya Terra Bhinneka. 
          Aku, seorang mahasiswi Informatika yang percaya bahwa setiap baris kode bisa membuka peluang tanpa batas.
          Tak hanya bermimpi, aku belajar Informatika untuk membuat ide-ide menjadi kenyataan.
          Informatika mengajarkan bahwa setiap masalah pasti ada solusinya.
          Here to build, to learn, and to grow.
        </p>
        <p>
          Dari Informatika aku belajar bahwa kegagalan dalam coding bukanlah akhir, tapi awal dari pemahaman.
          Informatika bukan hanya tentang belajar menulis kode. Ini tentang belajar berpikir secara berbeda,
          mendekati masalah dengan kreativitas, dan menciptakan solusi yang bisa mengubah kehidupan banyak orang. 
          Informatika mengajarkan bahwa kemajuan tercipta satu langkah demi satu langkah.
        </p>
      </div>
    </section>
  );
};

export default About;
