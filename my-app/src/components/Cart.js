import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext.js'; 
import CartItem from './CartItem.js'; 
import '../styles/styles.css'


const Cart = () => {
  const { cart, removeFromCart } = useCart();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
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