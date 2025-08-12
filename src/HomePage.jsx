// src/HomePage.jsx

import React from "react";
import { Link } from "react-router-dom";
import BurnerSlider from "./assets/components/BurnerSlider";

// ✅ Correct image imports
import electronics from "./assets/electronics.jpg";
import furniture from "./assets/furniture.jpg";
import utensils from "./assets/utensils.jpeg";
import toys from "./assets/toys.jpeg";
import machinery from "./assets/machinery.jpg";

import "./assets/HomePage.css";

const categories = [
  {
    title: "Electronics Sold",
    description: "Shop the latest electronics including phones, TVs, and more.",
    image: electronics,
    link: "/services/electronics",
  },
  {
    title: "Furniture",
    description: "Browse stylish and affordable furniture for every room.",
    image: furniture,
    link: "/services/furniture",
  },
  {
    title: "Utensils",
    description: "Quality utensils for all your kitchen needs.",
    image: utensils,
    link: "/services/utensils",
  },
  {
    title: "Kids and Toys",
    description: "Fun and educational toys for kids of all ages.",
    image: toys,
    link: "/kids-and-toys", // ✅ This should match your App.jsx route
  },
  {
    title: "Machinery",
    description: "Powerful tools and machines for home and industrial use.",
    image: machinery,
    link: "/services/machinery",
  },
];

const HomePage = () => {
  return (
    <div className="home-container">
      {/* 🔥 Burner Slider at the top */}
      <BurnerSlider />

      <h1 className="home-heading">Welcome to Krystal Traders</h1>

      {/* Cards grid */}
      <div className="home-grid">
        {categories.map((cat, index) => (
          <div className="home-card" key={index}>
            <img src={cat.image} alt={cat.title} className="home-image" />
            <h2 className="home-title">
              <Link to={cat.link}>{cat.title}</Link>
            </h2>
            <p className="home-description">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
