import express from 'express';
import dotenv from 'dotenv';
import api from './api/index.js';
import CONFIG from '../src/config.json'
import mongoose from 'mongoose';

dotenv.config();

const PORT = CONFIG.port || 7000;
const app = express();

// Connect to Database
mongoose.connect(CONFIG.mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // API routes
    app.use('/api', api({ config: CONFIG }));

    // Start the server
    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
