import React, { useContext } from "react";
import heart from "../../Assets/images/heart.png";
import "../Wishlist/WishlistModel.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartModal = ({ open, onClose}) => {
  const navigate = useNavigate();
  const { modalImage, modalMessage, modalBtn } = useContext(CartContext);
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={modalImage} alt="/" className="product-img" />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <img src={heart} />
            <h3>{modalMessage}</h3>
          </div>
          <div className="btnContainer">
            <button
              className="btnPrimary"
              onClick={() => {
                onClose();
                navigate("/product");
                window.scrollTo(50, 50);
              }}
            >
              Explore more
            </button>
            <button
              className="btnOutline"
              onClick={() => {
                onClose();
                navigate(`/${modalBtn}`);
                window.scrollTo(50, 50);
              }}
            >
              <i className="fa fa-heart">
                {modalBtn === "cart" ? "View Cart" : "login"}
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
