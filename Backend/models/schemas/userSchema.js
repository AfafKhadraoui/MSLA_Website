import mongoose from "mongoose";

let Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: {type: String, required: true},
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],


})
export default userSchema;