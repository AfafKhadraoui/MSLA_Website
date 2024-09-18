import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
// import { useContext } from "react";
// import {ProductContext} from "../context/ProductContext.jsx";
import "./CSS/Product.css";
import Colors from "../components/colors/colors";
import ProductBox from "../components/productBox/ProductBox.jsx";
import SortingBar from "../containers/productPageContainers/SortingBar";
// import Products from "../components/Assets/products.js";

const Product = () => {
  // const { products } = useContext(ProductContext); // Access products from context
  // console.log(products)
  const [filters, setFilters] = useState({
    category: [],
    color: [],
    size: [],
    In_stock: null,
    Out_of_stock: null,
    Type: [],
    price: 200,
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isAgeFilterEnabled, setIsAgeFilterEnabled] = useState(true);

  // Get the query parameters from the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("category");

  // Use useEffect to apply the category from URL when the page loads
  useEffect(() => {
    if (categoryFromUrl) {
      // Update filters state with the category from URL
      setFilters((prevFilters) => ({
        ...prevFilters,
        category: [categoryFromUrl],
      }));
    }
  }, [categoryFromUrl]);

  // Fetch products whenever filters change (URL or form change)
  useEffect(() => {
    fetchFilteredProducts(filters);
  }, [filters]);

  // Fetch filtered products function
  const fetchFilteredProducts = async (filters) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/product/filter",
        filters
      );
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error fetching filtered products", error);
    }
  };

  // Handle form input changes
  // Handle form input changes (for category, size, etc.)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFilters((prevFilters) => {
        if (name === "category" || name === "size" || name === "Type") {
          const updatedCategory = checked
            ? [...prevFilters[name], value]
            : prevFilters[name].filter((v) => v !== value);

          if (name === "category") {
            // Control the age filter logic based on category selection
            const hasOnlyKidsOrNone =
              updatedCategory.length === 0 || updatedCategory.includes("kids");
            setIsAgeFilterEnabled(hasOnlyKidsOrNone);
          }

          return {
            ...prevFilters,
            [name]: updatedCategory,
          };
        } else {
          return {
            ...prevFilters,
            [name]: checked ? value : !value,
          };
        }
      });
    } else if (type === "range") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        price: parseInt(value, 10),
      }));
    }
  };

  // Handle color selection from Colors component
  const handleColorSelect = (selectedColor) => {
    setFilters((prevFilters) => {
      if (prevFilters.color.includes(selectedColor)) {
        // If color is already selected, remove it
        return {
          ...prevFilters,
          color: prevFilters.color.filter((color) => color !== selectedColor),
        };
      } else {
        // If color is not selected, add it
        return {
          ...prevFilters,
          color: [...prevFilters.color, selectedColor],
        };
      }
    });
  };

  // Handle form submit (send filters to backend)
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:8000/api/product/filter", filters); // Replace with your actual endpoint
  //     setFilteredProducts(response.data);
  //   } catch (error) {
  //     console.error("Error fetching filtered products", error);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchFilteredProducts(filters); // Use the updated filters
  };
  // no need to handleSubmit be couse evry thing is auto now
  // const productList = Products
  // console.log(productList)
  console.log(filters);
  return (
    <div className="shoping">
      <div className="Clothes">
        <div className="filter">
          <div className="headOfFilter">
            <h3>Refine By</h3>
          </div>
          <form className="filterBody" onSubmit={handleSubmit}>
            <div className="CategoryFilter">
              <p>Category</p>
              <input
                type="checkbox"
                id="man"
                name="category"
                value="men"
                onChange={handleChange}
              />
              <label for="man"> Man</label>
              <br />
              <input
                type="checkbox"
                id="woman"
                name="category"
                value="Women"
                onChange={handleChange}
              />
              <label for="woman"> Woman</label>
              <br />
              <input
                type="checkbox"
                id="kids"
                name="category"
                value="kids"
                onChange={handleChange}
              />
              <label for="kids"> kid</label>
            </div>
            <div className="Colour">
              <p>Colour</p>
              <Colors
                onColorSelect={handleColorSelect}
                selectedColors={filters.color}
              />
            </div>
            <div className="Price">
              <p>Price Range</p>
              <input
                type="range"
                id="price"
                name="price"
                min={40}
                max={200}
                defaultValue={200}
                step={10}
                onChange={handleChange}
              />
            </div>
            <div className="Availability">
              <p>Availability</p>
              <input
                type="checkbox"
                id="In_stock"
                name="In_stock"
                value={true}
                onChange={handleChange}
              />
              <label for="In_stock"> In stock</label>
              <br />
              <input
                type="checkbox"
                id="Out_of_stock"
                name="Out_of_stock"
                value={true}
                onChange={handleChange}
              />
              <label for="Out_of_stock"> Out of stock</label>
              <br />
            </div>
            <div className="Size">
              <p>Size</p>
              <input
                type="checkbox"
                id="S"
                name="size"
                value="S"
                onChange={handleChange}
              />
              <label for="S"> S</label>
              <br />
              <input
                type="checkbox"
                id="M"
                name="size"
                value="M"
                onChange={handleChange}
              />
              <label for="M"> M</label>
              <br />
              <input
                type="checkbox"
                id="L"
                name="size"
                value="L"
                onChange={handleChange}
              />
              <label for="L"> L</label>
              <br />
              <input
                type="checkbox"
                id="XL"
                name="size"
                value="XL"
                onChange={handleChange}
              />
              <label for="XL"> XL</label>
              <br />
              <input
                type="checkbox"
                id="XXL"
                name="size"
                value="XXL"
                onChange={handleChange}
              />
              <label for="XXL"> XXL</label>
              <br />
            </div>

            <div className="Size">
              <p>Age (For Kids)</p>
              <input
                type="checkbox"
                id="10"
                name="size"
                value="10"
                onChange={handleChange}
                disabled={!isAgeFilterEnabled}
              />
              <label for="S"> 10</label>
              <br />
              <input
                type="checkbox"
                id="12"
                name="size"
                value="12"
                onChange={handleChange}
                disabled={!isAgeFilterEnabled}
              />
              <label for="M"> 12</label>
              <br />
              <input
                type="checkbox"
                id="14"
                name="size"
                value="14"
                onChange={handleChange}
                disabled={!isAgeFilterEnabled}
              />
              <label for="L"> 14</label>
              <br />
              <input
                type="checkbox"
                id="16"
                name="size"
                value="16"
                onChange={handleChange}
                disabled={!isAgeFilterEnabled}
              />
              <label for="XL"> 16</label>
              <br />
            </div>

            <div className="Type">
              <p>Type</p>
              <input
                type="checkbox"
                id="Dress"
                name="Type"
                value="Dress"
                onChange={handleChange}
              />
              <label for="S"> Dress</label>
              <br />
              <input
                type="checkbox"
                id="Sweater"
                name="Type"
                value="Sweater"
                onChange={handleChange}
              />
              <label for="M"> Sweater</label>
              <br />
              <input
                type="checkbox"
                id="Top"
                name="Type"
                value="Top"
                onChange={handleChange}
              />
              <label for="L"> Top</label>
              <br />
              <input
                type="checkbox"
                id="Skirt"
                name="Type"
                value="Skirt"
                onChange={handleChange}
              />
              <label for="XL"> Skirt</label>
              <br />
              <input
                type="checkbox"
                id="Pants"
                name="Type"
                value="Pants"
                onChange={handleChange}
              />
              <label for="S"> Pants</label>
              <br />
              <input
                type="checkbox"
                id="t-shirt"
                name="Type"
                value="t-shirt"
                onChange={handleChange}
              />
              <label for="M"> T-Shirt</label>
              <br />
              <input
                type="checkbox"
                id="pajama"
                name="Type"
                value="pajama"
                onChange={handleChange}
              />
              <label for="L"> Pajama</label>
              <br />
              <input
                type="checkbox"
                id="shorts"
                name="Type"
                value="shorts"
                onChange={handleChange}
              />
              <label for="XL"> Shorts</label>
              <br />
              <input
                type="checkbox"
                id="Shirt"
                name="Type"
                value="Shirt"
                onChange={handleChange}
              />
              <label for="M"> Shirts</label>
              <br />
              <input
                type="checkbox"
                id="Jacket"
                name="Type"
                value="Jacket"
                onChange={handleChange}
              />
              <label for="L"> Jackets</label>
              <br />
              <input
                type="checkbox"
                id="Suit"
                name="Type"
                value="Suit"
                onChange={handleChange}
              />
              <label for="XL"> Suits</label>
              <br />
            </div>

            {/* <button type="submit" className="applyFilter" >Apply Filters</button> */}
          </form>
        </div>
        <div className="filtredClothes">
          <SortingBar />
          <div className="artical">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductBox
                  key={product.id}
                  product={product}
                  // image={product.image }  // Fallback image
                  // ProductName={product.product_name}
                  // oldPrice={product.old_price}
                  // newPrice={product.new_price}
                  // Stock={product.stocked ? 'In Stock' : 'Out of Stock'}
                />
              ))
            ) : (
              <div>No products available</div>
            )}
            {/* <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/>
            <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/>
            <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/>
            <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/>
            <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/>
            <ProductBox image={man_product1} ProductName="Butter Henry 7 Sleeve Tee Shirt" oldPrice={50} newPrice={20} Stock="On Stock"/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
