const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interactionSchema = new Schema({
  type: String,
  time: Date,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;