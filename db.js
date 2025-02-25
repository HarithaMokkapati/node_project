const mongoose = require('mongoose');
require('dotenv').config();
// Define MongoDB connection URL
//const mongoURL = process.env.db_url_local// You can replace 'Haritha' with any database name
const mongoURL = process.env.db_url;

// Establish connection
mongoose.connect(mongoURL)
    .then(() => console.log('Connection established'))
    .catch(err => console.log('Connection Error:', err));

// Get default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('MongoDB connected successfully');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;

