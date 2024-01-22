const mongoose = require('mongoose');

// Definizione dello schema per la collezione "User"
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: false
  }
});

// Creazione del modello basato sullo schema definito
const User = mongoose.model('User', userSchema);

module.exports = User;