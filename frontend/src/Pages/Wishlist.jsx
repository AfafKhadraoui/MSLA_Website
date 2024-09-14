import React, { useContext } from "react";
import "./CSS/Wishlist.css";
import { ShopContext } from "../context/ShopContext";
import "./CSS/ProductInfo.css";
import ProductBox from "../components/productBox/ProductBox";

const Wishlist = () => {
  const { wishlistItems } = useContext(ShopContext);
  console.log("wishlist : ", wishlistItems);

  return (
    <div className="wishlist" style={{ marginTop: "150px" }}>
      <h2>Wishlist</h2>
      {wishlistItems?.map((product) => {
        return (
          <ProductBox
            key={product.product_id}
            product={product}
            // image={product.image} // Fallback image
            // ProductName={product.product_name}
            // oldPrice={product.old_price}
            // newPrice={product.new_price}
            // Stock={product.stocked ? "In Stock" : "Out of Stock"}
          />
        );
      })}
    </div>
  );
};

export default Wishlist;
