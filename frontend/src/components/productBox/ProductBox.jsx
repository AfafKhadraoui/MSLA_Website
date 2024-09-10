import React, { useState } from "react";
import "./ProductBox.css";
import heartIcon from '../Assets/images/heartIcon.svg';
import heartIcon2 from '../Assets/images/heartIcon2.svg';


export default function ProductBox({ key,image, ProductName, oldPrice, newPrice, Stock }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const addToWishStyle = {
    position: 'absolute',
    width: '37px',
    height: '37px',
    right: '0px',
    backgroundColor: isClicked ? '#FFDDE2' : '#353753',
    backgroundImage: isClicked ? `url(${heartIcon2})` : `url(${heartIcon})`,    
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '0% 0% 0% 20%',
    border: 'none',
  };

  const stockStyle={
    width: Stock == "In Stock"? '88px':'118px',
    height: '33px',
    borderRadius:'20.2px',
    position: 'absolute',
    backgroundColor:'#353753',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '10px',
    top: '10px',
  }


  
  return (
    <button className="Box">
      <div className="Photo">
        <div className="Stock" style={stockStyle}>
            {Stock}    
        </div>
        <button style={addToWishStyle} id="addToWish" onClick={handleClick}></button>
        <img src={image} alt="" id="image" />
      </div>
      <div className="botom">
        <div className="info">
          <p className="ProductName">{ProductName}</p>
          <p>
            <span className="oldPrice"><span className="Dolar">$ </span>{oldPrice}</span>
            <span className="newPrice">$ {newPrice}</span>
          </p>
        </div>
        <div className="BuingButton">
            <input type="button" id="Buy" name="Buy" />
        </div>
      </div>
    </button>
  )
}
