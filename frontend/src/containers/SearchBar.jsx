import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../containers/Navbar";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const lowerTerm = searchTerm.toLowerCase();

  // Fetch products from the back end
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products'); // Adjust URL as necessary
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter((val) => {
    if (searchTerm === "") return true;
    return (
      val.tags.some((tag) => tag.toLowerCase().includes(lowerTerm)) ||
      val.product_name.toLowerCase().includes(lowerTerm) ||
      val.category.toLowerCase().includes(lowerTerm) ||
      val.type.toLowerCase().includes(lowerTerm) ||
      val.colors.some((color) => color.toLowerCase().includes(lowerTerm))
    );
  });

  return (
    <>
      <div className="templateContainer">
        <div className="top">
          <h1 className="logo">MSLA</h1>
          <div className="searchInput_Container">
            <input
              id="searchInput"
              placeholder="Search..."
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fa fa-search"></i>
          </div>
          <div className="pages">
            <Link to="/login">
              <i className="fa fa-user login-icon"></i>
            </Link>
            <Link to="/cart">
              <i className="fa fa-shopping-cart"></i>
            </Link>
            <Link to="/wishlist">
              <i className="fa fa-heart"></i>
            </Link>
          </div>
        </div>
        <Navbar />
        <div className="template_Container">
          {filteredProducts.map((val) => (
            <div className="template" key={val.product_id}>
              <img src={val.image_path} alt="product image" />
              <h3>{val.product_name}</h3>
              <p className="price">{val.new_price}$</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
