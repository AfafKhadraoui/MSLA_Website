import React from 'react';
import { useCart } from '../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const CartItem = ({ product }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleIncrease = async (productId) => {
    await increaseQuantity(productId);
    navigate(`/cart?product=${productId}&action=increase`);
  };

  const handleDecrease = async (productId) => {
    await decreaseQuantity(productId);
    navigate(`/cart?product=${productId}&action=decrease`);
  };

  return (
    <div className='cart-item'>
      <h3>{product.product_name}</h3>
      <img src={product.image} alt={product.product_name} />
      <p>Price: ${product.new_price}</p>
      <p>Quantity: {product.quantity}</p>
      <div className='quantity-controls'>
        <button onClick={() => handleDecrease(product._id)}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => handleIncrease(product._id)}>+</button>
      </div>
      <button onClick={() => removeFromCart(product._id)}>Remove</button>
    </div>
  );
};

export default CartItem;
