const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  ID: { type: Number, required: true },
  Date: { type: String, required: true },
  Amount: { type: Number, required: true },
  Sector: { type: String, required: true },
});

const Investment = mongoose.model('Investment', investmentSchema);

module.exports = Investment;
