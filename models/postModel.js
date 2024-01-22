const mongoose = require('mongoose');
const validator = require('validator');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A post must have a title'],
    trim: true,
    maxlength: [40, 'A post title must have less or equal then 40 characters'],
    minlength: [3, 'A post title must have more or equal then 3 characters'],
    validate: {
      validator: (val) => validator.isAlpha(val, ['en-US'], { ignore: '-' }), //" =" => " " & "-"
      message: 'A post title must only contain characters between A-Z',
    },
  },
  insertionDate: {
    type: Date,
    default: Date.now
  },
  interactions: [{
    type: {
      type: Date,
      default: Date.now
    },
    time: {
      type: Date,
      default: Date.now
    },
    user: { type: mongoose.Types.ObjectId, ref: 'User' }
  }]
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;