const express = require('express');
const postInteractionController = require('../controllers/postInteractionController'); // Importa il nuovo controller
const postController = require('../controllers/postController');

const router = express.Router({ mergeParams: true }); // mergeparams?? -------------

router
  .route('/')
  .get(postController.getAllPosts)
  .post(postController.createPost);

router
  .route('/getPostsByInteraction')
  .get(postInteractionController.getPostByInteraction);
router
  .route('/:id')
  .get(postController.getPost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;