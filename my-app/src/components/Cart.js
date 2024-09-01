import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedColor, setSelectedColor] = useState({});
  const [selectedSize, setSelectedSize] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('/api/cart');
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  const handleColorChange = (productId, color) => {
    setSelectedColor(prevState => ({ ...prevState, [productId]: color }));
  };

  const handleSizeChange = (productId, size) => {
    setSelectedSize(prevState => ({ ...prevState, [productId]: size }));
  };

  const addToCart = async (product) => {
    const color = selectedColor[product.id];
    const size = selectedSize[product.id];

    if (!color || !size) {
      alert('Please select a color and size.');
      return;
    }

    if (product.stock <= 0) {
      alert('Product is out of stock!');
      return;
    }

    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id && item.color === color && item.size === size);

      if (existingProduct) {
        if (existingProduct.quantity < product.stock) {
          axios.patch('/api/cart', { productId: product.id, color, size, quantity: existingProduct.quantity + 1 })
            .catch(error => console.error('Error updating cart:', error));

          return prevCart.map(item =>
            item.id === product.id && item.color === color && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          alert('Product is out of stock!');
          return prevCart;
        }
      } else {
        axios.post('/api/cart', { ...product, quantity: 1, color, size })
          .then(() => setCart([...prevCart, { ...product, quantity: 1, color, size }]))
          .catch(error => console.error('Error adding to cart:', error));
        
        return [...prevCart, { ...product, quantity: 1, color, size }];
      }
    });
  };

  const decreaseQuantity = async (productId, color, size) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === productId && item.color === color && item.size === size);

      if (existingProduct.quantity > 1) {
        axios.patch('/api/cart', { productId, color, size, quantity: existingProduct.quantity - 1 })
          .catch(error => console.error('Error updating cart:', error));

        return prevCart.map(item =>
          item.id === productId && item.color === color && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        axios.delete('/api/cart', { data: { productId, color, size } })
          .catch(error => console.error('Error removing from cart:', error));

        return prevCart.filter(item => !(item.id === productId && item.color === color && item.size === size));
      }
    });
  };

  const removeFromCart = async (productId, color, size) => {
    axios.delete('/api/cart', { data: { productId, color, size } })
      .catch(error => console.error('Error removing from cart:', error));

    setCart(prevCart => prevCart.filter(item => !(item.id === productId && item.color === color && item.size === size)));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className='cart-container'>
      <h1 style={{color: "blue"}}>Products</h1>
      <ul className='product-list'>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <div className='selector-container'>
              <label>
                Color:
                <select onChange={(e) => handleColorChange(product.id, e.target.value)} value={selectedColor[product.id] || ''}>
                  <option value="">Select Color</option>
                  {product.colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </label>
              <label>
                Size:
                <select onChange={(e) => handleSizeChange(product.id, e.target.value)} value={selectedSize[product.id] || ''}>
                  <option value="">Select Size</option>
                  {product.sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </label>
            </div>
            {product.stock > 0 ? (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            ) : (
              <span style={{ color: 'red' }}>Out of Stock</span>
            )}
          </li>
        ))}
      </ul>
      <h1 style={{color: "magenta"}}>Cart</h1>
      <ul className='cart-list'>
        {cart.map(item => (
          <li key={`${item.id}-${item.color}-${item.size}`}>
            {item.name} - ${item.price} x {item.quantity} (Color: {item.color}, Size: {item.size})
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => decreaseQuantity(item.id, item.color, item.size)}>-</button>
            <button onClick={() => removeFromCart(item.id, item.color, item.size)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2 className='total'>Total: ${getTotal()}</h2>
    </div>
  );
};

export default Cart;
