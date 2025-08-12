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
   { img: spoon, name: "Serving Spoon", price: "Ksh 200" },
  { img: plates, name: "Dinner Plates", price: "Ksh 1,000" },
  { img: cup, name: "Tea Cup", price: "Ksh 150" },
  { img: pot, name: "Cooking Pot", price: "Ksh 2,500" },
  { img: bowl, name: "Mixing Bowl", price: "Ksh 500" },
  { img: tray, name: "Serving Tray", price: "Ksh 600" },
  { img: glass, name: "Glass Cup", price: "Ksh 300" },
  { img: jug, name: "Water Jug", price: "Ksh 800" },
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
