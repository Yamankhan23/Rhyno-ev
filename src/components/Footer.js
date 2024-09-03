import React from 'react';
import './Footer.css'; 
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Correct import

const Footer = () => (
  <footer className="footer">
    <ul className="footer-links">
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/refund-policy">Refund Policy</a></li>
      <li><a href="/website-policy">Website Policy</a></li>
      <li><a href="/contact">Contact Us</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">Career</a></li>
      <li><a href="/rentals">Rentals</a></li>
    </ul>
    <div className="social-icons">
      <a href="https://www.instagram.com/rhyno.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
    </div>
  </footer>
);

export default Footer;
