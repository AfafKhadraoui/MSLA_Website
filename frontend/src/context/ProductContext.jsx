import { createContext, useState } from 'react';
import Products from '../components/Assets/products';  // Your existing product.js file

// Create a context
export const ProductContext = createContext();

// Create a provider component
const ProductProvider = (props) => {
  const [products, setProducts] = useState(Products);

  // You can add any functions here to update, delete, or modify the products
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.product_id === updatedProduct.product_id ? updatedProduct : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.product_id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
