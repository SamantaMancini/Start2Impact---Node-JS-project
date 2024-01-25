const Order = require('../models/orderModel');

exports.getOrders = async (req, res, next) => {
  try {
     let query = Order.find();
  
      // Filtraggio
     const queryObj = { ...req.query };
     let queryStr = JSON.stringify(queryObj)
     .replace(/\b(gte|gt|lte|lt|in|ne)\b/g, (match) => `${match}`);
     query = query.find(JSON.parse(queryStr));
  
      // Ordinamento
     const sortBy = req.query.sort ? req.query.sort.split(',').join(' ') : '-createdAt';
     query = query.sort(sortBy);
  
     const orders = await query;
     if (!orders) {
      return next({ status: 404, message: 'No orders found'});
     }
  
     res.status(200).json({
     status: 'success',
     results: orders.length,
     data: {
         orders,
       }
     })
    } catch (error) {
     console.error('Error while loading orders', error);
     res.status(500).json({ error: 'Error while loading orders'});
    }
  }

  exports.addOrder = async (req, res, next) => {
    try {
      const order = await Order.create(req.body);

      res.status(201).json({
        status: 'success',
        data: order,
      })
    } catch (error) {
      console.error('Error while creating order', error);
      res.status(500).json({ error: 'Error while creating order'});
    }
  }

  exports.getSingleOrder = async (req, res, next) => {
    try {
        let query = Order.findById(req.params.id);
        if (req.query.populate) {
           query = query.populate(req.query.populate);
        }
        const order = await query;
        if (!order) {
         return next({ status: 404, message: 'No order found' });
        }
        res.status(200).json({ status: 'success', data: { order } });
      } catch (error) {
        console.error('Error while retrieving order', error);
        res.status(500).json({ error: 'Error while retrieving order' });
      }
    }

    exports.updateOrder = async(req, res, next) => {
      try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidatos: true,
        });
        if (!order) {
          return next({ status: 404, message: 'No order found'})
        }
        res.status(200).json({
          status: 'succes',
          data: order,
        });
      } catch (error) {
        console.error('Error while updating order', error);
        res.status(500).json({ error: 'Error while updating order' });
      }
    }

    exports.deleteOrder = async (req, res, next) => {
      try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return next({ status: 404, message: 'No order found'});
    }
    res.status(204).json({ status: 'success', data: null });
  } catch (error) {
    console.error('Error while deleting order', error);
    res.status(500).json({ error: 'Error while deleting order' });   
  }
  };