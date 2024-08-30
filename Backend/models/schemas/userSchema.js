import mongoose from "mongoose";

let Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true, unique: true },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],


})
export default userSchema;