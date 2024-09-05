import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem.js'; // Ensure .js extension
import '../styles/styles.css'; // Adjust the path based on your project structure

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/products`) // Use environment variable
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data to verify
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

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
