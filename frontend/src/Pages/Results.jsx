import React from 'react';
import './CSS/Results.css'
import { useLocation } from 'react-router-dom';
import ProductBox from '../components/productBox/ProductBox';

function Results() {
  const location = useLocation();
  const { searchTerm, products } = location.state;
  const lowerTerm = searchTerm.toLowerCase();



  // if (!Array.isArray(products) || products.length === 0) {
  //   return (
  //     <div>
  //       No products found.

  //     </div>
  //   );
  // }
  const filteredProducts = products.filter((product) => {
    if (searchTerm === "") {
      // return product;
    } else if (
      product.tags.some((tag) =>
        tag.toLowerCase().includes(` ${lowerTerm} `)
      ) ||
      product.product_name.toLowerCase().includes(` ${lowerTerm} `) ||
      product.category.toLowerCase().includes(lowerTerm) ||
      product.type.toLowerCase().includes(lowerTerm) ||
      product.colors.some((color) =>
        color.toLowerCase().includes(lowerTerm)
      )
    ) {
      return product;
      
    }
  })

  return (
    <div className="search-results">
      <h2 >Search Results for: {searchTerm}</h2>
      
      {filteredProducts.map((product) => (
        
                        <ProductBox
                        key={product.id}
                        product ={product}
                        
                      />
                      

      ))}

      
    </div>
  );
}

export default Results;