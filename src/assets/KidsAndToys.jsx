// src/assets/KidsAndToys.jsx
import React from "react";
import toy1 from "./toy1.jpg";
import toy2 from "./toy2.jpg";
import toy3 from "./toy3.jpg";
import toy4 from "./toy4.jpg";
import toy5 from "./toy5.jpg";
import toy6 from "./toy6.jpg";
import toy7 from "./toy7.jpg";
import toy8 from "./toy8.jpg";
import toy9 from "./toy9.jpg";
import toy10 from "./toy10.jpg";
import toy11 from "./toy11.jpg";
import toy12 from "./toy12.jpg";

import "./KidsAndToys.css";

const KidsAndToys = () => {
  return (
    <div className="toys-container">
      <div className="toys-banner">
        <h2 className="toys-title">Kids and Toys</h2>
        <p className="toys-subtitle">
          Discover a magical world of fun and learning! Our toy collection is carefully selected to spark creativity,
          boost imagination, and create unforgettable childhood moments.
        </p>
      </div>

      <div className="toys-grid">
        {[
          toy1, toy2, toy3, toy4, toy5, toy6,
          toy7, toy8, toy9, toy10, toy11, toy12
        ].map((img, index) => (
          <div className="toys-card" key={index}>
            <img src={img} alt="Toy" className="toys-image" />
            <h3 className="toys-name">Exciting Toy</h3>
            <p className="toys-price">From Ksh {(index + 1) * 500 + 1000}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsAndToys;
