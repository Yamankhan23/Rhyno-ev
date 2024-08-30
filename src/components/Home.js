import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
const Carousel = ({ children }) => (
  <div className="carousel">
    {children}
  </div>
);

const Home = () => (
  <div className="home">
    <h1>Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style.</h1>
    
    <div className="usp-carousel">
      <Carousel>
        <div className="carousel-item">
          <img src="/images/usp1.jpg" alt="Feature 1" />
          <div className="carousel-caption">
            <h3>Feature 1</h3>
            <p>Description of Feature 1.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/usp2.jpg" alt="Feature 2" />
          <div className="carousel-caption">
            <h3>Feature 2</h3>
            <p>Description of Feature 2.</p>
          </div>
        </div>
        {/* Add more carousel items as needed */}
      </Carousel>
    </div>

    <div className="vehicle-photos">
      <img src="/images/vehicle1.jpg" alt="Vehicle 1" />
      <img src="/images/vehicle2.jpg" alt="Vehicle 2" />
      {/* Add more vehicle images as needed */}
    </div>
    
    <div className="cta-buttons">
      <Link to="/pre-book" className="pre-book-btn">Pre-book Now</Link>
      <Link to="/products" className="product-checkout-btn">Browse Products</Link>
    </div>
  </div>
);

export default Home;
