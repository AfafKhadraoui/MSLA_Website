import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import CONFIG from "../config.json";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const getProducts = async () => {
    try {
      await axios
        .get(`${CONFIG.api_server}/api/product/get/all`)
        .then((response) => {
          if (response.status === 200) {
            setProducts(response.data.Products);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getWishlistItems = async () => {
    if (localStorage.getItem("auth-token")) {
      try {
        await axios
          .get(`${CONFIG.api_server}/api/user/getwishlistItems`, {
            headers: {
              Accept: "application/json",
              "auth-token": `${localStorage.getItem("auth-token")}`,
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            if (response.data.success) {
              setWishlistItems(response.data.wishlist);
              console.log("wishiiiii", wishlistItems);
            }
          });
      } catch (err) {
        alert(err?.response?.data?.message);
      }
    }
  };
  useEffect(() => {
    getProducts();
    getWishlistItems();
  }, []);
  const addToWishlist = async (id) => {
    // const product = products.find((product) => product.product_id === id);
    // const found = wishlistItems.find((item) => item.product_id === id);

    // found
    //   ? alert("Product already added to the wishlist")
    //   : setWishlistItems((prev) => [...prev, product]);
    if (localStorage.getItem("auth-token")) {
      try {
        await axios
          .post(
            `${CONFIG.api_server}/api/product/addToWishlist`,
            { id },
            {
              headers: {
                Accept: "application/json",
                "auth-token": `${localStorage.getItem("auth-token")}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            if (response.status === 200) {
              const product = products.find(
                (product) => product?.product_id === id
              );

              setWishlistItems((prev) => [...prev, product]);
            }
          });
      } catch (err) {
        alert(err?.response?.data?.message);
      }
    } else {
      alert("Please log in to add items to your wishlist");
      window.location.href = "/login";
    }
  };
  const contextValue = { addToWishlist, wishlistItems };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
