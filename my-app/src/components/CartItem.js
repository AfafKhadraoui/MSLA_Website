import React from 'react';
import { useCart } from '../context/CartContext.js';

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className='cart-item'>
      <div>
        <h4>{item.product_name}</h4>
        <img src={item.image} alt={item.product_name} />
        <p>Old Price: ${item.old_price}</p>
        <p>New Price: ${item.new_price}</p>
        <p>Category: {item.category}</p>
        <p>Type: {item.type}</p>
        <p>Color: {item.selectedColor}</p>
        <p>Size: {item.selectedSize}</p>
        <p>Quantity: {item.quantity}</p>
        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(item._id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item._id)}>+</button>
        </div>
      </div>
      <button onClick={() => removeFromCart(item._id)}>Remove</button>
    </div>
  );
};

export default CartItem;
