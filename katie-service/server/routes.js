const express = require('express');
const Review = require('../db/models/Reviews');

const router = express.Router();

router.get('/reviews/:productId', (req, res) => {
  Review.findAll({
    where: {
      product_id: req.params.productId
    },
    order: [
      ['date_created', 'DESC'],
    ]
  })
    .then(reviews => {
      res.send(reviews);
    })
    .catch(err => {
      res.sendStatus(404);
    })
});

router.get('/reviews/:productId/:rating', (req, res) => {
  Review.findAll({
    where: {
      product_id: req.params.productId,
      rating: req.params.rating
    },
    order: [
      ['date_created', 'DESC'],
    ]
  })
    .then(reviews => {
      res.send(reviews);
    })
    .catch(err => {
      res.sendStatus(404);
    })
});

router.get('/reviews/:productId/ratings_overview', (req, res) => {
  Review.findAll({
    where: { product_id: req.params.productId },
    attributes: ['id', 'rating']
  })
  .then(ratings => {
    res.send(ratings);
  })
});

router.patch('/reviews/:reviewId/:thumb', (req, res) => {
  Review.findOne({
    where: {
      id: req.params.reviewId
    }
  })
    .then(review => {
      review.increment(req.params.thumb);
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.sendStatus(404);
    })
})

module.exports = router;

