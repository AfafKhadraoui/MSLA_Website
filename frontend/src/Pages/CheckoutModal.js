import React from 'react';
import './CSS/CheckoutModal.css';

const CheckoutModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Payment Method</h2>
        <p>Select your payment method to proceed with the checkout.</p>
        <button className="modal-button">Credit Card</button>
        <button className="modal-button">PayPal</button>
        <button className="modal-button close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
