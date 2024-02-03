const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // Array of users associated with the order
  users: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Order must contain one or more users.'],
    },
  ],
  // Array of products associated with the order
  products: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'Order must contain one or more products.'],
    },
  ],
  // Date when the order was created
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Populate users products when finding orders
orderSchema.pre('find', function (next) {
  this.populate({
    path: 'users',
    select: 'name',
  });
  this.populate({
    path: 'products',
    select: 'name',
  });
  next();
});

module.exports = mongoose.model('Order', orderSchema);
