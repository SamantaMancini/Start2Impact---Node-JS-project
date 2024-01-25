const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
  }
})
productSchema.statics.findByName = function (name) {
  return this.findOne({ name });
};

const Product = mongoose.model('Product', productSchema);


module.exports = Product;