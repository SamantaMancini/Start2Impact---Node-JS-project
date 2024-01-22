const Post = require('../models/interactionModel');
const factory = require('./handlerFactory');

// new version with factory file
exports.getAllPosts = factory.getAll(Post);
exports.getPost = factory.getOne(Post);
exports.createPost = factory.createOne(Post);
exports.updatePost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);