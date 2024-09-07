import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext.js'; 
import CartItem from './CartItem.js'; 
import '../styles/styles.css';

const Cart = () => {
  const { cart, removeFromCart, resetCart } = useCart();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.new_price, 0).toFixed(2);
  };

  return (
    <div className='cart'>
      <h2>What's in your cart?</h2>
      <button onClick={resetCart} className="reset-button">Reset Cart</button>
      {cart.length > 0 ? (
        <>
          {cart.map(item => (
            <CartItem key={item._id} item={item} removeFromCart={removeFromCart} />
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
