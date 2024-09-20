import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import CONFIG from "../config.json";
import photo from "../components/Assets/images/product.png";
import login from "../components/Assets/images/login.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Pages/CSS/CustomTooast.css";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [modalMessage, setModalMessage] = useState(""); // Modal message state
  const [modalImage, setModalImage] = useState(photo);
  const [modalBtn, setModalBtn] = useState("");
  const [products, setProducts] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const CustomCloseButton = ({ closeToast }) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        closeToast();
      }}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        width: "1px",
      }}
    >
      <i
        className="fa fa-times"
        style={{ color: "transparent", fontSize: "16px" }}
      ></i>
    </button>
  );

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
            }
          });
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getWishlistItems();
  }, [wishlistItems]);

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

              setWishlistItems((prev) => [...(prev || []), product]);
              setModalImage(product?.image || photo);
              setModalMessage("Product added to Wishlist");
              setModalBtn("wishlist");
            }
          });
      } catch (err) {
        const product = products.find((product) => product?.product_id === id);
        // alert(err?.response?.data?.message);
        setModalMessage(err?.response?.data?.message);
        setModalBtn("wishlist");
        setModalImage(product?.image || photo);
      }
    } else {
      setModalMessage("Please log in to add items to your wishlist");
      setModalImage(login);
      setModalBtn("login");
      // alert("Please log in to add items to your wishlist");
      // window.location.href = "/login";
    }
  };

  const RemoveFromWishlist = async (id) => {
    // const product = products.find((product) => product.product_id === id);
    // setWishlistItems((prev) => {
    //   let v = [...prev];
    //   v.splice(product.product_id, 1);
    //   return v;
    // });
    if (localStorage.getItem("auth-token")) {
      try {
        await axios
          .post(
            `${CONFIG.api_server}/api/product/removeFromWishlist`,
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
                (product) => product.product_id === id
              );
              setWishlistItems((prev) => {
                let v = [...prev];
                v.splice(product.product_id, 1);
                setModalBtn("wishlist");
                setModalMessage("Product removed from Wishlist");
                setModalImage(product.image);

                return v;
              });
            }
          });
      } catch (err) {
        const product = products.find((product) => product.product_id === id);
        err.response?.data?.messsage
          ? setModalImage(err.response?.data?.messsage)
          : toast.error("An unexpected error occurred");
        setModalImage(product.image);
        setModalBtn("wishlist");
      }
    } else {
      setModalMessage("Please log in to add items to your wishlist");
      setModalImage(login);
      setModalBtn("login");
      // alert("Please log in to add items to your wishlist");
      // window.location.href = "/login";
    }
  };
  const contextValue = {
    addToWishlist,
    RemoveFromWishlist,
    wishlistItems,
    modalImage,
    modalMessage,
    modalBtn,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        closeButton={<CustomCloseButton />}
        newestOnTop={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
