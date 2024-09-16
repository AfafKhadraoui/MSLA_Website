import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductBox.css";
import heartIcon from "../Assets/images/heartIcon.svg";
import heartIcon2 from "../Assets/images/heartIcon2.svg";
import { ShopContext } from "../../context/ShopContext";

export default function ProductBox({ key, product }) {
  const { addToWishlist } = useContext(ShopContext);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const addToWishStyle = {
    position: "absolute",
    width: "37px",
    height: "37px",
    right: "0px",
    backgroundColor: isClicked ? "#FFDDE2" : "#353753",
    backgroundImage: isClicked ? `url(${heartIcon2})` : `url(${heartIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "0% 20% 0% 20%",
    border: "none",
  };
  
   const stockStyle = {
    width: product.stocked ? "70px" : "88px",
    height: "33px",
    borderRadius: "20.2px",
    position: "absolute",
    backgroundColor: "#353753",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: "10px",
    top: "10px",
    fontSize: "14px"
  };

  const handleProductClick = () => {
    navigate(`/product/${product._id}`); // Navigate to the product info page with the product ID
  };

  return (
    <button className="Box" onClick={handleProductClick}>
      <div className="Photo">
        <div className="Stock" style={stockStyle}>
          {product.stocked ? "In Stock" : "Out of Stock"}
        </div>
        <button
          style={addToWishStyle}
          id="addToWish"
          onClick={() => {
            addToWishlist(product.product_id);
          }}
        ></button>
        <img src={product.image} alt="" id="image" />
      </div>
      <div className="botom">
        <div className="info">
          <p className="ProductName">{product.product_name}</p>
          <p>
            <span className="oldPrice">
              <span className="Dolar">$ </span>
              {product.old_price}
            </span>
            <span className="newPrice">$ {product.new_price}</span>
          </p>
        </div>
        <div className="BuingButton">
          <input type="button" id="Buy" name="Buy" />
        </div>
      </div>
    </button>
  );
}
