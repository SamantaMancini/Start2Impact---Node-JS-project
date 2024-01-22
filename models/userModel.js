const mongoose = require('mongoose');
const validator = require('validator');

// Definizione dello schema per la collezione "User"
const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: [true, 'A user must have a nickname'],
      trim: true,
      maxlength: [40, 'A user nickname must have less or equal then 30 characters'],
      minlength: [2, 'A user nickname must have more or equal then 2 characters'],
      validate: {
        validator: (val) => validator.isAlpha(val, ['en-US'], { ignore: `'` }), //" =" => " " & "-"
        message: 'A user nickname must only contain characters between A-Z',
      },
  },
  age: {
    type: Number,
    required: [true, 'A user must have an age'],
  city: {
    type: String,
    required: [true, 'A user must have a city'],
    trim: true,
    maxlength: [
      40,
      'A user city must have less or equal then 30 characters',
    ],
    minlength: [
      2,
      'A user city must have more or equal then 2 characters',
    ],
    validate: {
      validator: (val) => validator.isAlpha(val, ['en-US'], { ignore: `'` }), //" =" => " " & "-"
      message: 'A user city must only contain characters between A-Z',
    },
  },
  
},
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
},
);

// Creazione del modello basato sullo schema definito
const User = mongoose.model('User', userSchema);

module.exports = User;