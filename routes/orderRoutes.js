const express = require('express');
const orderController = require('../controllers/orderController');
const orderProductController = require('../controllers/orderProductController');

const router = express.Router({ mergeParams: true });

// Route for getting all orders and adding a new order
router.route('/')
  .get(orderController.getOrders)
  .post(orderController.addOrder);

// Route for getting all orders by product names
router
  .route('/getOrdersByProductName')
  .get(orderProductController.getOrdersByProductNames);

// Route for getting , updating and deleting a single order by its id
router
  .route('/:id')
  .get(orderController.getSingleOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
