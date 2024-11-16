const passport = require('passport');
const person = require('./models/person');
const LocalStrategy = require('passport-local').Strategy;

// Configure the local strategy for Passport
passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    // Find the user in the database by username
    //console.log(username, password);
    
    const user = await person.findOne({ username: username });
    if (!user) {
      return done(null, false, { message: 'Invalid username' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordMatch = await user.comparePassword(password); // Ensure comparePassword is asynchronous if using bcrypt
    if (isPasswordMatch) {
      return done(null, user); // Authentication successful
    } else {
      return done(null, false, { message: 'Invalid password' }); // Password mismatch
    }
  } catch (err) {
    return done(err); // Handle errors
  }
}));

// Serialize and deserialize user for session management (optional if sessions are used)
passport.serializeUser((user, done) => {
  done(null, user.id); // Store user ID in session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await person.findById(id);
    done(null, user); // Retrieve user by ID
  } catch (err) {
    done(err, null);
  }
});

// Export the configured Passport object
module.exports = passport;
