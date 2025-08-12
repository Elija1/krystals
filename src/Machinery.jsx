// src/Machinery.jsx
import React from "react";
import tool1 from "./assets/tool1.jpg";
import tool2 from "./assets/tool2.jpg";
import tool3 from "./assets/tool3.jpg";
import tool4 from "./assets/tool4.jpg";
import tool5 from "./assets/tool5.jpg";
import tool6 from "./assets/tool6.jpg";
import tool7 from "./assets/tool7.jpg";
import tool8 from "./assets/tool8.jpg";
import "./assets/Machinery.css";


const tools = [
  { img: tool1, name: "Heavy Duty Drill", price: "Ksh 20,000" },
  { img: tool2, name: "Electric Saw", price: "Ksh 18,500" },
  { img: tool3, name: "Industrial Grinder", price: "Ksh 25,000" },
  { img: tool4, name: "Water Pump", price: "Ksh 15,000" },
  { img: tool5, name: "Electric Sander", price: "Ksh 12,000" },
  { img: tool6, name: "Angle Grinder", price: "Ksh 14,000" },
  { img: tool7, name: "Chain Hoist", price: "Ksh 22,000" },
  { img: tool8, name: "Concrete Mixer", price: "Ksh 38,000" },
];

const Machinery = () => {
  return (
    <div className="machinery-container">
      <div className="machinery-banner">
        <div className="banner-overlay">
          <h2 className="machinery-title">Machinery</h2>
          <p className="machinery-subtitle">
           Equip yourself with high-performance tools designed for durability, precision, and value ideal for both home projects and industrial tasks.
          </p>
        </div>
      </div>

      <div className="machinery-grid">
        {tools.map((tool, index) => (
          <div className="machinery-card" key={index}>
            <img src={tool.img} alt={tool.name} className="machinery-image" />
            <h3 className="machinery-name">{tool.name}</h3>
            <p className="machinery-price">{tool.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Machinery;
