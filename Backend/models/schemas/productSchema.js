import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const productSchema = new Schema({
    product_id: { type: Number, required: true, unique: true },
    product_name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    old_price: { type: Number },
    new_price: { type: Number, required: true },
    colors: [String],
    tags: [String],
    size: [String],
    quantity: { type: Number },
    description: { type: String }

})
export default productSchema