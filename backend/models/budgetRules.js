const mongoose = require('mongoose');

const budgetRuleSchema = new mongoose.Schema({
  ID: { type: Number, required: true },
  Amount: { type: Number, required: true },
  'Time Period': { type: String, required: true },
  Sector: { type: String, required: true },
});

const BudgetRule = mongoose.model('BudgetRule', budgetRuleSchema);

module.exports = BudgetRule;
