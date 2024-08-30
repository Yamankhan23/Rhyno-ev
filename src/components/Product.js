import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.css'; 

const Product = () => {
  const { productId } = useParams();

  // Static product data for demonstration
  const productDetails = {
    'se03-lite': { name: 'SE03 Lite', image: '/images/se03-lite.jpg', details: 'Details of SE03 Lite' },
    'se03': { name: 'SE03', image: '/images/se03.jpg', details: 'Details of SE03' },
    'se03-max': { name: 'SE03 Max', image: '/images/se03-max.jpg', details: 'Details of SE03 Max' }
  };

  const product = productDetails[productId] || { name: 'Product not found', image: '', details: 'No details available' };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.details}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default Product;

