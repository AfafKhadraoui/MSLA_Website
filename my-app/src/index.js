// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Add .js extension
import { CartProvider } from './context/CartContext.js'; // Add .js extension

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
