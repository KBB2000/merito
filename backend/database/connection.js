const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // MongoDB connection URL
const dbName = 'cueball_capital'; // Database name

let db;

const connectToMongoDB = async () => {
  try {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB successfully');
    db = client.db(dbName);
    return db;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

const getDB = () => {
  if (!db) throw new Error('Database not initialized. Call connectToMongoDB first.');
  return db;
};

module.exports = { connectToMongoDB, getDB };
