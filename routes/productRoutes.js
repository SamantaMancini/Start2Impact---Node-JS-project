const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Route for getting all orders and adding a new product
router
  .route('/')
  .get(productController.getProducts)
  .post(productController.addProduct);

  // Route for getting , updating and deleting a single product by its id
router
  .route('/:id')
  .get(productController.getSingleProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
