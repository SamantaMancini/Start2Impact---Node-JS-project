const Product = require('../models/productModel');
const AppError = require('../utils/appError');

// Get all products
exports.getProducts = async (req, res, next) => {
  try {
    let query = Product.find();

    const products = await query;

    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Add a new product
exports.addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single product by ID
exports.getSingleProduct = async (req, res, next) => {
  try {
    let query = Product.findById(req.params.id);
    const product = await query;
    if (!product) {
      return next(new AppError('No product found with that ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update an existing product
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidatos: true,
    });
    if (!product) {
      return next(new AppError('No product found with that ID', 404));
    }
    res.status(201).json({
      status: 'succes',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return next(new AppError('No product found', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
