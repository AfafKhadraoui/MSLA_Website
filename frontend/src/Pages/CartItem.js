import React from 'react';
import { useCart } from '../context/CartContext.js';
import './CSS/Cart.css';

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-product-info">
        <img src={item.image} alt={item.product_name} className="product-image" />
        <div className="product-details">
          <h4>{item.product_name}</h4>
          <p>Color: {item.selectedColor}</p>
          <p>Size: {item.selectedSize}</p>
        </div>
      </div>
      <div className="cart-item-pricing">
        <p className="old-price">${item.old_price}</p>
        <p className="new-price">${item.new_price}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => decreaseQuantity(item._id, item.selectedColor, item.selectedSize)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item._id, item.selectedColor, item.selectedSize)}>+</button>
      </div>
      <div className="cart-item-total">
        ${(item.new_price * item.quantity).toFixed(2)}
      </div>
      <div className="cart-item-remove">
        <button className="remove-button" onClick={() => removeFromCart(item._id, item.selectedColor, item.selectedSize)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
