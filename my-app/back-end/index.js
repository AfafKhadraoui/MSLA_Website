import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Products2 from './models/products.js'; // Ensure this model is correct

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/project';

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// API route to get all products
app.get('/api/products', async (req, res) => {
  try {
    const products2 = await Products2.find({});
    res.json(products2);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to update product quantity
app.put('/api/products/:id', async (req, res) => {
  try {
    const product = await Products2.findById(req.params.id);
    if (product) {
      product.quantity = req.body.quantity;
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to increase product quantity
app.post('/api/products/:id/increase', async (req, res) => {
  try {
    const product = await Products2.findById(req.params.id);
    if (product) {
      if (product.quantity > 0) {
        product.quantity -= 1;
        await product.save();
        res.json(product);
      } else {
        res.status(400).json({ message: 'Not enough stock available' });
      }
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to decrease product quantity
app.post('/api/products/:id/decrease', async (req, res) => {
  try {
    const product = await Products2.findById(req.params.id);
    if (product) {
      product.quantity += 1;
      await product.save();
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
