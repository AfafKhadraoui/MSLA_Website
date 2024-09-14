import mongoose from "mongoose";

let Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: { type: Number, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwrd: { type: String, required: true, unique: false },
    orders: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    wishlist: { type: Array }

})
userSchema.index({ first_name: 1, last_name: 1 }, { unique: true });


userSchema.virtual('username').get(function () {
    return `${this.first_name}_${this.last_name}`
})

userSchema.set('toJSON', { virtuals: true })
userSchema.set('toObject', { virtuals: true })
export default userSchema;