const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Route for getting all users and adding a new user
router.route('/').get(userController.getUsers).post(userController.addUser);

// Route for getting , updating and deleting a single user by its id
router
  .route('/:id')
  .get(userController.getSingleUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
