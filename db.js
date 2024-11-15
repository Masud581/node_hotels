const mongoose = require('mongoose');

//define the MonoDB connection URL
const mongoURL='mongodb://localhost:27017/hotels';

//connect to the MongoDB database
mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

//define the schema for the hotel collection
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', () => {
    console.log('Error connecting to MongoDB server');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

//export the database connection

module.exports = db;