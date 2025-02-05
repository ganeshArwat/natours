const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

// nested routes
// POST /tour/234fad4/reviews
// POST /reviews

router
  .route('/')
  .get(authController.protect, reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.CreateReview,
  );

// router
//   .route('/:id')
//   .get(reviewController.getReview)
//   .patch(reviewController.updateReview)
//   .delete(
//     authController.protect,
//     authController.restrictTo('admin'),
//     reviewController.deleteReview,
//   );

module.exports = router;
