import React, { useContext } from "react";
import "./CSS/Wishlist.css";
import { ShopContext } from "../context/ShopContext";
// import Element from "../components/Element/Element";

const Wishlist = () => {
  const { wishlistItems } = useContext(ShopContext);
  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      <div className="wishlist-items">
        {wishlistItems.map((item) => {
          return
          // (<Element
              // key={item.product_id}
              // name={item.product_name}
              // image={item.image}
              // new_price={item.new_price}
              // old_price={item.old_price}
              // product_id={item.product_id}
            // />)

        })}
      </div>
    </div>
   
  );
};

export default Wishlist;
