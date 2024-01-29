const Order = require('../models/orderModel');


exports.getOrdersByProductNames = async (req, res, next) => {
  try {
    const orders = await Order.find({});
    const productNames = req.query.productNames.split(',');
    const filteredOrders = orders.filter((order) =>
    productNames.every((productName) =>
      order.products.some((product) => product.name === productName),
    ),
  );
    if (orders.length === 0) {
      return next({ status: 404, message: 'No orders found' });
    }
    return res.status(200).json({
      status: 'success',
      results: filteredOrders.length,
      data: {
        data: filteredOrders,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error while loading orders" });
  }
};