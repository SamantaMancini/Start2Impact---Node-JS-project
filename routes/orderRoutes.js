const express = require('express');
const orderController = require('../controllers/orderController');
const orderProductController = require('../controllers/orderProductController');

const router = express.Router({ mergeParams: true });

router.route('/').get(orderController.getOrders).post(orderController.addOrder);

router
  .route('/getOrdersByProductName')
  .get(orderProductController.getOrdersByProductNames);

router
  .route('/:id')
  .get(orderController.getSingleOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
