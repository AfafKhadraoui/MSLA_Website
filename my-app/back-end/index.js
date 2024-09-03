// back-end/index.js
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Product } from './models/products.js'; // Use named import

dotenv.config(); // Load .env variables

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/project';

// Connect to MongoDB
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));


// API route to get all products
// back-end/index.js
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({}); // Fetch specific fields
    console.log(products); // Log the products to verify
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err); // Log the error
    res.status(500).json({ message: err.message });
  }
});


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
