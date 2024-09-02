import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem.js';
import '../styles/styles.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products') // Fetch from the 'products2' collection
      .then(response => response.json())
      .then(data => {
        console.log('Fetched products:', data); // Check the console for this log
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
