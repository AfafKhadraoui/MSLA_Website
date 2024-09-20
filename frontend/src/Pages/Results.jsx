// import React from 'react';
// import './CSS/Results.css';
// import { useLocation } from 'react-router-dom';
// import ProductBox from '../components/productBox/ProductBox';

// function Results() {
//   const location = useLocation();
//   const { searchTerm, products } = location.state || {}; // Ensure location.state exists
//   const lowerTerm = searchTerm ? searchTerm.toLowerCase() : ""; // Handle case where searchTerm might be undefined

//   // Ensure products is an array
//   const filteredProducts = Array.isArray(products) ? products.filter((product) => {
//     if (lowerTerm === "") {
//       return true; // If no search term, return all products
//     } else if (
//       product.tags.some((tag) =>
//         tag.toLowerCase().includes(lowerTerm)
//       ) ||
//       product.product_name.toLowerCase().includes(lowerTerm) ||
//       product.category.toLowerCase().includes(lowerTerm) ||
//       product.type.toLowerCase().includes(lowerTerm) ||
//       product.colors.some((color) =>
//         color.toLowerCase().includes(lowerTerm)
//       )
//     ) {
//       return true; // If it matches the search term, return true
//     }
//     return false;
//   }) : [];

//   return (
//     <div className="search-results">
//       <h2>Search Results for: {searchTerm}</h2>
      
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map((product) => (
//           <ProductBox
//             key={product.id}
//             product={product}
//           />
//         ))
//       ) : (
//         <div>No products found.</div>
//       )}
//     </div>
//   );
// }

// export default Results;
