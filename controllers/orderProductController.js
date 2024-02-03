const Order = require('../models/orderModel');
const AppError = require('../utils/appError');

// Get all orders by product names
exports.getOrdersByProductNames = async (req, res, next) => {
  try {
    const productNames = req.query.productNames.split(',');
    const orders = await Order.find({});
    if (!orders) {
      return next(new AppError('Error getting Orders Names', 404));
    }

    const filteredOrders = orders.filter((order) =>
        order.products.some((product) => productNames.includes(product.name)),
    );

    return res.status(200).json({
      status: 'success',
      results: filteredOrders.length,
      data: {
        data: filteredOrders,
      },
    });
  } catch (error) {
    next(error);
  }
};
