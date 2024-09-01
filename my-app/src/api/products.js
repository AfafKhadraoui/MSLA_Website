// src/api/products.js

import express from 'express';
import { Product } from '../models/index.js';

const router = express.Router();

// GET all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

export default router;
