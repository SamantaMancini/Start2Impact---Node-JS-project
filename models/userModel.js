const mongoose = require('mongoose');
const validator = require('validator');

// Define the schema for the "User" collection
const userSchema = new mongoose.Schema({
  // User name
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    trim: true,
    // Max length of 40 characters for the user's name
    maxlength: [40, 'A user name must have less or equal then 30 characters'],
   // Min length of 2 characters for the user's name
    minlength: [2, 'A user name must have more or equal then 2 characters'],
    // Validate that the user's name contains only alphabetic characters
    validate: {
      validator: (val) => validator.isAlpha(val, ['en-US'], { ignore: `'` }), //" =" => " " & "-"
      // Error message for invalid user name
      message: 'A user name must only contain characters between A-Z',
    },
  },
  // User's surname
  surname: {
    type: String,
    required: [true, 'A user must have a surname'],
    trim: true,
    // Max length of 40 characters for the user's surname
    maxlength: [
      40,
      'A user surname must have less or equal then 30 characters',
    ],
     // Min length of 2 characters for the user's surname
    minlength: [2, 'A user surname must have more or equal then 2 characters'],
    validate: {
      validator: (val) => validator.isAlpha(val, ['en-US'], { ignore: `'` }), //" =" => " " & "-"
      // Error message for invalid user surname
      message: 'A user surname must only contain characters between A-Z',
    },
  },
  // User's email
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    unique: true,
    lowercase: true,
    // Validate that the emaiil is in a valid format
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
});

// Create the model based on the defined schema
const User = mongoose.model('User', userSchema);

module.exports = User;
