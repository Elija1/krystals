// src/assets/Utensils.jsx
import React from "react";
import spoon from "./spoon.jpg";
import plates from "./plates.jpg";
import cup from "./cup.jpg";
import pot from "./pot.jpg";
import bowl from "./bowl.jpg";
import tray from "./tray.jpg";
import glass from "./glass.jpg";
import jug from "./jug.jpg";

import "./Utensils.css";

const utensils = [
   { img: spoon, name: "Serving Spoon", price: "Spoon, taste the love." },
  { img: plates, name: "Dinner Plates", price: "Plate, where meals live." },
  { img: cup, name: "Tea Cup", price: "Cup, sip the moments." },
  { img: pot, name: "Cooking Pot", price: "Pot, cook with heart." },
  { img: bowl, name: "Mixing Bowl", price: "Bowl, hold the warmth." },
  { img: tray, name: "Serving Tray", price: "Tray, serve with love." },
  { img: glass, name: "Glass Cup", price: "Glass, pour the joy" },
  { img: jug, name: "Water Jug", price: "Jug, pour the joy." },
];

const Utensils = () => {
  return (
    <div className="utensils-container">
      <div className="utensils-banner">
        <h2 className="utensils-title">Utensils</h2>
        <p className="utensils-subtitle">
          Discover quality kitchen essentials designed for durability and elegance.
        </p>
      </div>

      <div className="utensils-grid">
        {utensils.map((item, index) => (
          <div className="utensils-card" key={index}>
            <img src={item.img} alt={item.name} className="utensils-image" />
            <h3 className="utensils-name">{item.name}</h3>
            <p className="utensils-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Utensils;
