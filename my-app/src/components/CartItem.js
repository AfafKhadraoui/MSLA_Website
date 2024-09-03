import React from 'react';
import '../styles/styles.css';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className='cart-item'>
      <div>
        <h4>{item.product_name}</h4>
        <img src={item.image_path} alt={item.product_name} />
        <p>Old Price: ${item.old_price}</p>
        <p>New Price: ${item.new_price}</p>
        <p>Category: {item.category}</p>
        <p>Type: {item.type}</p>
        <p>Color: {item.selectedColor}</p>
        <p>Size: {item.selectedSize}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <button onClick={() => removeFromCart(item._id)}>Remove</button>
    </div>
  );
};

export default CartItem;
