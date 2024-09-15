import React, { useState } from 'react';
import { useCart } from '../context/CartContext.js';
import CartItem from './CartItem.js';
import './CSS/Cart.css';

const Cart = () => {
  const { cart, resetCart } = useCart();
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    // For this example, applying a static 10% discount
    setDiscount(0.05); // 5% discount
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0);
  const discountedAmount = totalAmount * (1 - discount);

  return (
    <div className="cart-page-container">
      {/* Cart List on the left */}
      <div className="cart-container">
        <div className="cart-header">
          <h2>What's in your cart :</h2>
          {cart.length > 0 && (
            <button className="reset-button" onClick={resetCart}>
              Reset Cart
            </button>
          )}
        </div>
        <div className="cart-list">
          <div className="cart-list-header">
            <div className="header-item">Product</div>
            <div className="header-item">Price</div>
            <div className="header-item">Quantity</div>
            <div className="header-item">Total</div>
            <div className="header-item">Remove</div>
          </div>
          <div className="cart-list-body">
            {cart.length > 0 ? (
              cart.map(item => <CartItem key={item._id} item={item} />)
            ) : (
              <div className="empty-cart">
                <p>Your cart is empty</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Order Summary on the right */}
      <div className="order-summary-container">
        <h3>Order Summary</h3>
        <p>Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <p className="total-amount">
          Amount before discount: ${totalAmount.toFixed(2)}
        </p>
        <div className="coupon-container">
          <input type="text" placeholder="Enter coupon code" className="coupon-input" />
          <button className="apply-coupon" onClick={applyCoupon}>Apply</button>
        </div>
        <p className="discounted-amount">
          Final Price: ${discountedAmount.toFixed(2)}
        </p>
        <button className="purchase-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
