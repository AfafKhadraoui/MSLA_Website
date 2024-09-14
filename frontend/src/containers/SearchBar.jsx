import React, { useState, Outlet } from "react";
import "./SearchBar.css";
import Products from "../components/Assets/products";
import Navbar from "../containers/Navbar";
import HomeTop from "../containers/HomeTop";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const lowerTerm = searchTerm.toLowerCase();
  //   function findMatchingProducts(products, searchTerm) {
  //     searchTerm = searchTerm.toLowerCase();
  //     return products.filter(product => {
  //       return Object.values(product).some(value => {
  //         if (typeof value === 'string') {
  //           return value.toLowerCase().includes(searchTerm);
  //         }
  //         return false;
  //       });
  //     });
  //   }
  //   const matchingProducts = findMatchingProducts(Products, searchTerm);

  return (
    <>
      <div className="templateContainer">
        <div className="top">
          <h1 className="logo">MSLA</h1>
          <div className="searchInput_Container">
            <input
              id="searchInput"
              placeholder="Search                          "
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i class="fa fa-search"></i>
          </div>
          <div className="pages">
            <Link to={"/login"}>
              <i class="fa fa-user login-icon"></i>
            </Link>

            <a href="../Pages/Cart">
              <i class="fa fa-shopping-cart "></i>
            </a>
            <Link to={"/wishlist"}>
              <i class="fa fa-heart "></i>
            </Link>
          </div>
        </div>
        <Navbar />
        {/* <HomeTop/> */}
        <div className="template_Container">
          {/* {
           
            matchingProducts.map((val) => {
                return (
                    <div className="template" key={val.product_id}>
                      <img src={val.image} alt="product image" />
                      <h3>{val.product_name}</h3>
                      <p className="price">  {val.new_price}$</p>
                    </div>
                  );
              })
        } */}

          {Products.filter((val) => {
            if (searchTerm === "") {
              // return val;
            } else if (
              val.tags.some((tag) =>
                tag.toLowerCase().includes(` ${lowerTerm} `)
              ) ||
              val.product_name.toLowerCase().includes(` ${lowerTerm} `) ||
              val.category.toLowerCase().includes(lowerTerm) ||
              val.type.toLowerCase().includes(lowerTerm) ||
              val.colors.some((color) =>
                color.toLowerCase().includes(lowerTerm)
              )
            ) {
              return val;
            }
          }).map((val) => {
            return (
              <div className="template" key={val.product_id}>
                <img src={val.image} alt="product image" />
                <h3>{val.product_name}</h3>
                <p className="price"> {val.new_price}$</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default SearchBar;
