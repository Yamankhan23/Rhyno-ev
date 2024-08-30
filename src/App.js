import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Comparison from './components/Comparison'; // Corrected import
import About from './components/About';
import Contact from './components/Contact';
import PreBook from './components/PreBook';
import Rentals from './components/Rentals';
import './App.css'; // Ensure your custom styles are applied

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/products/compare" element={<Comparison />} /> {/* Corrected route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/pre-book" element={<PreBook />} />
          <Route path="/rentals" element={<Rentals />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
