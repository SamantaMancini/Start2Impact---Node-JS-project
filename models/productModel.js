const mongoose = require('mongoose');
const validator = require('validator');

const productSchema = new mongoose.Schema({
  // Product name
  name: {
    type: String,
    required: [true, 'A product must have a name'],
    unique: true,
    trim: true,
    // Max length of 40 characters
    maxlength: [
      40,
      'A product name must have less or equal then 40 characters',
    ],
    // Min length of 3 characters for the product name
    minlength: [3, 'A product name must have more or equal then 3 characters'],
    // Validate that the product name contains only alphabetic characters
    validate: {
      validator: (val) => validator.isAlpha(val, ['en-US'], { ignore: '-' }), 
     // Error message for invalid product name
      message: 'A product name must only contain characters between A-Z',
    },
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
