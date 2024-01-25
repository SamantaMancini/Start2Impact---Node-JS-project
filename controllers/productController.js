const Product = require('../models/productModel');

exports.getProducts = async (req, res, next) => {
  try {
     let query = Product.find();
  
      // Filtraggio
     const queryObj = { ...req.query };
     let queryStr = JSON.stringify(queryObj)
     .replace(/\b(gte|gt|lte|lt|in|ne)\b/g, (match) => `${match}`);
     query = query.find(JSON.parse(queryStr));
  
      // Ordinamento
     const sortBy = req.query.sort ? req.query.sort.split(',').join(' ') : '-createdAt';
     query = query.sort(sortBy);
  
     const products = await query;
     if (!products) {
      return next({ status: 404, message: 'No products found'});
     }
  
     res.status(200).json({
     status: 'success',
     results: products.length,
     data: {
         products,
       }
     })
    } catch (error) {
     console.error('Error while loading products', error);
     res.status(500).json({ error: 'Error while loading products'});
    }
  }

  exports.addProduct = async (req, res, next) => {
    try {
      const product = await Product.create(req.body);

      res.status(201).json({
        status: 'success',
        data: product,
      })
    } catch (error) {
      console.error('Error while creating order', error);
      res.status(500).json({ error: 'Error while creating order'});
    }
  }

  exports.getSingleProduct = async (req, res, next) => {
    try {
        let query = Product.findById(req.params.id);
        const product = await query;
        if (!product) {
         return next({ status: 404, message: 'No product found' });
        }
        res.status(200).json({ status: 'success', data: { product } });
      } catch (error) {
        console.error('Error while retrieving product', error);
        res.status(500).json({ error: 'Error while retrieving product' });
      }
    }

    exports.updateProduct = async(req, res, next) => {
      try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidatos: true,
        });
        if (!product) {
          return next({ status: 404, message: 'No product found'})
        }
        res.status(200).json({
          status: 'succes',
          data: order,
        });
      } catch (error) {
        console.error('Error while updating product', error);
        res.status(500).json({ error: 'Error while updating product' });
      }
    }

    exports.deleteProduct = async (req, res, next) => {
      try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return next({ status: 404, message: 'No product found'});
    }
    res.status(204).json({ status: 'success', data: null });
  } catch (error) {
    console.error('Error while deleting product', error);
    res.status(500).json({ error: 'Error while deleting product' });   
  }
  };