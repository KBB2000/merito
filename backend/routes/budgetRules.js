const express = require('express');
const router = express.Router();
const BudgetRule = require('../models/budgetRules'); // Your model

// Route to get all budget rules
router.get('/budget', async (req, res) => {
  try {
    console.log('Fetching budget rules...');
    const budgetRules = await BudgetRule.find();
    console.log('Fetched budget rules:', budgetRules);  // Log the result
    res.status(200).json(budgetRules);
  } catch (error) {
    console.error('Error fetching budget rules:', error);
    res.status(500).json({ error: 'Failed to fetch budget rules' });
  }
});

module.exports = router;
