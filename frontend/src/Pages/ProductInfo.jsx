import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CSS/ProductInfo.css";
import { ShopContext } from "../context/ShopContext";
import { useCart } from "../context/CartContext";
import WishlistModel from "../components/Modals/Wishlist/WishlistModel";

const ProductInfo = () => {
  const { addToWishlist } = useContext(ShopContext);
  const [openModal, setOpenModal] = useState(false);

  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/product/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product", error);
        setError(true);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div>Error loading product details. Please try again later.</div>;
  }

  if (!product) {
    return <div>Loading product details...</div>;
  }

  const increaseQuantity = () =>
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, product.quantity));
  const decreaseQuantity = () =>
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

  const handleAddToWishlist = () => {
    addToWishlist(product.product_id);
    alert(`${product.product_name} has been added to your wishlist!`);
  };

  const handleAddToBasket = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to the basket.");
      return;
    }
    addToCart(product, selectedColor, selectedSize, quantity);
    alert(`${product.product_name} has been added to your basket!`);
  };

  return (
    <div className="body">
      <ul className="pages">
        <li>Home</li>
        <li>Clothing</li>
        <li>{product.product_name}</li>
      </ul>

      <div className="midle">
        <div className="containerP">
          <img src={product.image} alt="Photo of the Item" className="photo" />
        </div>

        <div className="productInfo">
          <p>{product.product_name}</p>
          <div className="PriceAndStock">
            <span className="oldprice">${product.old_price}</span>
            <span className="newprice">${product.new_price}</span>
            <span className="stock">{product.quantity} left</span>
          </div>

          <label htmlFor="size">Size</label>
          <select
            name="size"
            id="size"
            className="Sselecter"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">Select size</option>
            {product.size.map((s, index) => (
              <option key={index} value={s}>
                {s}
              </option>
            ))}
          </select>

          <label htmlFor="color">Colors</label>
          <select
            name="color"
            id="color"
            className="Cselect"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="">Select color</option>
            {product.colors.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>

          <div className="buttons">
            <div className="QandW">
              <div className="quntity">
                <button className="Q" onClick={decreaseQuantity}>
                  -
                </button>
                <span>{quantity}</span>
                <button className="Q" onClick={increaseQuantity}>
                  +
                </button>
              </div>
              <button
                className="W"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenModal(true);
                  addToWishlist(product.product_id);
                }}
              >
                Add To Wish List
              </button>
            </div>
            <button
              className="AddToBasket"
              onClick={handleAddToBasket}
              disabled={product.quantity === 0}
            >
              Add to Basket
            </button>
            <WishlistModel
              open={openModal}
              image={product.image}
              message="Product added to Wishlist"
              onClose={() => setOpenModal(false)}
            />
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
