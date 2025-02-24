const mongoose = require('mongoose');

// Define MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/Haritha'; // You can replace 'Haritha' with any database name

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
