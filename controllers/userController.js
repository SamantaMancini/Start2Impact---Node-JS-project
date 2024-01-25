const User = require('../models/userModel');

exports.getUsers = async (req, res, next) => {
  try {
     let query = User.find();
  
      // Filtraggio
     const queryObj = { ...req.query };
     let queryStr = JSON.stringify(queryObj)
     .replace(/\b(gte|gt|lte|lt|in|ne)\b/g, (match) => `${match}`);
     query = query.find(JSON.parse(queryStr));
  
      // Ordinamento
     const sortBy = req.query.sort ? req.query.sort.split(',').join(' ') : '-createdAt';
     query = query.sort(sortBy);
  
     const users = await query;
     if (!users) {
      return next({ status: 404, message: 'No users found'});
     }
  
     res.status(200).json({
     status: 'success',
     results: users.length,
     data: {
         users,
       }
     })
    } catch (error) {
     console.error('Error while loading users', error);
     res.status(500).json({ error: 'Error while loading users'});
    }
  }

  exports.addUser = async (req, res, next) => {
    try {
      const user = await User.create(req.body);

      res.status(201).json({
        status: 'success',
        data: user,
      })
    } catch (error) {
      console.error('Error while creating user', error);
      res.status(500).json({ error: 'Error while creating user'});
    }
  }

  exports.getSingleUser = async (req, res, next) => {
    try {
        let query = User.findById(req.params.id);
        const user = await query;
        if (!user) {
         return next({ status: 404, message: 'No user found' });
        }
        res.status(200).json({ status: 'success', data: { user } });
      } catch (error) {
        console.error('Error while retrieving user', error);
        res.status(500).json({ error: 'Error while retrieving user' });
      }
    }

    exports.updateUser = async(req, res, next) => {
      try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidatos: true,
        });
        if (!user) {
          return next({ status: 404, message: 'No user found'})
        }
        res.status(200).json({
          status: 'succes',
          data: user,
        });
      } catch (error) {
        console.error('Error while updating user', error);
        res.status(500).json({ error: 'Error while updating user' });
      }
    }

    exports.deleteUser = async (req, res, next) => {
      try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return next({ status: 404, message: 'No order found'});
    }
    res.status(204).json({ status: 'success', data: null });
  } catch (error) {
    console.error('Error while deleting user', error);
    res.status(500).json({ error: 'Error while deleting user' });   
  }
  };

