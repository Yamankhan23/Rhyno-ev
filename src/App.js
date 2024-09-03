import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SE03Lite from './components/SE03-Lite';
import SE03Max from './components/SE03-Max';
import SE03 from './components/SE03';
import Comparison from './components/Comparison';
import About from './components/About';
import Contact from './components/Contact';
import PreBook from './components/PreBook';
import Rentals from './components/Rentals';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/se03lite" element={<SE03Lite />} />
          <Route path="/products/se03max" element={<SE03Max />} />
          <Route path="/products/se03" element={<SE03 />} />
          <Route path="/products/compare" element={<Comparison />} />
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
