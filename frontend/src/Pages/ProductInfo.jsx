import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams to get the product ID from the URL
import './CSS/ProductInfo.css';

const ProductInfo = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // Initialize product state
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  // Fetch the product data by ID when the component loads
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/product/${id}`); // Fetch product data by ID
        setProduct(response.data); // Set the product data
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };

    fetchProduct(); // Call the fetchProduct function
  }, [id]);

  // If product is still loading
  if (!product) {
    return <div>Loading product details...</div>;
  }

   // Handle increasing the quantity
   const increaseQuantity = () => {
    if (quantity < product.quantity) { // Ensure we do not exceed available stock
      setQuantity(quantity + 1);
    }
  };

  // Handle decreasing the quantity
  const decreaseQuantity = () => {
    if (quantity > 1) { // Ensure the minimum quantity is 1
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="body">
        <ul className="pages">
          <li> Home > </li>
          <li> Clothing > </li>
          <li> {product.product_name}</li> {/* Use dynamic product name */}
        </ul>

      <div className="midle">
        <div className="containerP">
            <img src={product.image} alt="Photo of the Item" className="photo"/>
        </div>
        
        <div className="productInfo">
          <p>{product.product_name}</p>
          <div className="PriceAndStock">
            <span className="oldprice"> ${product.old_price} </span>
            <span className="newprice">${product.new_price}</span>
            <span className="stock"> {product.quantity} left </span>
          </div>
          <label htmlFor="size">Size</label>
          <select name="size" id="size" className="Sselecter">
            {product.size.map((s, index) => (
              <option key={index} value={s}>{s}</option>
            ))}
          </select>
          <label htmlFor="color">Colors</label>
          <select name="color" id="color" className="Cselect">
            {product.colors.map((c, index) => (
              <option key={index} value={c}>{c}</option>
            ))}
          </select>
          <div className="buttons">
            <div className="QandW">
                <div className="quntity">
                    <button className="Q" onClick={decreaseQuantity}> - </button>
                    <span>{quantity}</span>
                    <button className="Q" onClick={increaseQuantity}>+</button>
                </div>
                <button className="W">Add To Wish List</button>
            </div>
            <button className="AddToBasket">Add to Basket</button>
          </div>
        </div>
      </div>
      <div className="description">
        <p>Description</p>
        <span className="dis">{product.description}</span>
      </div>
    </div>
  );
};

export default ProductInfo;
