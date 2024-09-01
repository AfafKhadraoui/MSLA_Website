// src/models/schemas/productSchema.js

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  colors: { type: [String], required: true },
  sizes: { type: [String], required: true },
});

export default mongoose.model('Product', ProductSchema);
