const express = require('express');
const db = require('./db'); // Ensure your `db` module is implemented correctly
const personRoute = require('./routes/personRoute'); // Ensure this file exports a valid router
const menuRoute = require('./routes/menuRoute'); // Ensure this file exports a valid router
const passport = require('./auth'); // Ensure this file configures and exports a valid passport object

const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

// Logging middleware
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request received to ${req.url} with method ${req.method}`);
  next();
};
app.use(logRequest);

// Initialize Passport
app.use(passport.initialize());

// Authentication middleware for protected routes
const localMiddleware = passport.authenticate('local', { session: false });

// Public route
app.get('/', (req, res) => {
  res.send('Welcome to the restaurant management system');
});

// Protected routes
app.use('/person',localMiddleware, personRoute); // Authentication applied to /person routes
app.use('/menu', menuRoute); // No authentication applied to /menu routes

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
