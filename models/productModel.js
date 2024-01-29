const mongoose = require('mongoose');
const validator = require('validator');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      lowercase: true,
      unique: true,
      trim: true,
      maxlength: [
        40,
        'A product name must have less or equal then 40 characters',
      ],
      minlength: [
        3,
        'A product name must have more or equal then 3 characters',
      ],
      validate: {
        validator: (val) => validator.isAlpha(val, ['en-US'], { ignore: '-' }), //" =" => " " & "-"
        message: 'A product name must only contain characters between A-Z',
      },
    },
  },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;