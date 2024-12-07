const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const budgetRoutes = require('./routes/budgetRules');
const investmentRoutes = require('./routes/investments');
const cors = require('cors');

const app = express();


// Middleware
app.use(bodyParser.json());

// MongoDB connection (update with your connection string if using Atlas)
mongoose.connect('mongodb://localhost:27017/cueball', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

// Routes
app.use('/api/budget', budgetRoutes);
app.use('/api/investments', investmentRoutes);

app.use(cors());

// Server setup
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
