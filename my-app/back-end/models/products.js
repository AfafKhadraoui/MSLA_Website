// back-end/models/products.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  colors: { type: [String], required: true }, // Array of strings for colors, required
  sizes: { type: [String], required: true }   // Array of strings for sizes, required
});

export const Product = mongoose.model('Product', productSchema);
