import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';
import CartItem from './CartItem.js';
import '../styles/styles.css';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productId = params.get('product');
    const action = params.get('action');

    if (productId && action) {
      if (action === 'increase') {
        increaseQuantity(productId);
      } else if (action === 'decrease') {
        decreaseQuantity(productId);
      }
    }
  }, [location, increaseQuantity, decreaseQuantity]);

  return (
    <div className='cart'>
      {cart.length > 0 ? (
        cart.map(product => (
          <CartItem key={product._id} product={product} />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
