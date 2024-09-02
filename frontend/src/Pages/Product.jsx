import React from "react";
import "./CSS/Product.css";
import SearchBar from "../containers/SearchBar";
import Navbar from "../containers/Navbar";
import Colors from "../components/colors/colors";
import ProductBox from "../components/productBox/ProductBox.jsx" 
import SortingBar from "../containers/productPageContainers/SortingBar";
import man_product1 from "../components/Assets/Man/man_product1.jpg";

const Product = () => {
  return (
    <div className="shoping">
      <div className="Clothes">
        <div className="filter">
          <div className="headOfFilter">
            <h3>Refine By</h3>
          </div>
          <div className="filterBody">
            <div className="CategoryFilter">
              <p>Category</p>
              <input type="checkbox" id="man" name="man" value="man" />
              <label for="man"> Man</label><br />
              <input type="checkbox" id="woman" name="woman" value="woman" />
              <label for="woman"> Woman</label><br />
              <input type="checkbox" id="kids" name="kids" value="kid" />
              <label for="kids"> kid</label>
            </div>
            <div className="Colour">
              <p>Colour</p>
              <Colors />
            </div>
            <div className="Price">
              <p>Price Range</p>
              <input type="range" id="Price" min="30" max="500" />
            </div>
            <div className="Availability">
              <p>Availability</p>
              <input
                type="checkbox"
                id="In_stock"
                name="In_stock"
                value="true"
              />
              <label for="In_stock"> In stock</label><br />
              <input
                type="checkbox"
                id="Out_of_stock"
                name="Out_of_stock"
                value="false"
              />
              <label for="Out_of_stock"> Out of stock</label><br />
            </div>
            <div className="Size">
              <p>Size</p>
              <input type="checkbox" id="S" name="S" value="S" />
              <label for="S"> S</label><br />
              <input type="checkbox" id="M" name="M" value="M" />
              <label for="M"> M</label><br />
              <input type="checkbox" id="L" name="L" value="L" />
              <label for="L"> L</label><br />
              <input type="checkbox" id="XL" name="XL" value="XL" />
              <label for="XL"> XL</label><br />
              <input type="checkbox" id="XXL" name="XXL" value="XXL" />
              <label for="XXL"> XXL</label><br />
            </div>
          </div>
        </div>
        <div className="filtredClothes">
          <SortingBar />
          <div className="artical">
            <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/>
            <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/>
            <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/>
            <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/>
            <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/>
            <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Product;
