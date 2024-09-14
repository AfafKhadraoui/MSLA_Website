import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product, selectedColor, selectedSize) => {
    try {
      // Fetch the product data from the back-end to check stock
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/product/${product._id}`);
      const productData = await response.json();

      if (productData.quantity > 0) {
        const existingProduct = cart.find(item =>
          item._id === product._id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
        );

        if (existingProduct) {
          // Increase quantity only if it doesn't exceed available stock
          setCart(cart.map(item =>
            item._id === product._id &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
              ? { ...item, quantity: Math.min(item.quantity + 1, productData.quantity) }
              : item
          ));
        } else {
          setCart([...cart, { ...product, quantity: 1, selectedColor, selectedSize }]);
        }
        alert(`${product.product_name} has been added to your cart!`);
      } else {
        alert("Product is out of stock");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const removeFromCart = (productId, selectedColor, selectedSize) => {
    setCart(cart.filter(product =>
      !(product._id === productId &&
        product.selectedColor === selectedColor &&
        product.selectedSize === selectedSize)
    ));
  };

  const resetCart = () => {
    setCart([]);
  };

  const increaseQuantity = async (productId, selectedColor, selectedSize) => {
    try {
      // Fetch the product data to check stock
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/product/${productId}`);
      const productData = await response.json();

      setCart(cart.map(product =>
        product._id === productId &&
        product.selectedColor === selectedColor &&
        product.selectedSize === selectedSize
          ? { ...product, quantity: Math.min(product.quantity + 1, productData.quantity) }
          : product
      ));
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const decreaseQuantity = (productId, selectedColor, selectedSize) => {
    setCart(cart.reduce((acc, product) => {
      if (product._id === productId &&
          product.selectedColor === selectedColor &&
          product.selectedSize === selectedSize) {
        if (product.quantity > 1) {
          // Decrease quantity if more than 1
          acc.push({ ...product, quantity: product.quantity - 1 });
        }
        // If quantity is 1 or less, don't add it to the cart (effectively removing it)
      } else {
        // Keep the product as is if it doesn't match the ID
        acc.push(product);
      }
      return acc;
    }, []));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, resetCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
