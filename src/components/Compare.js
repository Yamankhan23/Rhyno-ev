import React from 'react';
import './Compare.css';

const Compare = () => {
  return (
    <div className="compare-page">
      <h1>Compare Rhyno EV Models</h1>
      <div className="vehicle-comparison">
        {/* Comparison Card for Each Vehicle */}
        {['SE03 Lite', 'SE03', 'SE03 Max'].map((model, index) => (
          <div className="comparison-card" key={index}>
            <img src={`path/to/${model.replace(" ", "").toLowerCase()}.jpg`} alt={model} className="vehicle-image" />
            <h2>{model}</h2>
            <div className="color-options">
              <button className="color-btn color-red"></button>
              <button className="color-btn color-blue"></button>
              <button className="color-btn color-black"></button>
            </div>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="comparison-table">
        <h2>Specifications</h2>
        <div className="table-row table-header">
          <div className="table-cell"></div>
          <div className="table-cell">SE03 Lite</div>
          <div className="table-cell">SE03</div>
          <div className="table-cell">SE03 Max</div>
        </div>
        {[
          ['Battery', '1.8Kwh', '2.7Kwh', '2.7Kwh'],
          ['Battery Features', 'LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)', 'LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)', 'LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)'],
          ['Battery Warranty', '3 years', '3 years', '3 years'],
          ['Charging Time', '3 hours (12A)', '4 hours (12A)', '4 hours (12A)'],
          ['Motor', '1500W', '1500W', '2000W'],
          ['Max Speed', '55 km/h', '55 km/h', '65 km/h'],
          ['Warranty on Electronics', '1 year', '1 year', '1 year'],
          ['Max Range (@30km/h)', '100 km', '150 km', '120 km'],
          ['Max Range (@45km/h)', '90 km', '110 km', '100 km'],
          ['Max Range (Full Speed)', '60 km', '90 km', '80 km'],
          ['Other Key Benefits', 'Fire-safe Battery\nRange Prediction\nComfortable Ride\nStable and Safe', 'Fire-safe Battery\nRange Prediction\nComfortable Ride\nStable and Safe', 'Fire-safe Battery\nRange Prediction\nComfortable Ride\nStable and Safe']
        ].map((row, index) => (
          <div className="table-row" key={index}>
            {row.map((cell, cellIndex) => (
              <div className="table-cell" key={cellIndex}>
                {cell.split('\n').map((line, lineIndex) => (
                  <div key={lineIndex}>{line}</div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compare;
