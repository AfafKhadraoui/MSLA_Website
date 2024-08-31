import React, { useState } from 'react';
import { useCart } from '../context/CartContext.js'; 
import '../styles/styles.css'

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
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
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
            {product.sizes.map((size, index) => (
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
