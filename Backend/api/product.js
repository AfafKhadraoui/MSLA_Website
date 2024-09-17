import { Router } from "express";
import { productCollection, userCollection } from "../models/index.js"; // Import the products collection from the model
import fetchUser from "../middlewares/fetchUser.js";

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

    if (Out_of_stock && !In_stock) {
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

  router.get("/get/all", async (req, res) => {
    try {
      let Products = await productCollection.find({});
      if (Products.length === 0) {
        return res.status(404).send({ message: "No products found" });
      }
      res.status(200).send({ Products });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err && err.errorResponse ? err.errorResponse.errmsg : "Error",
      });
    }
  });

  router.get('/:id([0-9a-fA-F]{24})', async (req, res) => {
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

  //get all products

  //add to wishlist 
  router.post("/addToWishlist", fetchUser, async (req, res) => {
    const { id } = req.body;
    const { user_id } = req.user;
    try {
      const user = await userCollection.findOne({ user_id: user_id });
      const product = await productCollection.findOne({ product_id: id });

      if (user.wishlist.some(product => product?.product_id === id)) {
        return res.status(400).send({ message: "Product already in wishlist" });
      }

      user.wishlist.push(product);
      await userCollection.findOneAndUpdate(
        { user_id: user_id },
        {
          $set: { wishlist: user.wishlist },
        },
        { new: true }
      );
      res.status(200).send({ message: 'updated successfully' })
    } catch (err) {
      res
        .status(500)
        .send({ message: err.message });
    }
  })

  




  return router;
};
