import React, { useState } from 'react';
import { useCart } from '../context/CartContext.js'; 
import '../styles/styles.css';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select a color and size before adding to cart.');
      return;
    }
    addToCart({ ...product, selectedColor, selectedSize });
  };

  return (
    <div className='product-item'>
      <h3>{product.product_name}</h3>
      <img src={product.image} alt={product.product_name} />
      <p>Old Price: ${product.old_price}</p>
      <p>New Price: ${product.new_price}</p>
      <p>Category: {product.category}</p>
      <p>Type: {product.type}</p>
      <p>Description: {product.description}</p>
      <p>Tags: {product.tags?.join(', ')}</p>
      <p>Stock: {product.quantity}</p>
      <div>
        <label>
          Color:
          <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
            <option value="">Select Color</option>
            {product.colors.map((color, index) => (
              <option key={index} value={color}>{color}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Size:
          <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            <option value="">Select Size</option>
            {product.size.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
