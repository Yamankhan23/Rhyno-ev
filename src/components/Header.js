import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>
          <Link to="/products">Products</Link>
          <ul>
            <li><Link to="/products/se03-lite">SE03 Lite</Link></li>
            <li><Link to="/products/se03">SE03</Link></li>
            <li><Link to="/products/se03-max">SE03 Max</Link></li>
            <li><Link to="/products/compare">Compare All</Link></li>
          </ul>
        </li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/pre-book">Pre-book Now</Link></li>
      </ul>
      <div className="social-icons">
        <a href="https://www.instagram.com/rhyno.in/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </nav>
  </header>
);

export default Header;
