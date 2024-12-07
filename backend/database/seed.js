const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const BudgetRule = require('../models/budgetRules');
const Investment = require('../models/investments');

// MongoDB connection string
const dbURI = 'mongodb://localhost:27017/cueballCapital'; // Change this if needed

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Read budget.csv and insert data into MongoDB
const loadCSVData = () => {
  // Load Budget Rules
  const budgetRules = [];
  fs.createReadStream('csv/budget.csv')
    .pipe(csv())
    .on('data', (row) => {
      budgetRules.push(row);
    })
    .on('end', async () => {
      await BudgetRule.insertMany(budgetRules);
      console.log('Budget rules inserted');
    });

  // Load Investments
  const investments = [];
  fs.createReadStream('csv/investments.csv')
    .pipe(csv())
    .on('data', (row) => {
      investments.push(row);
    })
    .on('end', async () => {
      await Investment.insertMany(investments);
      console.log('Investments inserted');
    });
};

loadCSVData();
