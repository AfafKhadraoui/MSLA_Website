import React, { createContext } from "react";
import products from "../components/Assets/products";
import products from "../components/Assets/products";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const addToWishlist = (id) => {
    const product = products.find((product) => product.product_id === id);
    const found = wishlistItems.find((item) => item.product_id === id);

    found
      ? alert("Product already added to the wishlist")
      : setWishlistItems((prev) => [...prev, product]);
  };
  const contextValue = { addToWishlist };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
