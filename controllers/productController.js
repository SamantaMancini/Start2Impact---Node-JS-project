const Product = require('../models/productModel');

// CREATE - Aggiungi un nuovo utente
exports.createProduct= async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json({
        status: 'success',
        data: [
            newProduct
        ] 
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  };
  
  // READ - Ottieni un singolo utente
  exports.getProduct = async (req, res, next) => {
    try {
      const product  = await Product.findById(req.params.id);
      if (!product) {
        return next(new Error('Product not found'));
      }
      res.status(200).json({ status: 'success', data: [ product ] });
    } catch (error) {
      next(error);
    }
  };
  
  // READ - Ottieni tutti gli utenti o filtra per nome
  exports.getAllProducts = async (req, res) => {
    try {
      let query;
      if (req.query.name) {
        query = { name: req.query.name };
      }
      const products = await Product.find(query);
      res.status(200).json({
        status: 'success',
        results: products.length,
        data: [ products ]
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  };
  
  // UPDATE - Modifica un utente esistente
  exports.updateProduct = async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!updatedProduct) {
        return res.status(404).json({
          status: 'error',
          message: 'Product not update'
        });
      }
      res.status(200).json({
        status: 'success',
        data: {
          post: updatedProduct
        }
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  };
  
  // DELETE - Cancella un utente
  exports.deleteProduct = async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({
          status: 'error',
          message: 'Product not deleted'
        });
      }
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
  };