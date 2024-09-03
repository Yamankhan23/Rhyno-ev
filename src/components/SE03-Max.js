// src/components/SE03-Max.js
import React from 'react';
import './Product.css';

const SE03Max = () => (
  <div className="product-page">
    <h1>Rhyno SE03 Max</h1>
    {/* Placeholder for image */}
    <div className="product-image-placeholder">
      <p>Image not available</p>
    </div>
    <p className="product-description">
      The SE03 Max features the highest performance with extended range and advanced features for enthusiasts.
    </p>
    <div className="product-details">
      <h2>Specifications</h2>
      <ul>
        <li><strong>Battery:</strong> 2.7Kwh</li>
        <li><strong>Battery Features:</strong> LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</li>
        <li><strong>Battery Warranty:</strong> 3 years</li>
        <li><strong>Charging Time:</strong> 4 hours (12A)</li>
        <li><strong>Motor:</strong> 2000W</li>
        <li><strong>Max Speed:</strong> 65 km/h</li>
        <li><strong>Warranty on Electronics:</strong> 1 year</li>
        <li><strong>Max Range (@30km/h):</strong> 120 km</li>
        <li><strong>Max Range (@45km/h):</strong> 100 km</li>
        <li><strong>Max Range (Full Speed):</strong> 80 km</li>
        <li><strong>Other Key Benefits:</strong> Fire-safe Battery, Range Prediction, Comfortable Ride, Stable and Safe</li>
      </ul>
    </div>
    <button className="buy-now-btn">Buy Now</button>
  </div>
);

export default SE03Max;
