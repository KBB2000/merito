const express = require('express');
const router = express.Router();
const Investment = require('../models/investments'); // Your model

// Route to get all investments
router.get('/investments', async (req, res) => {
  try {
    const investments = await Investment.find();
    res.status(200).json(investments);
  } catch (error) {
    console.error('Error fetching investments:', error);
    res.status(500).json({ error: 'Failed to fetch investments' });
  }
});

module.exports = router;
