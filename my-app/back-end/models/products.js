import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  product_id: Number,
  product_name: String,
  image_path: String,
  old_price: Number,
  new_price: Number,
  category: String,
  type: String,
  size: [String],
  colors: [String],
  description: String,
  tags: [String],
  quantity: Number,
  stocked: Boolean
}, { collection: 'products2' });

export const Product = mongoose.model('Product', productSchema);
