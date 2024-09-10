import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    product_id: { type: Number, required: true, unique: true },
    product_name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    old_price: { type: Number },
    new_price: { type: Number, required: true },
    colors: [String],
    tags: [String],
    size: [String],
    quantity: { type: Number },
    description: { type: String },
    image: { type: String }
});

// Exporting the Mongoose model
export default productSchema;
