// src/App.js
import React from 'react';
import ProductList from './components/ProductList.js'; // Add .js extension
import Cart from './components/Cart.js'; // Add .js extension

function App() {
  return (
    <div className="App">
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
