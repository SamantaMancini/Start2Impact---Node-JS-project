const express = require('express');
const interactionController = require('../controllers/interactionController');

const router = express.Router();

router
  .route('/')
  .get(interactionController.getAllInteraction)
  .post(interactionController.createInteraction);

router
  .route('/:id')
  .get(interactionController.getInteraction)
  .patch(interactionController.updateInteraction)
  .delete(interactionController.deleteInteraction);

module.exports = router;