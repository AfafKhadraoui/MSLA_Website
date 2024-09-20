import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the Cart Context
const CartContext = createContext();

// Custom hook to use the Cart Context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Initialize cart state with cart items from localStorage or an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Use useEffect to save the cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = async (product, selectedColor, selectedSize) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/product/${product._id}`);
      const productData = await response.json();

      if (productData.quantity > 0) {
        const existingProduct = cart.find(
          (item) =>
            item._id === product._id &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
        );

        if (existingProduct) {
          setCart(
            cart.map((item) =>
              item._id === product._id &&
              item.selectedColor === selectedColor &&
              item.selectedSize === selectedSize
                ? { ...item, quantity: Math.min(item.quantity + 1, productData.quantity) }
                : item
            )
          );
        } else {
          setCart([...cart, { ...product, quantity: 1, selectedColor, selectedSize }]);
        }
        alert(`${product.product_name} has been added to your cart!`);
      } else {
        alert('Product is out of stock');
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId, selectedColor, selectedSize) => {
    setCart(
      cart.filter(
        (product) =>
          !(
            product._id === productId &&
            product.selectedColor === selectedColor &&
            product.selectedSize === selectedSize
          )
      )
    );
  };

  // Function to reset the cart
  const resetCart = () => {
    setCart([]);
  };

  // Function to increase the quantity of a product in the cart
  const increaseQuantity = async (productId, selectedColor, selectedSize) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/product/${productId}`);
      const productData = await response.json();

      setCart(
        cart.map((product) =>
          product._id === productId &&
          product.selectedColor === selectedColor &&
          product.selectedSize === selectedSize
            ? { ...product, quantity: Math.min(product.quantity + 1, productData.quantity) }
            : product
        )
      );
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  // Function to decrease the quantity of a product in the cart
  const decreaseQuantity = (productId, selectedColor, selectedSize) => {
    setCart(
      cart.reduce((acc, product) => {
        if (
          product._id === productId &&
          product.selectedColor === selectedColor &&
          product.selectedSize === selectedSize
        ) {
          if (product.quantity > 1) {
            acc.push({ ...product, quantity: product.quantity - 1 });
          }
        } else {
          acc.push(product);
        }
        return acc;
      }, [])
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        resetCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
