const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/gofood';
mongoose.connect(mongoURI)
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch(err => console.log('❌ MongoDB Connection Error: ', err));

// Route Middleware
app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/order'));
app.use('/api/orders', require('./routes/DisplayData'));

app.get('/', (req, res) => {
    res.send('GoFood Backend API is Running!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});