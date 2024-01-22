const Post = require('../models/postModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getPostByInteraction = catchAsync(async (req, res, next) => {
  const postNames = req.query.postNames.split(',');

  // Look for orders that contain **all** of the supplied product names
  const posts = await Post.find({});
  if (!posts) {
    return next(new AppError('Error getting Orders Document', 404));
  }

  const filteredPosts = posts.filter((post) =>
    postNames.every((postName) =>
      post.title.some((post) => post.name === postName),
    ),
  );

  return res.status(200).json({
    status: 'success',
    results: filteredPosts.length,
    data: {
      data: filteredPosts,
    },
  });
});