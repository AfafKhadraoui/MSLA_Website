import React from 'react';
import '../styles/styles.css'

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className='cart-item'>
      <div>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <p>Color: {item.selectedColor}</p>
        <p>Size: {item.selectedSize}</p>
      </div>
      <button onClick={() => removeFromCart(item._id)}>Remove</button>
    </div>
  );
};

export default CartItem;
