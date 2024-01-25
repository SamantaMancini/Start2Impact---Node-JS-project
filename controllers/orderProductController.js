const Order = require('../models/orderModel');


exports.getOrdersByProductNames = async (req, res, next) => {
  const productNames = req.query.productNames.split(',');

  try {
    const orders = await Order.find({});
  if (!orders) {
    return next({ status: 404, message: 'No orders found'});
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
   console.error('Error while loading orders', error);
   res.status(500).json({ error: "Error while loading orders"}); 
}
};