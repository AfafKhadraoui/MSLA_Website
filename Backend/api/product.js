import { Router } from "express";
import { productCollection } from "../models/index.js"; // Import the products collection from the model

export default ({ config, db }) => {
  let router = Router();

  // Define the API to get products, optionally filtered by query parameters
  router.post("/filter", async (req, res) => {
    const { category, color, size, In_stock, Out_of_stock, price, Type } = req.body;
    
    console.log("Request Body:", req.body);
  
    const matchConditions = [];
  
    if (category && category.length > 0) {
      matchConditions.push({ category: { $in: category } });
    }
  
    if (color && color.length > 0) {
      matchConditions.push({ colors: { $in: color } });
    }
  
    if (size && size.length > 0) {
      matchConditions.push({ size: { $in: size } });
    }
  
    if (In_stock && !Out_of_stock) {
      matchConditions.push({ stocked: true });
    }
  
    if (Out_of_stock && !In_stock ) {
      matchConditions.push({ stocked: false });
    }

    if (Type && Type.length > 0) {
      matchConditions.push({ type: { $in: Type } })
    }
  
    matchConditions.push({ new_price: { $lte: price } });
  
    try {
      const products = await productCollection.aggregate([
        { $match: { $and: matchConditions } }
      ]).exec();  // .toArray() is used to convert the cursor to an array
      console.log("Filtered Products:", products);
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const product = await productCollection.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product', error });
    }
  });
  
  
  
  

  return router;
};
