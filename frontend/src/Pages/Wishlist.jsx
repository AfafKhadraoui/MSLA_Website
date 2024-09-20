import React, { useContext } from "react";
import "./CSS/Wishlist.css";
import { ShopContext } from "../context/ShopContext";
import "./CSS/ProductInfo.css";
import ProductBox from "../components/productBox/ProductBox";

const Wishlist = () => {
  const { wishlistItems } = useContext(ShopContext);
  console.log("wishlist : ", wishlistItems);

  return (
    <div className="wishlist" style={{ overflow: "hidden" }}>
      <h2>Wishlist</h2>
      <div className="wishlistItems">
        {wishlistItems?.length > 0 ? (
          wishlistItems.map((product) => (
            <ProductBox key={product?.product_id} product={product} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
