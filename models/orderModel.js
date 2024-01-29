const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    users: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Order must contain one or more users.'],
      },
    ],
    products: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true, 'Order must contain one or more products.'],
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
);

orderSchema.pre(/find/, function (next) {
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

module.exports = mongoose.model("Order", orderSchema);