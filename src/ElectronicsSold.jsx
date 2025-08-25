// src/ElectronicsSold.jsx
import React from "react";
import phone from "./assets/phone.jpg";
import laptop from "./assets/laptop.jpg";
import tv from "./assets/Tv.jpg";
import fridge from "./assets/fridge.jpg";
import camera from "./assets/camera.jpg";
import speaker from "./assets/speaker.jpg";
import "./ElectronicsSold.css";

const ElectronicsSold = () => {
  return (
    <div className="electronics-container">

      {/* ✅ Banner section */}
      <div className="electronics-banner">
        <h2 className="electronics-title">Electronics Sold</h2>
        <p className="electronics-subtitle">
          Discover the latest and most affordable gadgets handpicked just for you.<br />
          Quality guaranteed, prices unmatched!
        </p>
      </div>

      <div className="electronics-grid">
        {/* Cards below remain unchanged */}
        <div className="electronics-card">
          <img src={phone} alt="Smartphone" className="electronics-image" />
          <h3 className="electronics-name">Smartphone</h3>
          <p className="electronics-price">Smartphone, your world in hand.</p>
        </div>

        <div className="electronics-card">
          <img src={tv} alt="Flat Screen TV" className="electronics-image" />
          <h3 className="electronics-name">Flat Screen TV</h3>
          <p className="electronics-price">Television where stories live.</p>
        </div>

        <div className="electronics-card">
          <img src={laptop} alt="Laptop" className="electronics-image" />
          <h3 className="electronics-name">Laptop</h3>
          <p className="electronics-price">Laptop power, life unlocked.</p>
        </div>

        <div className="electronics-card">
          <img src={fridge} alt="Fridge" className="electronics-image" />
          <h3 className="electronics-name">Fridge</h3>
          <p className="electronics-price">Refrigerator keeping love fresh.</p>
        </div>

        <div className="electronics-card">
          <img src={camera} alt="Camera" className="electronics-image" />
          <h3 className="electronics-name">DSLR Camera</h3>
          <p className="electronics-price">Camera that saves feelings.</p>
        </div>

        <div className="electronics-card">
          <img src={speaker} alt="Bluetooth Speaker" className="electronics-image" />
          <h3 className="electronics-name">Bluetooth Speaker</h3>
          <p className="electronics-price">Speaker that speaks emotion.</p>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsSold;
