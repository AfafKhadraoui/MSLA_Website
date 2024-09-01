import mongoose from "mongoose";
import productSchema from "./schemas/productSchema.js";

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection events
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});

// Export the Product model
export const Product = mongoose.model("Product", productSchema);
