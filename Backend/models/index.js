import mongoose from 'mongoose'
import userSchema from './schemas/userSchema'
import productSchema from './schemas/productSchema'
import orderSchema from './schemas/orderschema'

export const userCollection = mongoose.model("users", userSchema)
export const productCollection = mongoose.model("products", productSchema)
export const orderCollection = mongoose.model("orders", orderSchema)