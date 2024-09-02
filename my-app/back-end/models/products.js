import mongoose from 'mongoose';

const product2Schema = new mongoose.Schema({
  product_id: { type: Number, required: true },
  product_name: { type: String, required: true },
  image_path: { type: String, required: true },  // Updated to 'image_path'
  old_price: { type: Number, required: true },
  new_price: { type: Number, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: [String], required: true },
  colors: { type: [String], required: true },
  description: { type: String, required: true },
  tags: { type: [String], required: true },
  quantity: { type: Number, required: true },
  stocked: { type: Boolean, required: true }
}, { collection: 'products2' });

const Products2 = mongoose.model('Products2', product2Schema);

export default Products2;
