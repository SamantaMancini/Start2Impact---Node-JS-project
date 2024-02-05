const Order = require('../models/orderModel');
const AppError = require('../utils/appError');

// Get all orders
exports.getOrders = async (req, res, next) => {
  try {
    let query = req.query.createdAt ? 
    Order.find({ createdAt: new Date(req.query.createdAt) }) :
    Order.find({});
    
    const orders = await query;

    res.status(200).json({
      status: 'success',
      results: orders.length,
      data: {
        orders,
      },
      requestedAt: req.requestTime,
    });
  } catch (error) {
    next(error);
  }
};

// Add a new order
exports.addOrder = async (req, res, next) => {
  try {
    const newOrder = (await Order.create(req.body))

    res.status(201).json({
      status: 'success',
      data: {
        order: newOrder,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get a single order by ID
exports.getSingleOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return next(new AppError('No order found with that ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        order,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update an existing order
exports.updateOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidatos: true,
    });

    if (!order) {
      return next(new AppError('No order found with that ID', 404));
    }
    res.status(200).json({
      status: 'succes',
      data: {
        order,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Delete an order by ID
exports.deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return next(new AppError('No order found with that ID', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
