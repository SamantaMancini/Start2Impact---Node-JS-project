const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router
  .route('/')
  .get(orderController.getOrders);
  .post(orderController.addOrder);

router
  .route('/:id')
  .get(orderController.getSingleOrder);
  .patch(orderController.updateOrder);
  .delete(orderController.deleteOrder);


module.exports = router;