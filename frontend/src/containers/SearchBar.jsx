// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../containers/Navbar";
// import axios from "axios";
import "./SearchBar.css";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Fetch products from MongoDB
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/product/get/all'); // Replace with your endpoint
        console.log('Products fetched:', response.data.Products);
        setProducts(response.data.Products);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    console.log('Search submitted');
    e.preventDefault(); // Prevent form from reloading the page

    if (searchTerm.trim() === '') {
      alert('Please enter a search term');
      return;
    }

    if (Array.isArray(products)) {
      const foundProduct = products.find((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (foundProduct) {
        console.log('Product found:', foundProduct);
        navigate(`/product/${foundProduct._id}`); // Assuming _id is the product's ID field
      } else {
        console.log('No products found');
        alert('No products found');
      }
    }
    else{
      console.log("problem in find")
    }
  };

  
  return (
        <>
          <div className="templateContainer">
            <div className="top">
              <h1 className="logo">MSLA</h1>
              <div className="searchInput_Container">
                 <input 
                 onKeyDown={handleKeyDown}
                  id="searchInput"
                  value={searchTerm}
                  placeholder="Search..."
                  type="text"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fa fa-search" onClick={handleSubmit}></i>
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
           
          </div>
        </>
      );
}

export default SearchBar;