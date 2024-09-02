import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Add .js extension
import { CartProvider } from './context/CartContext.js'; // Add .js extension
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Wrap your App with Router */}
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </React.StrictMode>
);
