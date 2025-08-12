import React from "react";
import chair from "./chair.jpeg";
import sofa from "./sofa.jpg";
import wardrobe from "./wardrobe.jpg";
import table from "./table.jpg";
import bed from "./bed.jpg";
import stool from "./stool.jpg";
import drawer from "./drawer.jpg";
import tvstand from "./tvstand.jpg";

import "./Furniture.css"; // ✅ This path is correct if CSS is in the same folder

const items = [
   { img: chair, name: "Comfortable Chair", price: "Ksh 5,000" },
  { img: sofa, name: "Modern Sofa", price: "Ksh 25,000" },
  { img: wardrobe, name: "Wooden Wardrobe", price: "Ksh 18,000" },
  { img: table, name: "Dining Table", price: "Ksh 12,000" },
  { img: bed, name: "King Size Bed", price: "Ksh 30,000" },
  { img: stool, name: "Wooden Stool", price: "Ksh 2,500" },
  { img: drawer, name: "Chest of Drawers", price: "Ksh 9,000" },
  { img: tvstand, name: "TV Stand", price: "Ksh 8,500" },
];

const Furniture = () => {
  return (
    <div className="furniture-container">
      <h2 className="furniture-title">Furniture</h2>
      <p className="furniture-subtitle">Elegant and affordable pieces for every home.</p>
      <div className="furniture-grid">
        {items.map((item, index) => (
          <div key={index} className="furniture-card">
            <img src={item.img} alt={item.name} className="furniture-image" />
            <h3 className="furniture-name">{item.name}</h3>
            <p className="furniture-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furniture;
