import React, { useContext } from "react";
import heart from "../../Assets/images/heart.png";
import "./WishlistModel.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContext";

const WishlistModel = ({ open, onClose, image, message }) => {
  const navigate = useNavigate();
  const { modalImage, modalMessage, modalBtn } = useContext(ShopContext);
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={modalImage} alt="/" />
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
                {" "}
                {modalBtn === "wishlist" ? "View Wishlist" : "login"}
              </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistModel;
