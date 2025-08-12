import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import AboutUs from "./AboutUs";
import ContactPage from "./contact/ContactPage.jsx";
import Services from "./Services";
import ElectronicsSold from "./ElectronicsSold";
import KidsAndToys from "./assets/KidsAndToys";
import Machinery from "./Machinery.jsx";
import Furniture from "./assets/Furniture";
import Utensils from "./assets/Utensils";
import Footer from "./assets/Footer.jsx";
import HomePage from "./HomePage"; // ✅ Main HomePage component

import "./assets/Dropdown.css"; // ✅ Custom dropdown and nav styles
import "./App.css"; // ✅ Global styles

// ✅ Header
const Header = () => (
  <header className="p-4 bg-gray-100 text-center font-bold text-xl">
    Krystal Traders
  </header>
);

// ✅ Navigation with Dropdown
const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <ul className="flex gap-4 items-center">
        <li>
          <Link to="/" className="nav-button">
            Home
          </Link>
        </li>

        <li
          className="dropdown"
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button
            className="nav-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Categories
          </button>

          {showDropdown && (
  <div className="dropdown-menu">
    <Link to="/services/electronics" className="dropdown-item">Electronics</Link>
    <Link to="/services/furniture" className="dropdown-item">Furniture</Link>
    <Link to="/services/utensils" className="dropdown-item">Utensils</Link>
    <Link to="/kids-and-toys" className="dropdown-item">Kids and Toys</Link>
    <Link to="/services/machinery" className="dropdown-item">Machinery</Link>
  </div>
)}

        </li>

        <li>
          <Link to="/services" className="nav-button">
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-button">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-button">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// ✅ App Component
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/electronics" element={<ElectronicsSold />} />
        <Route path="/kids-and-toys" element={<KidsAndToys />} />
        <Route path="/services/machinery" element={<Machinery />} />
        <Route path="/services/utensils" element={<Utensils />} />
        <Route path="/services/furniture" element={<Furniture />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
