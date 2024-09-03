import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Home.css';

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
};

const Home = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when user scrolls more than 50px
      setShowCarousel(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      <div className="hero-image">
        <img src={`${process.env.PUBLIC_URL}/assets/images/rhyno5.png`} alt="Beautiful Landscape" />
      </div>

      <div className="home-title-section">
        <h1 className="home-title">“Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets Style."
</h1>
      </div>

      <div className={`usp-carousel ${showCarousel ? 'show' : ''}`}>
        <Slider {...carouselSettings}>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/assets/images/rhyno1.png`} alt="Feature 1" />
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/assets/images/rhyno3.png`} alt="Feature 2" />
          </div>
          <div className="carousel-item">
            <img src={`${process.env.PUBLIC_URL}/assets/images/rhynoev.png`} alt="Vehicle 2" />
          </div>
        </Slider>
      </div>

      <div className="cta-buttons">
        <Link to="/pre-book" className="pre-book-btn">Pre-book Now</Link>
        <Link to="/products/compare" className="product-checkout-btn">Browse Products</Link>
      </div>
    </div>
  );
};

export default Home;
