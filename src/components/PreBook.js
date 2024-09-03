import React from 'react';
import './PreBook.css';

const PreBook = () => {
  return (
    <div className="pre-book-container">
      <h2 className="pre-book-title">Pre-book Your Rhyno EV</h2>
      <form className="pre-book-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label> 
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
        </div>
        <div className="form-group">
          <label htmlFor="model">Select Model</label>
          <select id="model" name="model" required>
            <option value="SE03Lite">Rhyno SE03 Lite</option>
            <option value="SE03">Rhyno SE03</option>
            <option value="SE03Max">Rhyno SE03 Max</option>
          </select>
        </div>
        <button type="submit" className="pre-book-btn">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default PreBook;
