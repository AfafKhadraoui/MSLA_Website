import mongoose from 'mongoose'
import userSchema from './schemas/userSchema.js'
import productSchema from './schemas/productSchema.js'
import orderSchema from './schemas/orderschema.js'

export const userCollection = mongoose.model("users", userSchema)
export const productCollection = mongoose.model("products", productSchema)
export const orderCollection = mongoose.model("orders", orderSchema)