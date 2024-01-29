const Order = require('../models/orderModel');

exports.getOrders = async (req, res) => {
  try {
    let query = Order.find();

    if (req.query.createdAt) {
      query = query.where('createdAt').equals(req.query.createdAt)
    }
    const orders = await query

    res.status(200).json({
      status: 'success',
      results: orders.length,
      data: {
        orders,
      },
    });
  } catch (error) {
    res.status(404).json({ 
      status: 'fail', 
      message: error 
    });
  }
};

  exports.addOrder = async (req, res) => {
    try {
      const newOrder = await Order.create(req.body);

      res.status(201).json({
        status: 'success',
        data: {
          order: newOrder
        } 
      })
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: 'Invalid order sent'
      });
    }
  }

  exports.getSingleOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json({ 
          status: 'success', 
          data: {
             order 
            }});
      } catch (error) {
        res.status(404).json({ 
          status: 'fail', 
          message: error
         });
      }
    }

    exports.updateOrder = async(req, res) => {
      try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidatos: true,
        });
        res.status(200).json({
          status: 'succes',
          data: { 
            order 
          },
        });
      } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
          });
      }
    }

    exports.deleteOrder = async (req, res) => {
      try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(204).json({ 
      status: 'success', 
      data: null 
    });
  } catch (error) {
    res.status(404).json({ 
      status: 'fail',
      message: error 
    });   
  }
  };