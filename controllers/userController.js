const User = require('../models/userModel');
const AppError = require('../utils/appError');

// Get all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find(req.query);

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Add a new user
exports.addUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single user by ID
exports.getSingleUser = async (req, res, next) => {
  try {
    let query = User.findById(req.params.id);
    const user = await query;
    if (!user) {
      next(new AppError('No user found with that ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Update an existing user
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidatos: true,
    });
    if (!user) {
      return next(new AppError('No user found with that ID', 404));
    }
    res.status(201).json({
      status: 'succes',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return next(new AppError('No user found with that ID', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
