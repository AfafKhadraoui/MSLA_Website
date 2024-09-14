import React from 'react';
import { useCart } from '../context/CartContext.js';
import './CSS/Cart.css';

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className='cart-item'>
      <div>
        <h4>{item.product_name}</h4>
        <img src={item.image} alt={item.product_name} /> 
        <p>Old Price: ${item.old_price}</p>
        <p>New Price: ${item.new_price}</p>
        <p>Color: {item.selectedColor}</p> 
        <p>Size: {item.selectedSize}</p> 
        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(item._id, item.selectedColor, item.selectedSize)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item._id, item.selectedColor, item.selectedSize)}>+</button>
        </div>
      </div>
      <button className='remove-button' onClick={() => removeFromCart(item._id, item.selectedColor, item.selectedSize)}>Remove</button>
    </div>
  );
};

export default CartItem;
