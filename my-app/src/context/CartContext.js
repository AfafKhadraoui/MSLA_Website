import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (product) => {
    const existingProduct = cart.find(item => item._id === product._id);
    if (existingProduct) {
      if (existingProduct.quantity < product.quantity) {
        await increaseQuantity(existingProduct._id);
      } else {
        alert('Not enough stock available');
      }
    } else {
      if (product.quantity > 0) {
        setCart([...cart, { ...product, quantity: 1 }]);
        await fetch(`/api/products/${product._id}/increase`, { method: 'POST' });
      } else {
        alert('Not enough stock available');
      }
    }
  };

  const removeFromCart = async (productId) => {
    setCart(cart.filter(product => product._id !== productId));
    await fetch(`/api/products/${productId}/decrease`, { method: 'POST' });
  };

  const increaseQuantity = async (productId) => {
    const product = cart.find(item => item._id === productId);
    if (product) {
      try {
        const response = await fetch(`/api/products/${productId}/increase`, { method: 'POST' });
        const data = await response.json();
        if (response.ok) {
          setCart(cart.map(item =>
            item._id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ));
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error increasing product quantity:', error);
      }
    }
  };

  const decreaseQuantity = async (productId) => {
    const product = cart.find(item => item._id === productId);
    if (product && product.quantity > 1) {
      try {
        const response = await fetch(`/api/products/${productId}/decrease`, { method: 'POST' });
        const data = await response.json();
        if (response.ok) {
          setCart(cart.map(item =>
            item._id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ));
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error decreasing product quantity:', error);
      }
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
