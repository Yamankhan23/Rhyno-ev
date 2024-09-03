// src/components/SE03-Lite.js
import React from 'react';
import './Product.css';

const SE03Lite = () => (
  <div className="product-page">
    <h1>Rhyno SE03 Lite</h1>
    {/* Placeholder for image */}
    <div className="product-image-placeholder">
      <p>Image not available</p>
    </div>
    <p className="product-description">
      The SE03 Lite offers a compact design with essential features for a smooth ride. Ideal for urban commuting.
    </p>
    <div className="product-details">
      <h2>Specifications</h2>
      <ul>
        <li><strong>Battery:</strong> 1.8Kwh</li>
        <li><strong>Battery Features:</strong> LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</li>
        <li><strong>Battery Warranty:</strong> 3 years</li>
        <li><strong>Charging Time:</strong> 3 hours (12A)</li>
        <li><strong>Motor:</strong> 1500W</li>
        <li><strong>Max Speed:</strong> 55 km/h</li>
        <li><strong>Warranty on Electronics:</strong> 1 year</li>
        <li><strong>Max Range (@30km/h):</strong> 100 km</li>
        <li><strong>Max Range (@45km/h):</strong> 90 km</li>
        <li><strong>Max Range (Full Speed):</strong> 60 km</li>
        <li><strong>Other Key Benefits:</strong> Fire-safe Battery, Range Prediction, Comfortable Ride, Stable and Safe</li>
      </ul>
    </div>
    <button className="buy-now-btn">Buy Now</button>
  </div>
);

export default SE03Lite;
