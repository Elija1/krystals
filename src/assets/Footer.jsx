import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"; // ✅ External CSS

const Footer = () => {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254712345678"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-button"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/kids-and-toys">Kids and Toys</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>📍 Rendile Arcade Plaza, Nairobi</li>
              <li>📞 +254 712 345678</li>
              <li>📧 info@krystaltraders.com</li>
            </ul>
            <p className="whatsapp-note">Reach us through WhatsApp</p>
          </div>

          {/* Learn More */}
          <div className="footer-column">
            <h3>Learn More</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services/furniture">Furniture</Link></li>
              <li><Link to="/services/utensils">Utensils</Link></li>
              <li><Link to="/services/machinery">Machinery</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on new products and deals!</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
          <p>© {new Date().getFullYear()} Krystal Traders. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
