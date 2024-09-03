import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem.js'; // Ensure .js extension
import '../styles/styles.css'; // Adjust the path based on your project structure

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products') // Ensure this URL matches your back-end server
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data to verify
        setProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map(product => (
          <ProductItem key={product._id} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
