const Sequelize = require('sequelize');
const db_reviews = require('../index');
const Products = require('./Products');

const Review = db_reviews.define('review', {
  rating: Sequelize.INTEGER,
  headline: Sequelize.STRING(75),
  comments: Sequelize.STRING(500),
  username: Sequelize.STRING(50),
  thumbs_up: Sequelize.INTEGER,
  thumbs_down: Sequelize.INTEGER,
  tags: Sequelize.STRING,
  date_created: Sequelize.DATE
}, {
    timestamps: false,
  }
);

Review.belongsTo(Products, { as: "product", foreignKey: "product_id" });

module.exports = Review;

