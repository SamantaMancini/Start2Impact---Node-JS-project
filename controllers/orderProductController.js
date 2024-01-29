const Order = require('../models/orderModel');


exports.getOrdersByProductNames = async (req, res, next) => {
  try {
    const productNames = req.query.productNames.split(',');

    // Look for orders that contain **all** of the supplied product names
    const orders = await Order.find();
    if (!orders) {
      return next({ status: 'fail', message: 'Error getting Orders Document', statusCode: 404 });
    }
  
    const filteredOrders = orders.filter((order) =>
      productNames.every((productName) =>
        order.products.some((product) => product.name === productName),
      ),
    );
    return res.status(200).json({
      status: 'success',
      results: filteredOrders.length,
      data: {
        data: filteredOrders,
      },
    });
  } catch (error) {
    res.status(404).json({ 
      status: 'fail',
      message: error
    });
  }
};