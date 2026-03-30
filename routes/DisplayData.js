const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem'); // Pulling in the blueprint you just made

router.post('/foodData', async (req, res) => {
    try {
        // This tells Mongoose to go to MongoDB and fetch absolutely everything in the food_items collection
        const fetched_data = await FoodItem.find({}); 
        
        // We send it back to the frontend inside an array 
        res.send([fetched_data]); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;