import mongoose, { Schema } from "mongoose";

let Schema = new Schema();

const orderSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
    },
  ],
  total_price: { type: Number, required: true },
});

export default orderSchema;
